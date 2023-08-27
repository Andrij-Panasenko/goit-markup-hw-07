const tagsContainer = document.querySelector(".js-filter-btn-list");

tagsContainer.addEventListener("click", onTagsContsinerClick);

function onTagsContsinerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  evt.target.classList.toggle(".filter-btn--active");
}