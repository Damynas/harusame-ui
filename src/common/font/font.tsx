import { Helmet } from 'react-helmet';
import { FontConstants } from './font.constants';

type FontProps = {
  url?: string;
};

const Font = (props: FontProps) => {
  const { url = FontConstants.DEFAULT_FONT_URL } = props;
  return (
    <Helmet>
      <link
        href={url}
        rel='stylesheet'
      />
    </Helmet>
  );
};

export { Font };
export type { FontProps };
