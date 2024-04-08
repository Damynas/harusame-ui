import type { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontProviderConstants } from './font-provider.constants';

type FontProviderProps = {
  url?: string;
  children: ReactNode;
};

const FontProvider = (props: FontProviderProps) => {
  const { url = FontProviderConstants.DEFAULT_FONT_URL, children } = props;
  return (
    <HelmetProvider>
      <Helmet>
        <link
          href={url}
          rel='stylesheet'
        />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export { FontProvider };
export type { FontProviderProps };
