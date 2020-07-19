import * as React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import StyledFooter from './styled';
import { IFooter } from './footer';
import { IStore } from '@Redux/type';
import { withTranslation, namespaces } from '@Server/i18n';

import './styles.scss';

const Footer: React.FunctionComponent<IFooter.IProps> = ({ t, social }): JSX.Element => {
  const [caption, setCaption] = React.useState(social.caption);
  const [description, setDescription] = React.useState(social.description);

  React.useEffect(() => {
    setCaption(t(caption));
    setDescription(t(description));
  });

  return (
    <StyledFooter>
      <div className="footer-caption">
        {caption}
      </div>
      <div className="footer-description">
        {description}
      </div>

      <div className="footer-social-media">
        {social.media.map((item) => {
          return (
            <a className="footer-social-media-item" href={"//" + item.href} target="_blank" rel="no-opener no-referrer" key={item.title}>
              <FontAwesomeIcon icon={["fab", item.icon.name]} className="footer-social-media-item-icon" />
            </a>
          );
        })}
      </div>
    </StyledFooter>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    social: state.app.social
  };
};

export default withTranslation(namespaces.FOOTER)(connect(mapStateToProps)(Footer));
