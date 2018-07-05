import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextPair from '../utils/TextPair';
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
    const {script} = this.props.fetches.config;
    const GTypography = glamorous(Typography)({
      marginBottom: '25px !important',
    });
    let installationContent = [];
    script.forEach((scriptInstance, index) => {
      const {variables} = scriptInstance;
      if (scriptInstance.type === 'bash') {
        installationContent.push(
          <div key={index}>
            <GTypography variant="headline">
              Install using bash script.
            </GTypography>
            <TextPair
              title={
                <div>
                  1. Install{' '}
                  <a
                    target={'_blank'}
                    href={'https://docs.docker.com/install/'}
                  >
                    Docker
                  </a>. (CE is sufficient)
                </div>
              }
              spacer={10}
            />
            <TextPair
              title={'2. Download the bash script.'}
              body={`$ curl -O https://raw.githubusercontent.com/modelhub-ai/modelhub/master/start_scripts/${
                variables.file_name
              }`}
              spacer={10}
              code
            />
            <TextPair
              title={'3. Change permissions.'}
              body={`$ chmod +x ${variables.file_name}`}
              spacer={10}
              code
            />
            <TextPair title={'4. Run.'} spacer={10} />
            <TextPair
              title={'For the basic test drive version:'}
              body={`$ sudo ./${variables.file_name}`}
              spacer={10}
              code
            />
            <TextPair
              title={'For the jupyter notebook version:'}
              body={`$ sudo ./${variables.file_name} -e`}
              spacer={10}
              code
            />
            <TextPair
              title={'To explore the docker:'}
              body={`$ sudo ./${variables.file_name} -b`}
              spacer={10}
              code
            />
          </div>
        );
      } else if (scriptInstance.type !== 'bash') {
        installationContent.push(
          <GTypography key={index} variant="headline">
            Installation type is not supported by this frontend.
          </GTypography>
        );
      }
    });
    return <div>{installationContent}</div>;
  }
}

Installation.propTypes = {
  model: PropTypes.object,
  fetches: PropTypes.object.isRequired,
};

export default Installation;
