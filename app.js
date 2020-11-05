document.querySelectorAll("img[data-src]").forEach((e) => {
    let element = e;
    let src = e.getAttribute("data-src");
    element.src = src;
});