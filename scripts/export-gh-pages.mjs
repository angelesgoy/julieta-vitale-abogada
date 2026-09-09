import { mkdir, writeFile, cp, readdir, readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const outDir = resolve(rootDir, "gh-pages-export");
const repoBase = "/julieta-vitale-abogada";

async function exportPages() {
  console.log("Loading server worker...");
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  const { default: worker } = await import(workerUrl.href);

  console.log("Copying client assets...");
  await cp(resolve(rootDir, "dist/client"), outDir, { recursive: true });
  await writeFile(resolve(outDir, ".nojekyll"), "");

  const routes = [
    { path: "/", file: "index.html" },
    { path: "/sobre-mi", file: "sobre-mi/index.html" },
    { path: "/areas-de-practica", file: "areas-de-practica/index.html" },
    { path: "/contacto", file: "contacto/index.html" },
  ];

  for (const route of routes) {
    console.log(`Rendering ${route.path}...`);
    const req = new Request(`http://localhost${route.path}`, {
      headers: { accept: "text/html" },
    });
    const res = await worker.fetch(req, {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) }
    }, {
      waitUntil() {},
      passThroughOnException() {}
    });

    let html = await res.text();

    html = html
      .replaceAll('href="/_next/', `href="${repoBase}/_next/`)
      .replaceAll('src="/_next/', `src="${repoBase}/_next/`)
      .replaceAll('href="/favicon', `href="${repoBase}/favicon`)
      .replaceAll('src="/julieta-principal.png"', `src="${repoBase}/julieta-principal.png"`)
      .replaceAll('src="/julieta-secundaria.png"', `src="${repoBase}/julieta-secundaria.png"`)
      .replaceAll('src="/julieta-tercera.png"', `src="${repoBase}/julieta-tercera.png"`)
      .replaceAll('href="/julieta-principal.png"', `href="${repoBase}/julieta-principal.png"`)
      .replaceAll('href="/julieta-secundaria.png"', `href="${repoBase}/julieta-secundaria.png"`)
      .replaceAll('href="/julieta-tercera.png"', `href="${repoBase}/julieta-tercera.png"`)
      .replaceAll('src="/instagram-icon.png"', `src="${repoBase}/instagram-icon.png"`)
      .replaceAll('src="/whatsapp-icon.png"', `src="${repoBase}/whatsapp-icon.png"`)
      .replaceAll('href="/instagram-icon.png"', `href="${repoBase}/instagram-icon.png"`)
      .replaceAll('href="/whatsapp-icon.png"', `href="${repoBase}/whatsapp-icon.png"`)
      .replaceAll('content="http://localhost:3000/og.png"', `content="https://angelesgoy.github.io${repoBase}/og.png"`)
      .replaceAll('href="/"', `href="${repoBase}/"`)
      .replaceAll('href="/#inicio"', `href="${repoBase}/#inicio"`)
      .replaceAll('href="/sobre-mi"', `href="${repoBase}/sobre-mi/"`)
      .replaceAll('href="/areas-de-practica"', `href="${repoBase}/areas-de-practica/"`)
      .replaceAll('href="/contacto"', `href="${repoBase}/contacto/"`);

    const filePath = resolve(outDir, route.file);
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, html, "utf8");
  }

  const cssDir = resolve(outDir, "_next/static/css");
  try {
    const cssFiles = await readdir(cssDir);
    for (const f of cssFiles) {
      if (f.endsWith(".css")) {
        const p = resolve(cssDir, f);
        let content = await readFile(p, "utf8");
        content = content.replaceAll("url(/whatsapp-icon.png)", `url(${repoBase}/whatsapp-icon.png)`);
        await writeFile(p, content, "utf8");
      }
    }
  } catch (e) {
    console.warn("Could not patch CSS files:", e);
  }

  const indexHtml = await readFile(resolve(outDir, "index.html"), "utf8");
  await writeFile(resolve(outDir, "404.html"), indexHtml, "utf8");

  console.log("Static export complete in:", outDir);
}

exportPages().catch(err => {
  console.error("Export failed:", err);
  process.exit(1);
});
