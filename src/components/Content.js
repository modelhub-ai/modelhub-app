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
      config: {},
      legal: {},
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
        use: true,
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
    const {url, api} = this.props.data;
    const urls = [
      url + api + 'get_config',
      url + api + 'get_samples',
      url + api + 'get_legal',
    ];
    Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    ).then((result) => {
      // create tabs array
      const tabs = this.createTabList(result[0], result[1]);
      // filter out the ones not used
      const tabsFiletred = tabs.filter((tab) => {
        return tab.use === true;
      });
      // set state
      this.setState({
        config: result[0],
        legal: result[2],
        tabs: tabsFiletred,
      });
    });
  }

  /**
   * Renders Content
   * @return {ReactElement}
   */
  render() {
    const {classes, data} = this.props;
    const {config, legal, tabs} = this.state;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContentTabs data={data} config={config} tabs={tabs} />
        <Footer legal={legal} />
      </main>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
