import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ContentTabs from './ContentTabs';

//
import Overview from './tabs/Overview';
import Publication from './tabs/Publication';
import Model from './tabs/Model';
import Demo from './tabs/Demo';
import Test from './tabs/Test';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
    height: '100%',
  },
  toolbar: theme.mixins.toolbar,
});

/**
 * Content class
 * @extends Component
 */
class Content extends Component {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.state = {
      fetches: {
        config: {},
        samples: {},
        legal: {},
      },
      tabs: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  /**
   * Creates the list of tabs given the config
   * @param  {object} config config from REST API call
   * @param  {object} model high level property
   * @return {array} array of tabs
   */
  createTabList(config, model) {
    const {deployed} = this.props.model;
    let tabs = [
      {
        name: 'Overview',
        component: Overview,
        use: true,
      },
      {
        name: 'Publication',
        component: Publication,
        use: config.publication !== undefined ? true : false,
      },
      {
        name: 'Model',
        component: Model,
        use: model.viewer !== undefined ? true : false,
      },
      {
        name: 'Demo',
        component: Demo,
        use: !deployed
          ? false
          : config.modelhub.allow_sample_demo === undefined
          ? true
          : false,
        // not related to sample data existing or not.
      },
      {
        name: 'Test',
        component: Test,
        use: !deployed
          ? false
          : config.modelhub.allow_user_test === undefined
          ? true
          : false,
      },
    ];
    return tabs;
  }

  /**
   * When component mounts, get legal json
   */
  componentDidMount() {
    const {deployed} = this.props.model;
    this.fetchData(deployed);
  }

  /**
   * fetches config, as well as samples and legal (if model is
   * depolyed)
   * @param  {bool} deployed whether the model is running on a server or not.
   */
  fetchData(deployed) {
    const {model} = this.props;
    const {config, samples, legal} = model;
    const arr = deployed ? [config, samples, legal] : [config];
    Promise.all(
      arr.map((url) => fetch(url).then((response) => response.json()))
    ).then((result) => {
      // create tabs array
      const tabs = this.createTabList(result[0], model);
      // filter out the ones not used
      const tabsFiletred = tabs.filter((tab) => {
        return tab.use === true;
      });
      // set state
      this.setState({
        fetches: {
          config: result[0],
          samples: deployed ? result[1] : {},
          legal: deployed ? result[2] : {},
        },
        tabs: tabsFiletred,
      });
    });
  }

  /**
   * Renders Content
   * @return {ReactElement}
   */
  render() {
    const {classes, model} = this.props;
    const {fetches, tabs} = this.state;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContentTabs model={model} fetches={fetches} tabs={tabs} />
      </main>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  model: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
