import { ComponentsMetadataPage } from './app.po';

describe('components-metadata App', function() {
  let page: ComponentsMetadataPage;

  beforeEach(() => {
    page = new ComponentsMetadataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
