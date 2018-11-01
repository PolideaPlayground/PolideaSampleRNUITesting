const HomePage = require('../pages/HomePage.js')
const PizzaPage = require('../pages/PizzaPage.js')
const assert = require('assert');

describe('Home Page', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    await waitFor(element(by.id('button_text'))).toBeVisible().withTimeout(10000);
  });

  it('should Press me text be displayed', async () => {
    await HomePage.tapPressMeButton();
    await waitFor(element(by.text("Polidea"))).toBeVisible().withTimeout(1);
    await expect(element(by.text('Polidea'))).toBeVisible();
  });

  it('should be Modal displayed after tap on Show Modal', async () => {
    HomePage.tapShowModal()
    await expect(PizzaPage.pizza_header).toBeVisible()
  });

})
