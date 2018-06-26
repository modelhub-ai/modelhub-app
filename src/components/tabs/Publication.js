import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextPair from '../TextPair';
import AppButton from '../AppButton';
import MailIcon from '@material-ui/icons/Mail';
import glamorous from 'glamorous';

/**
 * Publication Class
 * @extends Component
 */
class Publication extends Component {
  /**
   * Renders Publication
   * @return {ReactElement}
   */
  render() {
    const {publication} = this.props.config;
    const GMailIcon = glamorous(MailIcon)({
      width: '20px !important',
    });
    return (
      <div>
        <TextPair title={'Title'} body={publication.title} />
        <TextPair title={'Authors'} body={publication.authors} />
        <TextPair title={'Abstract'} body={publication.abstract} />
        <TextPair title={'Year'} body={publication.year} />
        <TextPair title={'Bibtex'} body={publication.bibtex} />
        <AppButton text={publication.source} href={publication.url} />
        <AppButton text={'citations'} href={publication.google_scholar} />
        {publication.email !== undefined ? (
          <AppButton
            text={<GMailIcon />}
            href={'mailto:' + publication.email}
          />
        ) : null}
      </div>
    );
  }
}

Publication.propTypes = {
  model: PropTypes.object,
  config: PropTypes.object.isRequired,
};

export default Publication;
