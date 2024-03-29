import { async } from 'regenerator-runtime';
import View from './View';

class FormSearchCity extends View {
  _parElement = document.querySelector('#weather_Form');
  _Regex = /^([a-zA-Z]+(\ ?)+)+$/;
  _RegexLocation = /^\?city=[a-zA-Z]+$/;
  constructor() {
    super();
  }
  _generateMarkUp() {
    return `<div class="form-group position-relative">
    <input
      class="form-control form-control-lg position-relative"
      type="text"
      placeholder="typing city..."
      id="input_QuerySearch"
      name="city"
    />
    <button type='submit' class="btn border-0" id="weather_ButtonSerch">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
    <span class='invalid-feedback text-danger text-capitalize fw-bold'>Input characters must be letter type</span>
  </div>`;
  }
  // Render Form
  _windowLoading(handler) {
    window.addEventListener('load', function () {
      handler();
    });
  }
  // Get SearchParam When Load Page
  _addHandlerSendFormLoadingPage(handler) {
    window.addEventListener('load', loadPage.bind(this));
    function loadPage() {
      const newUrl = new URL(document.URL);
      const searchParam = newUrl.search;
      const city = newUrl.searchParams.get('city');
      if (this._RegexLocation.test(searchParam)) handler(city);
    }
  }
  // Set SearchParam When Send Form
  __SetSearchLoadingPage(city) {
    const newUrl = new URL(location.href);
    newUrl.searchParams.set('city', city);
    history.replaceState({ city }, '', `${newUrl.href}`);
  }
  _addHandlerSendForm(handler) {
    this._parElement.addEventListener('submit', sendForm.bind(this));
    async function sendForm(e) {
      e.preventDefault();
      const data = Object.fromEntries([...new FormData(e.currentTarget)]);
      const { city } = data;
      const validation = this._checkValidationCity(city);
      if (validation) {
        this.__SetSearchLoadingPage(city);
        handler(city);
      }
      this._clearForm();
    }
  }
  _addHandlerCheckBlur() {
    this._parElement.querySelectorAll('input').forEach((input) => {
      ['focus', 'input', 'blur'].forEach((handler) => {
        input.addEventListener(handler, checkBlur.bind(this));
        function checkBlur() {
          const data = Object.fromEntries([...new FormData(this._parElement)]);
          const { city } = data;
          this._checkValidationCity(city);
        }
      });
    });
  }
  _checkValidationCity(valueCity) {
    let input_QuerySearch =
      this._parElement.querySelector('#input_QuerySearch');
    if (!this._Regex.test(valueCity)) {
      input_QuerySearch.classList.add('is-invalid');
    } else {
      input_QuerySearch.classList.remove('is-invalid');
    }
    return this._Regex.test(valueCity);
  }
  _clearForm() {
    this._parElement.querySelectorAll('input').forEach((input) => {
      input.value = '';
      input.classList.remove('is-invalid');
    });
  }
}

export default new FormSearchCity();
