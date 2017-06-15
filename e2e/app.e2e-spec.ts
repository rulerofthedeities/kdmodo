import { KdModoPage } from './app.po';

describe('kd-modo App', () => {
  let page: KdModoPage;

  beforeEach(() => {
    page = new KdModoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
