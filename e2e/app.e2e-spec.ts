import { NotiCliConfiguratorPage } from './app.po';

describe('noti-cli-configurator App', function() {
  let page: NotiCliConfiguratorPage;

  beforeEach(() => {
    page = new NotiCliConfiguratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
