/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
import fetchWeather from './app'

export default class Display {
  static getUserInput() {
    const inputField = document.getElementById('input-field');
    return inputField.value;
  }

  static resetInputField() {
    const inputField = document.getElementById('input-field');
    inputField.value = '';
  }

  static fetchButtonListener() {
    const inputField = document.getElementById('input-field');
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', async () => {
      if (inputField.value === '') return;
      Display.updateDisplay(await fetchWeather(inputField.value));
      Display.resetInputField();
    });
  }

  static updateDisplay(data) {
    const targetCity = document.querySelector('.city');
    const targetWeather = document.querySelector('.weather');
    const targetTemp = document.querySelector('.temperature');
    targetCity.textContent = `${data.city}`;
    targetWeather.textContent = `${data.weather}`;
    targetTemp.textContent = `${data.temperature}°`;
  }

  static initializeWebsite() {
    const submitForm = document.getElementById('user-input');
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    Display.fetchButtonListener();
  }
}
