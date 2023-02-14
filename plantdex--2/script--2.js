// const plantSpecs = {
//   'Spider plant': {
//     name: 'spiderplant',
//     title: 'Spider Plant',
//     light: 'Shade to partial sun',
//     water: 'water when soil dries out',
//     temp: '70-90F',
//     insects: [
//       'preferes well draining soil',
//       'Add perlite or orchid bark to potting mix',
//     ],
//     climate: 'average',
//     img: 'images/4chlorpohytumcurlyspiderplat_bonnie_2_2000x.jpeg',
//   },
//   'Peace lily': {
//     name: 'peace-lily',
//     title: 'Peace Lily',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     climate: 'average',
//     img: 'images/peace-lily-houseplant.jpeg',
//   },
//   'Silver vase': {
//     name: 'bromeliad',
//     title: 'Guzmania Sunnytime',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['preferes well draining soil'],
//     climate: 'average',
//     img: 'images/neoregelia-bromeliad-plant.jpeg',
//   },
//   'Birdnest fern': {
//     name: 'Birds-Nest-Fern',
//     title: 'Birds Nest Fern',
//     light: 'indoors with natural indirect sunlight',
//     water: 'dont let the top of the soil dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     climate: 'above average',
//     img: 'images/birds-nest-fern-plant.jpeg',
//   },
//   'White Pothos': {
//     name: 'marblepothos',
//     title: 'Marble Pothos',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     climate: 'average',
//     img: 'images/pothos-marble-queen-plant.jpeg',
//   },
//   'Splitleaf Philodendron': {
//     name: 'splitleafphilodendron',
//     title: 'Split Leaf Philodendron',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     climate: 'average',
//     img: 'images/splitleaf.jpeg',
//   },
//   'Chinese Evergreen': {
//     name: 'Aglaonema-Silver-Bay',
//     title: 'Aglaonema Silver Bay',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     climate: 'average',
//     img: 'images/aglaonema-silver-bay-plants-close.jpeg',
//   },
//   'Fidleleaf fig': {
//     name: 'fiddleleaffig',
//     title: 'Fiddle Leaf Fig',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     climate: 'average',
//     img: 'images/fiddleleaffig.jpeg',
//   },
// };

const finalPlantSpecs = {
  'Spider plant': {
    img: 'images/4chlorpohytumcurlyspiderplat_bonnie_2_2000x.jpeg',
  },
  'Peace lily': {
    img: 'images/peace-lily-houseplant.jpeg',
  },
  'Silver vase': {
    img: 'images/neoregelia-bromeliad-plant.jpeg',
  },
  'Birdnest fern': {
    img: 'images/birds-nest-fern-plant.jpeg',
  },
  'White Pothos': {
    img: 'images/pothos-marble-queen-plant.jpeg',
  },
  'Splitleaf Philodendron': {
    img: 'images/splitleaf.jpeg',
  },
  'Chinese Evergreen': {
    img: 'images/aglaonema-silver-bay-plants-close.jpeg',
  },
  'Fidleleaf fig': {
    img: 'images/fiddleleaffig.jpeg',
  },
  'Rosy Maidenhair': {
    img: 'images/maidenhair.jpeg',
  },
  'Elephant ear': {
    img: 'images/Elephant ear.jpeg',
  },
  'Cast iron plant': {
    img: 'images/cast-iron.jpeg',
  },
  'Bronze Anthurium': {
    img: 'images/AnthuriumBronze.jpeg',
  },
  'Fish tail palm': {
    img: 'images/fishtailpam.jpeg',
  },
  'Medallion Calathea': {
    img: '../images/MedallionCalathea.jpeg',
  },
  'Bamboo palm': {
    img: 'images/bamboopalm.jpeg',
  },
  Stromante: {
    img: 'images/stomanthe.jpeg',
  },
  'Jade Plant': {
    img: 'images/jadeplant.jpeg',
  },
  'Stiped calathea': {
    img: 'images/Stiped calathea.jpeg',
  },
  'Yellow Malaysian Dracaena': {
    img: 'images/Yellow Malaysian Dracaena.jpeg',
  },
  'Sago palm': {
    img: 'images/sagopalm.jpeg',
  },
  'Rubber plant': {
    img: 'images/Rubber plant.jpeg',
  },
  'Orchid cactus': {
    img: 'images/Orchid cactus.jpeg',
  },
  'Weeping fig': {
    img: 'images/Weeping fig.jpeg',
  },
  'Epipremnum aureum': {
    img: 'images/Epipremnum aureum.jpeg',
  },
  'Wax plant': {
    img: 'images/Wax plant.jpeg',
  },
};
//DECLARE VARIABLES
const card = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');

