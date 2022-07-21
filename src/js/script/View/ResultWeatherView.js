import View from './View';

class ResultWeatherView extends View {
  _parElement = document.querySelector('.custom_Weather_Information');
  constructor() {
    super();
  }
  _generateMarkUp() {
    console.log(this._data);
    return `<p class="custom_Weather_City mt-2 pe-2 py-2">
    <strong class="fw-bolder text-info">${this._data.name}-${this._data.country}</strong> weather
  </p>
  <p class="custom_Weather_Temp mt-2 pe-2">${this._data.temp}°C</p>
  <p class="custom_Weather_Description mt-3 d-flex justify-content-start align-items-center">
  <img
      src="${this._data.tempImg}"
      class="custom_Weather_Description-Img"
      alt="not found picture"
    />
  <strong> ${this._data.description}</strong>
  </p>
  <p class="custom_Weather_Humidity mt-3"> <strong>humidity</strong> : ${this._data.humidity}%</p>
  <p class="custom_Weather_Speed mt-3"><strong>wind speed</strong> : ${this._data.wind} km/h</p>`;
  }
  _renderLoading() {
    this._clear();
    const markUp = `<div class="card" id='weather-Loading'>
    <div class="card-header py-4 px-2">
      <section class="placeholder-glow d-flex justify-content-center">
        <span
          class="placeholder placeholder-lg col-10 rounded-1 bg-secondary"
        ></span>
      </section>
      <section class="card-body">
        <section class="placeholder-glow pe-2">
          <span
            class="placeholder placeholder-lg col-8 rounded-1 bg-secondary"
          ></span>
        </section>
        <section class="placeholder-glow pe-2 mt-4">
          <span
            class="placeholder placeholder-lg col-6 rounded-1 bg-secondary"
          ></span>
        </section>
        <section class="placeholder-glow pe-2 mt-4">
          <span
            class="placeholder placeholder-lg col-5 rounded-1 bg-secondary"
          ></span>
        </section>
        <section class="placeholder-glow pe-2 mt-4">
          <span
            class="placeholder placeholder-lg col-4 rounded-1 bg-secondary"
          ></span>
        </section>
        <section class="placeholder-glow pe-2 mt-4">
          <span
            class="placeholder placeholder-lg col-7 rounded-1 bg-secondary"
          ></span>
        </section>
      </section>
    </div>
  </div>
</div>`;
    this._parElement.insertAdjacentHTML('beforeend', markUp);
  }
  _changeBackgroundImage(data) {
    this._data = data;
    const container_Fluid = document.querySelector('.container-fluid');
    container_Fluid.style.backgroundImage = `url(${this._data.backgroundImg})`;
  }
}

export default new ResultWeatherView();
