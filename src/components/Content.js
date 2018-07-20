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
import Installation from './tabs/Installation';

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
  }

  /**
   * Creates the list of tabs given the config
   * @param  {object} config config from REST API call
   * @param  {array} samples sample file array from REST API call
   * @return {array} array of tabs
   */
  createTabList(config, samples) {
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
        use: config.viewer !== undefined ? true : false,
      },
      {
        name: 'Demo',
        component: Demo,
        use: samples.length !== 0 ? true : false,
      },
      {
        name: 'Test',
        component: Test,
        use: config.allow_user_input,
      },
      {
        name: 'Installation',
        component: Installation,
        use: true,
      },
    ];
    return tabs;
  }

  /**
   * When component mounts, get legal json
   */
  componentDidMount() {
    const {config, samples, legal} = this.props.model;
    Promise.all(
      [config, samples, legal].map((url) =>
        fetch(url).then((response) => response.json())
      )
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
          samples: result[1],
          legal: result[2],
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
