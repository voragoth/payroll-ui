import { TestpckgPage } from './app.po';

describe('testpckg App', () => {
  let page: TestpckgPage;

  beforeEach(() => {
    page = new TestpckgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
