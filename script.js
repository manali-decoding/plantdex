const plantSpecs = [
  {
    id: 1,
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
    id: 2,
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

card.forEach(function (c) {
  c.addEventListener('click', function (e) {
    const plantCard = e.currentTarget.dataset.id;
    console.log(plantCard);
    handleCardButtonClick();
    //console.log(modalOverlay.classList);
  });
});

closeBtn.addEventListener('click', function () {
  //console.log(modalOverlay.classList);
  handleCardButtonClick();
});

function handleCardButtonClick() {
  modalOverlay.classList.toggle('open-modal');
}

// window.addEventListener('DOMContentLoaded', function () {
//   displayPlantSpecs(plantSpecs);
// });

// function displayPlantSpecs(specs) {
//   let displaySpecs = [specs].map(function(plant){
// console.log(plant);

//     return '<article class="modal-content">
//                 <div class="modal-header">
//                     <h1 class="modal-plantName">${plant.title}</h1>

//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <i class="fa fa-times-circle-o modal_closeBtn" aria-hidden="true"></i>
//                     </button>
//                 </div><!-- End of Modal-header -->
//                 <div class="modal-body">
//                     <div class="modal-left">
//                         <div class="light specs">
//                             <div class="specTitle">
//                                 <h1>${light}</h1>
//                             </div>
//                             <div class="specIcon">
//                                 <img src="icn/sun.png" alt="" class="plantCard_icn">
//                             </div>
//                             <div class="description">
//                                 <ul>
//                                     <li><span>${plant.light}</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div class="water specs">
//                             <div class="specTitle">
//                                 <h1>${water}</h1>
//                             </div>
//                             <div class="specIcon">
//                                 <img src="icn/water.png" alt="" class="plantCard_icn">
//                             </div>
//                             <div class="description">
//                                 <ul>
//                                     <li><span>${plant.water}</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div class="temp specs">
//                             <div class="specTitle">
//                                 <h1>${temp}</h1>
//                             </div>
//                             <div class="specIcon">
//                                 <img src="icn/temp.png" alt="" class="plantCard_icn">
//                             </div>
//                             <div class="description">
//                                 <ul>
//                                     <li><span>${plant.temp}</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div class="soil specs">
//                             <div class="specTitle">
//                                 <h1>${soil}</h1>
//                             </div>
//                             <div class="specIcon">
//                                 <img src="icn/soil.png" alt="" class="plantCard_icn">
//                             </div>
//                             <div class="description">
//                                 <ul>
//                                     <li><span>${plant.soil[0]}</span></li>
//                                     <li><span>${plant.soil[1]}</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div class="humidity specs">
//                             <div class="specTitle">
//                                 <h1>${humidity}</h1>
//                             </div>
//                             <div class="specIcon">
//                                 <img src="icn/humidity.png" alt="" class="plantCard_icn">
//                             </div>
//                             <div class="description">
//                                 <ul>
//                                     <li><span>#{plant.humidity}</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="modal-right">
//                         <img src="${plant.img}" alt="snake plant image" class="modal_img">
//                     </div>
//                 </div> <!-- End of Modal-body -->
//             </article>';

//   });

// displaySpecs = displaySpecs.join('');
// console.log(displaySpecs);

// modalOverlay.innerHTML = displaySpecs;
