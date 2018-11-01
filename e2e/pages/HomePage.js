class HomePage {
  get buttonPressMe(){
    return element(by.text('Press Me'));
  }

  get imageButton(){
    return element(by.id('ButtonImage'))
  }

  get showModal(){
    return element(by.text('Show Modal'));
  }

  tapPolideaButton(){
    return this.imageButton.tap();
  }

  tapPressMeButton(){
    return this.buttonPressMe.tap()
  }

  tapShowModal(){
    this.showModal.tap()
  }

}
module.exports = new HomePage();
