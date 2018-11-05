describe('Example', () => {

  beforeEach(async () => {
    await device.reloadReactNative();
    //await device.launchApp({newInstance: true});
    await waitFor(element(by.id('ButtonText'))).toBeVisible().withTimeout(10000);
  });

  it('should Press me text be displayed', async () => {

    await waitFor(element(by.text("Press Me"))).toBeVisible().withTimeout(1);
    await expect(element(by.text('Press Me'))).toBeVisible();

  });

  it('should ButtonText id be displayed', async () => {
    await expect(element(by.id('ButtonText'))).toBeVisible();
  });

  it('should Polidea logo be displayed after click on button', async () => {
    await element(by.id('ButtonText')).tap();
    await waitFor(element(by.id('ButtonImage'))).toBeVisible().withTimeout(2000);
    await expect(element(by.id('ButtonImage'))).toBeVisible();

  });
  it ('should Press me text be morphed in Polidea title after click on button',async () =>{
    await element(by.id('ButtonText')).tap();

    await waitFor(element(by.text("Press Me"))).toNotExist().withTimeout(2000);
    await expect(element(by.text('Press Me'))).toNotExist();

    await waitFor(element(by.text("Polidea"))).toBeVisible().withTimeout(100);
    await expect(element(by.text('Polidea'))).toBeVisible();

  });

  it ('after should be Podlasie text displayed', async () => {
    await element(by.id('ButtonText')).tap();
    await waitFor(element(by.text('Press Me'))).toNotExist().withTimeout(2000);
    await expect(element(by.text('Podlasie'))).toBeVisible();
  });


})
