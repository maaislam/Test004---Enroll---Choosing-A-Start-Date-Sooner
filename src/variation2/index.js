/*var gridLayoutGalleryBtn = {
  init: function () {
    this.mainCss();
    this.mainJS();
  },
  mainCss: function () {
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    document.head.appendChild(s).textContent = `
      #lightgallery {
        margin-right: 1em;
      }
      
      .LightGreenShelf .shelves:last-child .container .row {
        display: flex;
        flex-direction: column;
      }
      .LightGreenShelf .shelves:last-child .container .row div {
        width: 100%;
      }
      .LightGreenShelf .shelves:last-child .container .row div:first-child .text-content-inner-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      @media (max-width: 1024px) {
        .LightGreenShelf .shelves:last-child .container .row div:first-child .text-content-inner-wrapper {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      .LightGreenShelf .shelves:last-child .container .row div:first-child .text-content-inner-wrapper > a {
        margin-bottom: 35px;
      }
      .LightGreenShelf .shelves:last-child .container .row div:last-child {
        padding: 0;
      }
      
      .replacement-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
        height: 450px;
        overflow-y: hidden;
      }
      @media (max-width: 1024px) {
        .replacement-container {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
      @media (max-width: 768px) {
        .replacement-container {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 480px) {
        .replacement-container {
          grid-template-columns: 1fr;
        }
      }
      .replacement-container-img {
        width: 100%;
        height: 220px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      
      
      `;
  },
  mainJS: function () {
    //var declaration
    var lightGreenShelf = document.querySelector('.LightGreenShelf');
    var quoteBtn = document.querySelector('.quoteSprite1');
    var textContent = lightGreenShelf.getElementsByClassName('text-content')[1];
    var unStyledList = lightGreenShelf.getElementsByClassName('list-unstyled')[0];

    //create element
    var textContentWrapper = document.createElement('div');

    //add and modify
    textContentWrapper.classList.add('text-content-inner-wrapper');
    textContent.appendChild(textContentWrapper);
    textContentWrapper.appendChild(unStyledList);
    textContentWrapper.appendChild(quoteBtn);

    //collect image sources
    var imageSources = gridLayoutGalleryBtn.srcGrabber();

    //insert new images
    gridLayoutGalleryBtn.insertNewImage(imageSources);
  },
  srcGrabber: function () {
    //create an array from all the images
    var imageList = Array.from(document.getElementById('lightgallery').getElementsByTagName('*'));
    //make an containing all the img souce urls and return it
    var srcList = imageList
      .map((elm) => {
        var imgSource = elm.getAttribute('data-src');
        return imgSource;
      })
      .filter(Boolean);
    return srcList;
  },
  insertNewImage: function (imgSrcArray) {
    var imgContainerWrapper = document.createElement('div');
    imgContainerWrapper.classList.add('replacement-container');
    imgSrcArray.slice(0, 8).forEach((item) => {
      var imgContainer = document.createElement('div');

      imgContainer.style.backgroundImage = `url("${item}")`;

      imgContainer.classList.add('replacement-container-img');
      imgContainerWrapper.appendChild(imgContainer);
    });

    var carouselOpener = document.getElementById('lightgallery').getElementsByTagName('a')[0];

    carouselOpener.replaceChild(imgContainerWrapper, carouselOpener.firstElementChild);
  },
};

(function pollForLoadVariation() {
  if (document.readyState === 'complete') {
    gridLayoutGalleryBtn.init();
    console.log('Variation- A: 01');
  } else {
    setTimeout(pollForLoadVariation, 25);
  }
})();
*/
