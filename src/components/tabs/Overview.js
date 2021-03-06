import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextPair from '../utils/TextPair';
import AppButton from '../utils/AppButton';
import Typography from '@material-ui/core/Typography';
import glamorous from 'glamorous';
import Installation from '../Installation';

/**
 * Overview Class
 * @extends Component
 */
class Overview extends Component {
  /**
   * Renders Overview
   * @return {ReactElement}
   */
  render() {
    const {meta, model} = this.props.fetches.config;
    const GTypography = glamorous(Typography)({
      marginBottom: '25px !important',
    });
    return (
      <div>
        <GTypography variant="display1">
          {meta.name}{' '}
          <a
            target={'_blank'}
            href={'https://github.com/modelhub-ai/' + meta.name}
            style={{textDecoration: 'none', color: '#4285f4'}}
          >
            ↗
          </a>
        </GTypography>
        <TextPair title={'Description'} body={model.description} />
        <TextPair title={'Application'} body={meta.application_area} />
        <TextPair title={'Task'} body={meta.task + ': ' + meta.task_extended} />
        <TextPair title={'Type'} body={model.learning_type} />
        <TextPair title={'Architecture'} body={model.architecture} />
        <TextPair title={'Data'} body={meta.data_type} />
        {meta.data_source !== undefined ? (
          <AppButton text={'data source'} href={meta.data_source} />
        ) : null}
        <Installation name={meta.name} />
      </div>
    );
  }
}

Overview.propTypes = {
  model: PropTypes.object,
  fetches: PropTypes.object.isRequired,
};

export default Overview;
