const HomePage = require('../pages/HomePage.js')
const PizzaPage = require('../pages/PizzaPage.js')

describe('Pizza Page', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});

  });

  it('2 words should be translated as 🍕 🍕', async () => {
    await waitFor(element(by.id('button_text'))).toBeVisible().withTimeout(10000);
    HomePage.tapShowModal();
    await expect(PizzaPage.pizza_header).toBeVisible()
    PizzaPage.typeText('My Text Malformed');
    await expect(PizzaPage.pizza_translation).toHaveText('🍕 🍕');
  });

  it('should Modal be closed after tap on react native icon', async () => {
    PizzaPage.tapExit()
    await expect(HomePage.buttonPressMe).toBeVisible();
  });

  it('should alert be displayed when press back button', async() => {
    await device.pressBack();
    await expect(PizzaPage.alert_text).toBeVisible();
  });
})
