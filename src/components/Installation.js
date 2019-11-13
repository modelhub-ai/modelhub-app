import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextPair from './utils/TextPair';
// import AppButton from './utils/AppButton';
import glamorous from 'glamorous';

/**
 * Installation Class
 * @extends Component
 */
class Installation extends Component {
  /**
   * Renders Installation
   * @return {ReactElement}
   */
  render() {
    const GDiv = glamorous.div({
      marginTop: 25,
    });
    const {name} = this.props;
    return (
      <GDiv>
        <Typography variant="title">To run this model:</Typography>
        <br />
        <Typography variant="body2">
          1. Install{' '}
          <a target={'_blank'} href={'https://docs.docker.com/install/'}>
            Docker
          </a>{' '}
          19.03 or newer (CE is sufficient). For GPU support, follow the
          instructions here:{' '}
          <a
            target={'_blank'}
            href={'https://github.com/NVIDIA/nvidia-docker#quickstart'}
          >
            Nvidia-Docker Toolkit
          </a>
          <br />
          2. Install{' '}
          <a target={'_blank'} href={'https://www.python.org/'}>
            Python 2.7 or 3.6
          </a>{' '}
          or higher, if not already installed.
          <br />
          3. Install the modelhub-ai package:
          <TextPair
            title={''}
            body={`pip install modelhub-ai`}
            spacer={10}
            code
          />
          4. Open a terminal and run the following:
          <br />- to interact with the model using the modelhub REST API{' '}
          <a
            target={'_blank'}
            href={
              'https://modelhub.readthedocs.io/en/latest/modelhubapi.html#rest-api'
            }
          >
            (docs):
          </a>{' '}
          <TextPair title={''} body={`modelhub ${name}`} spacer={10} code />- or
          to interact with the model using the modelhub python API in a jupyter
          notebook{' '}
          <a
            target={'_blank'}
            href={
              'https://modelhub.readthedocs.io/en/latest/modelhubapi.html#python-api'
            }
          >
            (docs):
          </a>{' '}
          <TextPair title={''} body={`modelhub ${name} -e`} spacer={10} code />
        </Typography>
        <br />
        For more information, please consult the{' '}
        <a
          target={'_blank'}
          href={'https://modelhub.readthedocs.io/en/latest/index.html'}
        >
          modelhub documentation
        </a>
        .
        <br />
        <br />
      </GDiv>
    );
  }
}

Installation.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Installation;

// <AppButton
//   text={'modelhub documentation'}
//   href={'https://modelhub.readthedocs.io/en/latest/index.html'}
// />
