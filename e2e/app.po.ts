import { browser, element, by } from 'protractor';

export class SmartFormPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sf-root h1')).getText();
  }
}
