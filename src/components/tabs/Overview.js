import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextPair from '../utils/TextPair';
import AppButton from '../utils/AppButton';
import ColabButton from '../utils/ColabButton';
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

    if (meta.framework == undefined) {
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
    } else {
      return (
        <div>
          <GTypography variant="display1">
            {meta.name}{' '}
            <a
              target={'_blank'}
              href={meta.colab_link}
              style={{textDecoration: 'none', color: '#f9ab00'}}
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
          {meta.colab_link !== undefined ? (
            <ColabButton text={'CoLab Notebook'} href={meta.colab_link} />
          ) : null}
          {meta.github_link !== undefined ? (
            <AppButton text={'Code Base'} href={meta.github_link} />
          ) : null}


        </div>
      );
    }
  }
}

Overview.propTypes = {
  model: PropTypes.object,
  fetches: PropTypes.object.isRequired,
};

export default Overview;
