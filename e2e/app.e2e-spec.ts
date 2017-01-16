import { BackofficeClientxPage } from './app.po';

describe('backoffice-clientx App', function() {
  let page: BackofficeClientxPage;

  beforeEach(() => {
    page = new BackofficeClientxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
