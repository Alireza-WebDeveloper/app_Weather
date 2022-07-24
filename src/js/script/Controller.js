'use strict';
import 'bootstrap';
import { async } from 'regenerator-runtime';
import FormSearchCity from './View/FormSearchCity';
import ResultWeatherView from './View/ResultWeatherView';
import * as Model from './Module';
import { TimeLoading } from './Helper';
const controllerFormSearchView = () => {
  FormSearchCity._render(true);
  FormSearchCity._addHandlerCheckBlur();
};
const controllerSendCity = async function (city) {
  try {
    await Model.loadingSingleCity(city);
    ResultWeatherView._changeBackgroundImage(Model.state.singleCity);
    ResultWeatherView._renderLoading();
    await TimeLoading();
    ResultWeatherView._render(Model.state.singleCity);
  } catch (error) {
    ResultWeatherView._renderError(error);
  }
};

(function () {
  FormSearchCity._windowLoading(controllerFormSearchView);
  FormSearchCity._addHandlerSendForm(controllerSendCity);
  FormSearchCity._addHandlerSendFormLoadingPage(controllerSendCity);
})();