// let isAttached = false;

const settings = {
  async: true,
  crossDomain: true,
  url: 'https://house-plants.p.rapidapi.com/all',
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '110702e4e6msh7bce794b4d1bfcap1807a7jsn254d9ee8a80b',
    'X-RapidAPI-Host': 'house-plants.p.rapidapi.com',
  },
};

$.ajax(settings).done(getPlantInfo);

// HANDLE THE CLICK EVENT ON EACH CARD AND OPEN THE MODAL
card.forEach(function (a) {
  a.addEventListener('click', function (e) {
    const plantCard = e.currentTarget.dataset.id;
    // console.log('I am clicked');
    // console.log(plantCard);
    if (plantCard in finalPlantSpecs) {
      // console.log('I am ' + plantCard);
      modalOverlay.classList.toggle('open-modal');
      let plantInfo = displayPlantInfo(plantCard);
      // console.log(plantInfo);
      modalContent.innerHTML = plantInfo;
      // if (isAttached === false) {
      handleCloseModalBtn();
      // }
    }
  });
});

function handleOpenModal() {
  modalOverlay.classList.toggle('open-modal');
}
function handleCloseModalBtn() {
  const closeBtn = document.querySelector('.close');

  closeBtn.addEventListener('click', function () {
    // console.log('I am clicked from closing');
    modalOverlay.classList.toggle('open-modal');
    // isAttached = true;
  });
}

//GET THE DATA FROM THE SERVER
function getPlantInfo(response) {
  for (let index = 0; index < response.length; index++) {
    if (response[index]['common'][0] in finalPlantSpecs) {
      let key = response[index]['common'][0];
      // console.log(response[index]);

      finalPlantSpecs[key]['title'] = response[index]['common'][0];
      finalPlantSpecs[key]['light'] = response[index]['ideallight'];
      finalPlantSpecs[key]['water'] = response[index]['watering'];
      finalPlantSpecs[key]['temp'] =
        response[index]['tempmin']['fahrenheit'] +
        'F ' +
        ' - ' +
        response[index]['tempmax']['fahrenheit'] +
        ' F';
      finalPlantSpecs[key]['insects'] = response[index]['insects'];

      // for (let i = 0; i < finalPlantSpecs[key]['insects'].length; i++) {
      //   finalPlantSpecs[key]['insects'][i] = response[index]['insects'][i];
      // }
      finalPlantSpecs[key]['climate'] = response[index]['climate'];
    }
  }
}

// DISPLAY PLANTINFO ON THE MODAL
function displayPlantInfo(plantCard) {
  return `<div class="modal-header">
                    <h1 class="modal-plantName">${finalPlantSpecs[plantCard]['title']}</h1>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times-circle-o modal_closeBtn" aria-hidden="true"></i>
                    </button>
                </div><!-- End of Modal-header -->
                <div class="modal-body">
                    <article class="modal-left">
                        <div class="specs">
                            <div class="specTitle">
                                <h1>light</h1>
                            </div>
                            <div class="specIcon">
                                <img src="icn/sun.png" alt="" class="plantCard_icn">
                            </div>
                            <article class="description ">
                                <ul>
                                    <li><span class="specDesc">${finalPlantSpecs[plantCard]['light']}</span></li>
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
                                    <li><span class="specDesc">${finalPlantSpecs[plantCard]['water']}</span></li>
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
                                    <li><span class="specDesc">${finalPlantSpecs[plantCard]['temp']}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="specs">
                            <div class="specTitle">
                                <h1>insects</h1>
                            </div>
                            <div class="specIcon">
                                <img src="icn/insect.png" alt="" class="plantCard_icn">
                            </div>
                            <div class="description">
                                <ul>
                                    <li><span class="specDesc">${finalPlantSpecs[plantCard]['insects']}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="specs">
                            <div class="specTitle">
                                <h1>climate</h1>
                            </div>
                            <div class="specIcon">
                                <img src="icn/humidity.png" alt="" class="plantCard_icn">
                            </div>
                            <div class="description">
                                <ul>
                                    <li><span class="specDesc">${finalPlantSpecs[plantCard]['climate']}</span></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article class="modal-right">
                        <img src="${finalPlantSpecs[plantCard]['img']}" alt="plant image" class="modal_img">
                    </article>
                </div>`;
}
