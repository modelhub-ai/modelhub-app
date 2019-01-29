import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ContentTabs from './ContentTabs';
import Footer from './Footer';
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
   * @param  {object} init file from contrib_src
   * @return {array} array of tabs
   */
  createTabList(config, init) {
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
        use: init['external_contrib_files'].length === 0 ? true : false,
      },
      {
        name: 'Demo',
        component: Demo,
        use: !deployed ? false : config.allow_sample_demo ? true : false,
        // not related to sample data existing or not.
      },
      {
        name: 'Test',
        component: Test,
        use: !deployed ? false : config.allow_user_test ? true : false,
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

  fetchData(deployed) {
    const {config, samples, legal, init} = this.props.model;
    const arr = deployed ? [config, init, samples, legal] : [config, init];
    Promise.all(
      arr.map((url) => fetch(url).then((response) => response.json()))
    ).then((result) => {
      // create tabs array
      const tabs = this.createTabList(result[0], result[1]);
      // filter out the ones not used
      const tabsFiletred = tabs.filter((tab) => {
        return tab.use === true;
      });
      // set state
      this.setState({
        fetches: {
          config: result[0],
          samples: deployed ? result[2] : {},
          legal: deployed ? result[3] : {},
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
        <Footer fetches={fetches} />
      </main>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  model: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
