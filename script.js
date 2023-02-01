const card = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');

card.forEach(function (c) {
  c.addEventListener('click', function (e) {
    const plantCard = e.currentTarget.dataset.id;

    // modalOverlay.classList.add('.open-modal');
    // console.log(modalOverlay.classList);
  });
});
