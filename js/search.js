const searchForm = document.querySelector("#google-search");
const searchInput = document.querySelector("#google-search input");
const searchIcon = document.querySelector(
  "#google-search .fa-magnifying-glass"
);
const googleIcon = document.querySelector("#google-search .fa-google");

function handleInputVisible() {
  searchInput.classList.remove("hidden");
  googleIcon.classList.remove("no-visible");
}
function handleInputNoVisible() {
  searchInput.classList.add("hidden");
  googleIcon.classList.add("no-visible");
}
function handleSubmitSearchForm(event) {
  event.preventDefault();
  const inputValue = searchInput.value;
  location.href = `https://www.google.com/search?q=${inputValue}`;
  searchInput.value = "";
}

searchForm.addEventListener("mouseenter", handleInputVisible);
searchForm.addEventListener("click", handleInputVisible);
searchForm.addEventListener("mouseleave", handleInputNoVisible);
searchForm.addEventListener("submit", handleSubmitSearchForm);
