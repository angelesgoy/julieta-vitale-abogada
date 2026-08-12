"use client";

import { useEffect } from "react";

export default function TypographyGuard() {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 800px)").matches) return;
    const selector = "main h1, main h2, main h3, main p, main address, footer p";
    const shortWords = /\b(a|al|de|del|el|en|la|las|los|o|por|para|sin|un|una|y)\s+/gi;
    document.querySelectorAll(selector).forEach((element) => {
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        node.nodeValue = node.nodeValue?.replace(shortWords, "$1\u00a0") ?? null;
      }
    });
  }, []);
  return null;
}
