const plantSpecs = [
  {
    name: 'snake',
    title: 'Sansevieria / Snake Plant',
    light: 'Shade to partial sun',
    water: 'water when soil dries out',
    temp: '70-90F',
    soil: [
      'preferes well draining soil',
      'Add perlite or orchid bark to potting mix',
    ],
    humidity: 'average',
    img: 'images/sansevieria-houseplant.jpeg',
  },
  {
    name: 'peace-lily',
    title: 'peace lily',
    light: 'indoors with natural indirect sunlight',
    water: 'water when top soil feels dry',
    temp: '65-80F',
    soil: ['peat based potting mix with perlite and sand'],
    humidity: 'average',
    img: 'images/peace-lily-houseplant.jpeg',
  },
];

const card = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close');
// let light = document.querySelector('.light');
// let water = document.querySelector('.water');
let modalRight = document.querySelector('.modal-right');
let modalLeft = document.querySelector('.modal-left');
let modalBody = document.querySelector('.modal-body');

card.forEach(function (c) {
  c.addEventListener('click', function (e) {
    const plantCard = e.currentTarget.dataset.id;
    console.log(plantCard);
    if (plantCard === 'peace-lily') {
      modalOverlay.classList.toggle('open-modal');
      let desc = displayPlantSpecs();
      console.log('calling from outside of the fn --- ' + desc);
      // console.log(description);
      modalBody.innerHTML = desc;

      // water.innerHTML = desc;
      // specs.innerHTML = desc;
    }

    // handleCardButtonClick();
    //console.log(modalOverlay.classList);
  });
});

// window.addEventListener('DOMContentLoaded', function () {
//   displayPlantSpecs(plantSpecs);
// });

function displayPlantSpecs() {
  // let displaySpecs
  // console.log(plant);
  return `<article class="modal-left">
            <div class="specs">
              <div class="specTitle">
                  <h1>light</h1>
              </div>
              <div class="specIcon">
                  <img src="icn/sun.png" alt="" class="plantCard_icn">
              </div>
              <article class="description ">
                  <ul>
                      <li><span class="specDesc">${plantSpecs[1]['light']}</span></li>
                  </ul>
              </article>
          </div>
          <div class="specs">
              <div class="specTitle">
                  <h1>Water</h1>
              </div>
              <div class="specIcon">
                  <img src="icn/water.png" alt="" class="plantCard_icn">
              </div>
              <article class="description">
                  <ul>
                      <li><span class="specDesc">${plantSpecs[1]['water']}</span></li>
                  </ul>
              </article>
          </div>
          <div class="specs">
              <div class="specTitle">
                  <h1>temp</h1>
              </div>
              <div class="specIcon">
                  <img src="icn/temp.png" alt="" class="plantCard_icn">
              </div>
              <div class="description">
                  <ul>
                      <li><span class="specDesc">${plantSpecs[1]['temp']}</span></li>
                  </ul>
              </div>
          </div>
          <div class="specs">
              <div class="specTitle">
                  <h1>soil</h1>
              </div>
              <div class="specIcon">
                  <img src="icn/soil.png" alt="" class="plantCard_icn">
              </div>
              <div class="description">
                  <ul>
                      <li><span class="specDesc">${plantSpecs[1]['soil'][0]}</span></li>
                      <li><span class="specDesc">${plantSpecs[1]['soil'][1]}</span></li>
                  </ul>
              </div>
          </div>
          <div class="specs">
              <div class="specTitle">
                  <h1>humidity</h1>
              </div>
              <div class="specIcon">
                  <img src="icn/humidity.png" alt="" class="plantCard_icn">
              </div>
              <div class="description">
                  <ul>
                      <li><span class="specDesc">${plantSpecs[1]['humidity']}</span></li>
                  </ul>
              </div>
            </div>
          </article>
          <article class="modal-right">
           <img src="${plantSpecs[1]['img']}" alt="peace lily plant image" class="modal_img">
          </article>`;
}

//
// <article class="modal-left">
// </article>

closeBtn.addEventListener('click', function () {
  //console.log(modalOverlay.classList);
  handleCardButtonClick();
});

function handleCardButtonClick() {
  modalOverlay.classList.toggle('open-modal');
}

// displaySpecs = displaySpecs.join('');
// console.log(displaySpecs);

// modalOverlay.innerHTML = displaySpecs;
