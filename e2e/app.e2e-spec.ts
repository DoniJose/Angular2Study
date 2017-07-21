import { Angular2StudyPage } from './app.po';

describe('angular2-study App', function() {
  let page: Angular2StudyPage;

  beforeEach(() => {
    page = new Angular2StudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
