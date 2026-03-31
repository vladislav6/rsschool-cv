(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
hljs.highlightElement(document.querySelector("pre code"));
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu ul");
const body = document.body;
mobileMenu.addEventListener("click", () => {
  body.classList.add("scroll-hiden");
  menu.classList.add("mobile");
  if (menu.classList.contains("mobile")) {
    mobileMenu.classList.toggle("close");
  }
  if (!mobileMenu.classList.contains("close")) {
    body.classList.remove("scroll-hiden");
    menu.classList.remove("mobile");
  }
});
menuList.addEventListener("click", () => {
  body.classList.remove("scroll-hiden");
  menu.classList.remove("mobile");
  mobileMenu.classList.remove("close");
});
window.addEventListener("resize", () => {
  body.classList.remove("scroll-hiden");
  menu.classList.remove("mobile");
  mobileMenu.classList.remove("close");
});
//# sourceMappingURL=index-D5uBMSNt.js.map
