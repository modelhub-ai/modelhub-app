import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import FooterItem from './FooterItem';
import Button from '@material-ui/core/Button';

/**
 * Footer class
 * @extends Component
 */
class Footer extends Component {
  /**
   * Renders Content
   * @return {ReactElement}
   */
  render() {
    const GDiv = glamorous.div({
      position: 'absolute',
      bottom: 10,
      display: 'flex',
    });
    const GButton = glamorous(Button)({
      'textTransform': 'none !important',
      'fontSize': '10px !important',
      'fontWeight': '700 !important',
      ':hover': {
        backgroundColor: '#fafafa !important',
      },
    });
    const {legal} = this.props.fetches;
    return (
      <GDiv>
        <GButton target={'_blank'} href={'http://modelhub.ai/'}>
          modelhub.ai
        </GButton>
        <FooterItem name={'License'} content={legal.modelhub_license} />
        <FooterItem
          name={'Acknowledgements'}
          content={legal.modelhub_acknowledgements}
        />
        <FooterItem name={'Model License'} content={legal.model_license} />
        <FooterItem
          name={'Sample Data License'}
          content={legal.sample_data_license}
        />
      </GDiv>
    );
  }
}

Footer.propTypes = {
  fetches: PropTypes.object.isRequired,
};

export default Footer;
