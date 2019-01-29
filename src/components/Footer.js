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
   * Footer constructor. If model is deployed, legal will be the same legal from
   * props.fetches. If model is not deployed, the componentDidMount function
   * will fetch legal and populate state.legal.
   */
  constructor() {
    super();
    this.state = {
      legal: {},
    };
  }
  /**
   * When component mounts, check the deployed flag and fetch if need be.
   */
  componentDidMount() {
    const {deployed, legal} = this.props.model;
    if (!deployed) {
      Promise.all(
        [
          legal.modelhub_license,
          legal.modelhub_acknowledgements,
          legal.model_license,
          legal.sample_data_license,
        ].map((url) => fetch(url).then((response) => response.text()))
      ).then((result) => {
        console.log(result);

        // set state
        this.setState({
          legal: {
            modelhub_license: result[0],
            modelhub_acknowledgements: result[1],
            model_license: result[2],
            sample_data_license: result[3],
          },
        });
      });
    }
  }
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

    const {deployed} = this.props.model;
    const legal = deployed ? this.props.fetches.legal : this.state.legal;
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
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
};

export default Footer;
