export default class View {
  _data;
  _render(data) {
    if (!data) return;
    this._data = data;
    this._clear();
    const markUp = this._generateMarkUp();
    this._parElement.insertAdjacentHTML('beforeend', markUp);
  }
  _renderLoading() {}
  _renderError(message = 'something else ...') {
    this._clear();
    const markUp = `<p class='Error_Message text-center text-warning'>${message}!</p>`;
    this._parElement.insertAdjacentHTML('beforeend', markUp);
  }
  _clear() {
    this._parElement.innerHTML = '';
  }
}
