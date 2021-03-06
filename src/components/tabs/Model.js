import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Placeholder from '../utils/Placeholder';

/**
 * Model Class
 * @extends Component
 */
class Model extends Component {
  /**
   * Returns the correct component given the viewer type
   * @param  {object} model   current extended model
   * @param  {object} fetches fetched json data
   * @return {ReactElement}  the correct react element to mount
   */
  getComponent(model, fetches) {
    let component;
    const GDiv = glamorous.div({
      bottom: 45,
      left: 16,
      fontSize: 11,
    });
    switch (model.viewer) {
      case 'netron':
        component = (
          <div>
            <iframe
              title={'netron viewer'}
              height={'700'}
              width={'100%'}
              src={model.viewerURL + fetches.config.model.format}
              frameBorder={'0'}
            />
            <GDiv>
              Powered by{' '}
              <a
                target={'_blank'}
                href={'https://github.com/lutzroeder/Netron'}
              >
                Netron
              </a>
              .
            </GDiv>
          </div>
        );
        break;
      default:
        component = <Placeholder message={'viewer.'} />;
    }
    return component;
  }
  /**
   * Renders Model
   * @return {ReactElement}
   */
  render() {
    const {model, fetches} = this.props;
    return <div>{this.getComponent(model, fetches)}</div>;
  }
}

Model.propTypes = {
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
};

export default Model;
