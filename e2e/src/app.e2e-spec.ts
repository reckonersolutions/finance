import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('finance app is running!');
=======
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('finance app is running!');
=======
    expect(page.getTitleText()).toEqual('dashboard050620 app is running!');
>>>>>>> 8a9d80c44bb2d048c60587e169a08a1dd079a5df
>>>>>>> a66e71ac5d35bdcb9563aa230928325c1f232f93
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
