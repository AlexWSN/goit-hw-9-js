!(function () {
  let t = document.querySelector("button[data-start]"),
    e = document.querySelector("button[data-stop]"),
    a = null;
  t.addEventListener("click", () => {
    (t.disabled = !0),
      (e.disabled = !1),
      (a = setInterval(() => {
        document.body.style.background = (function () {
          let t = `#${Math.floor(0xffffff * Math.random())
              .toString(16)
              .padStart(6, "0")}`,
            e = `#${Math.floor(0xffffff * Math.random())
              .toString(16)
              .padStart(6, "0")}`;
          return `linear-gradient(45deg, ${t}, ${e})`;
        })();
      }, 1e3));
  }),
    e.addEventListener("click", () => {
      (e.disabled = !0), (t.disabled = !1), clearInterval(a);
    });
})();
//# sourceMappingURL=01-color-switcher.14bd82ed.js.map
