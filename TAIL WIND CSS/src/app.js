let dropdown = document.getElementById("dropdown");
console.log(dropdown);
let mainDropdown = document.getElementById("main_dropdown");
mainDropdown.addEventListener("mouseenter", e => {
   e.stopPropagation();
  mainDropdown.innerHTML = `Features <i class="fa-solid fa-chevron-down"></i>`;
  dropdown.style.display = "block";
//   dropdown.style.background = "red";
});
dropdown.addEventListener("mouseleave", e => {
//   e.stopImmediatePropagation();
  mainDropdown.innerHTML = `Features <i class="fa-solid fa-chevron-up"></i>`;
  dropdown.style.display = "none";
});
