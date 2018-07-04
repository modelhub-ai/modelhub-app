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
    const {fetches, model} = this.props;
    const GDiv = glamorous.div({
      bottom: 45,
      left: 16,
      fontSize: 11,
    });
    let modelContent;
    if (fetches.config.viewer === 'netron') {
      modelContent = (
        <div>
          <iframe
            title={'netron viewer'}
            height={'700'}
            width={'100%'}
            src={model.viewer}
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
    } else if (fetches.config.viewer !== 'netron') {
      modelContent = 'Viewer type is not supported by this frontend.';
    }
    return <div>{modelContent}</div>;
  }
}

Model.propTypes = {
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
};

export default Model;
