// const plantSpecs = {
//   'Spidar plant': {
//     name: 'spiderplant',
//     title: 'Spider Plant',
//     light: 'Shade to partial sun',
//     water: 'water when soil dries out',
//     temp: '70-90F',
//     insects: [
//       'preferes well draining soil',
//       'Add perlite or orchid bark to potting mix',
//     ],
//     humidity: 'average',
//     img: 'images/4chlorpohytumcurlyspiderplat_bonnie_2_2000x.jpeg',
//   },
//   'Peace lily': {
//     name: 'peace-lily',
//     title: 'Peace Lily',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     humidity: 'average',
//     img: 'images/peace-lily-houseplant.jpeg',
//   },
//   bromeliad: {
//     name: 'bromeliad',
//     title: 'Neoregelia Bromeliad',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['preferes well draining soil'],
//     humidity: 'average',
//     img: 'images/neoregelia-bromeliad-plant.jpeg',
//   },
//   birdsNest: {
//     name: 'Birds-Nest-Fern',
//     title: 'Birds Nest Fern',
//     light: 'indoors with natural indirect sunlight',
//     water: 'dont let the top of the soil dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     humidity: 'above average',
//     img: 'images/birds-nest-fern-plant.jpeg',
//   },
//   marblepothos: {
//     name: 'marblepothos',
//     title: 'Marble Pothos',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     humidity: 'average',
//     img: 'images/pothos-marble-queen-plant.jpeg',
//   },
//   splitleafphilodendron: {
//     name: 'splitleafphilodendron',
//     title: 'Split Leaf Philodendron',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     humidity: 'average',
//     img: 'images/splitleaf.jpeg',
//   },
//   aglaonema: {
//     name: 'Aglaonema-Silver-Bay',
//     title: 'Aglaonema Silver Bay',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     humidity: 'average',
//     img: 'images/aglaonema-silver-bay-plants-close.jpeg',
//   },
//   fiddleleaffig: {
//     name: 'fiddleleaffig',
//     title: 'Fiddle Leaf Fig',
//     light: 'indoors with natural indirect sunlight',
//     water: 'water when top soil feels dry',
//     temp: '65-80F',
//     insects: ['peat based potting mix with perlite and sand'],
//     humidity: 'average',
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
  'Guzmania Sunnytime': {
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
};

const card = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');
let modalContent = document.querySelector('.modal-content');

// 1. GET THE DATA ON PAGE LOAD

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

// 2. HANDLE THE CLICK EVENT AND OPEN THE MODAL
// Object.keys(finalPlantSpecs).forEach((k) => {
card.forEach(function (c) {
  c.addEventListener('click', function (e) {
    // console.log('this is k ' + k);
    const plantCard = e.currentTarget.dataset.id;
    // console.log('this is the card that is clicked ' + plantCard);
    if (plantCard in finalPlantSpecs) {
      // console.log('I am ' + plantCard);
      // console.log(finalPlantSpecs[k]);
      modalOverlay.classList.toggle('open-modal');
      let desc = displayPlantSpecs(plantCard);
      // console.log(desc);
      // console.log(k);
      modalContent.innerHTML = desc;
      attachCloseHandlerToOverlay();
    }
  });
});

function handleCardButtonClick() {
  modalOverlay.classList.toggle('open-modal');
}

function attachCloseHandlerToOverlay() {
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function () {
    handleCardButtonClick();
  });
}

// 3. POPULATE THE DATA

function getPlantInfo(resp) {
  // build the data
  for (let i = 0; i < resp.length; i++) {
    if (resp[i]['common'][0] in finalPlantSpecs) {
      let key = resp[i]['common'][0];
      // console.log(resp[i]);
      // for (let key in finalPlantSpecs) {
      // console.log(key);
      finalPlantSpecs[key]['title'] = resp[i]['common'][0];
      finalPlantSpecs[key]['light'] = resp[i]['ideallight'];
      finalPlantSpecs[key]['water'] = resp[i]['watering'];
      finalPlantSpecs[key]['insects'] = resp[i]['insects'];
      finalPlantSpecs[key]['temp'] =
        resp[i]['tempmin']['fahrenheit'] +
        'F -' +
        resp[i]['tempmax']['fahrenheit'] +
        'F';
      finalPlantSpecs[key]['climate'] = resp[i]['climate'];

      // console.log(finalPlantSpecs[key]['title']);
      // }
    }
  }
}

// 3. DISPLAY THE DATA ON THE MODAL

function displayPlantSpecs(plantCard) {
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
