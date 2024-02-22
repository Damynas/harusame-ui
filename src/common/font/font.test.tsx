import { cleanup, render, waitFor } from '@testing-library/react';
import { Font } from './font';
import { FontConstants } from './font.constants';

const renderFont = (url?: string) => {
  render(<Font url={url} />);
};

describe('Font Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should add default url to font link and pass that link to document head', async () => {
    renderFont();
    await waitFor(() => {
      const fontLink = document.head.querySelector(
        `link[href="${FontConstants.DEFAULT_FONT_URL}"]`
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
