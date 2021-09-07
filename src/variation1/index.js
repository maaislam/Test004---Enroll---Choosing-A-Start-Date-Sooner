var chooseStartDateSooner = {
  init: function () {
    //this.mainCss();
    this.mainJS();
  },
  mainCss: function () {
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    document.head.appendChild(s).textContent = '';
  },
  mainJS: function () {
    var dropdown = document.querySelector('#date-dropdown-billing');
    dropdown.closest('.form__grid').classList.add('ng-hide');

    // collect dates in step 1

    var dateOptions = document.querySelectorAll('select[name="courseId"] > option');

    var startdates = Array.from(dateOptions)
      .map(function (item, i) {
        return i > 0 && moment(item.getAttribute('label'), ['MMMMDDY', 'MMMMDDY']).format('MMM Do, Y');
      })
      .filter(Boolean);

    chooseStartDateSooner.renderDateSelector(startdates);
  },
  renderDateSelector: function (dateArr) {
    var headline = document.createElement('div');
    headline.innerHTML = 'Choose start date';
    headline.classList.add('newdate-selector__headline');

    var newDateContainer = document.createElement('div');
    newDateContainer.classList.add('newdate-container');

    var anchorElm = document.querySelector('.form-progress');

    dateArr.forEach(function (newDate, i) {
      var singleDate = document.createElement('div');

      singleDate.classList.add('single-date');

      singleDate.innerHTML = newDate;
      newDateContainer.append(singleDate);

      if (i === 0) {
        singleDate.classList.add('selected');
        chooseStartDateSooner.selectActual(i);
      }
      singleDate.addEventListener('click', function (e) {
        Array.from(e.target.closest('.newdate-container').children).forEach(function (item) {
          item.classList.remove('selected');
        });

        e.target.classList.add('selected');
        chooseStartDateSooner.selectActual(i);
      });
    });
    anchorElm.insertAdjacentElement('afterend', newDateContainer);
    anchorElm.insertAdjacentElement('afterend', headline);
  },
  selectActual: function (index) {
    var dropdown = document.querySelector('#date-dropdown-billing');
    dropdown.getElementsByTagName('option')[index + 1].selected = 'selected';
    dropdown.dispatchEvent(new Event('change'));
  },
};

(function pollForLoadVariation() {
  if (document.readyState === 'complete') {
    try {
      chooseStartDateSooner.init();
      console.log('Test004 - Enroll - Choosing A Start Date Sooner');
    } catch (error) {
      console.log('Initialization error:', error);
    }
  } else {
    setTimeout(pollForLoadVariation, 25);
  }
})();

/***********************donot copy to after this line******************************/

export default chooseStartDateSooner;
