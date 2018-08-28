import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextPair from '../utils/TextPair';
import AppButton from '../utils/AppButton';
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
        <Typography variant="title">To run this model locally:</Typography>
        <br />
        <Typography variant="body2">
          1. Install{' '}
          <a target={'_blank'} href={'https://docs.docker.com/install/'}>
            Docker
          </a>. (CE is sufficient)
          <br />
          2. Install{' '}
          <a target={'_blank'} href={'https://www.python.org/'}>
            Python 2.7 or 3.6
          </a>{' '}
          or higher, if not already installed.
          <br />
          3. Download the{' '}
          <a
            target={'_blank'}
            href={
              'https://raw.githubusercontent.com/modelhub-ai/modelhub/master/start.py'
            }
          >
            modelhub start script
          </a>{' '}
          and place it into a new folder.
          <br />
          4. Open a terminal and run:
          <TextPair
            title={''}
            body={`python start.py ${name}`}
            spacer={10}
            code
          />
          To access a jupyter notebook, run:
          <TextPair
            title={''}
            body={`python start.py ${name} -e`}
            spacer={10}
            code
          />
        </Typography>
        <br />
        <AppButton
          text={'modelhub documentation'}
          href={'https://modelhub.readthedocs.io/en/latest/index.html'}
        />
      </GDiv>
    );
  }
}

Installation.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Installation;
