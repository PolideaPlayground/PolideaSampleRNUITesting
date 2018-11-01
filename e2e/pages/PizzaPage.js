class PizzaPage {
  get pizza_header(){
    return element(by.id('pizza_header'));
  }

  get pizza_entry(){
    return element(by.id('pizza_entry'))
  }

  get exit_button(){
    return element(by.id('exit_button'))
  }

  get pizza_translation(){
    return element(by.id('pizza_translation'))
  }

  get alert_text(){
    return element(by.text('Modal has been closed.'))
  }

  typeText(text){
    this.pizza_entry.typeText(text)
  }

  tapExit(){
    this.exit_button.tap()
  }

}
module.exports = new PizzaPage();
