document.addEventListener("click", (e) => {
  if (e.target.classList.contains("control-btn")) {
    if (e.target.classList.contains("enable")) {
      e.target.classList.remove("enable");
      e.target.classList.add("disable");
    } else {
      e.target.classList.remove("disable");
      e.target.classList.add("enable");
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("backup-period")) {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      let element = document.querySelectorAll(".backup-period");
      element.forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("backup-plan")) {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      let element = document.querySelectorAll(".backup-plan");
      element.forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  }
});
