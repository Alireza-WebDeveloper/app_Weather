'use strict';

import { async } from 'regenerator-runtime';
import { API_URL, API_KEY, API_IMG, API_BACKGROUND } from './Config';
import { Ajax, TimeLoading, TimeOUT } from './Helper';
const state = {
  singleCity: {},
};

const CreateStateCity = function (data) {
  this.temp = data.main.temp;
  this.name = data.name;
  this.country = data.sys.country;
  this.description = data.weather[0].description;
  this.tempImg = `${API_IMG}${data.weather[0].icon}@4x.png`;
  this.wind = data.wind.speed;
  this.humidity = data.main.humidity;
  this.backgroundImg = `${API_BACKGROUND}?${data.name}`;
};

const loadingSingleCity = async (city) => {
  try {
    const data = await Promise.race([
      TimeOUT(),
      await Ajax(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`),
    ]);
    if (!data) return;
    state.singleCity = new CreateStateCity(data);
  } catch (error) {
    throw error;
  }
};

export { state, loadingSingleCity };
