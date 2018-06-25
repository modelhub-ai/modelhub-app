import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/**
 * Model Class
 * @extends Component
 */
class Model extends Component {
  /**
   * Renders Model
   * @return {ReactElement}
   */
  render() {
    const {config, data} = this.props;
    const GDiv = glamorous.div({
      bottom: 45,
      left: 16,
      fontSize: 11,
    });
    let modelContent;
    if (config.viewer === 'netron') {
      modelContent = (
        <div>
          <iframe
            title={'netron viewer'}
            height={'700'}
            width={'100%'}
            src={data.url + data.viewer}
            frameBorder={'0'}
          />
          <GDiv>
            Powered by{' '}
            <a target={'_blank'} href={'https://github.com/lutzroeder/Netron'}>
              Netron
            </a>.
          </GDiv>
        </div>
      );
    } else if (config.viewer !== 'netron') {
      // others go here.
      modelContent = 'This viewer is not supported.';
    }
    return <div>{modelContent}</div>;
  }
}

Model.propTypes = {
  data: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default Model;
