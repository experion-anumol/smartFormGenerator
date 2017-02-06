import { SmartFormPage } from './app.po';

describe('smart-form App', function() {
  let page: SmartFormPage;

  beforeEach(() => {
    page = new SmartFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sf works!');
  });
});
