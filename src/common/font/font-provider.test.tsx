import { cleanup, render, waitFor } from '@testing-library/react';
import { FontProvider } from './font-provider';
import { FontProviderConstants } from './font-provider.constants';

const renderFont = (url?: string) => {
  render(
    <FontProvider url={url}>
      <></>
    </FontProvider>
  );
};

describe('Font Provider Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should add default url to font link and pass that link to document head', async () => {
    renderFont();
    await waitFor(() => {
      const fontLink = document.head.querySelector(
        `link[href="${FontProviderConstants.DEFAULT_FONT_URL}"]`
      );
      expect(fontLink).toBeInTheDocument();
    });
  });

  it('Should add provided url to font link and pass that link to document head', async () => {
    const customUrl = 'customUrl';
    renderFont(customUrl);
    await waitFor(() => {
      const fontLink = document.head.querySelector(`link[href="${customUrl}"]`);
      expect(fontLink).toBeInTheDocument();
    });
  });
});
