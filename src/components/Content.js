import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ContentTabs from './ContentTabs';
import Footer from './Footer';
//
import Overview from './tabs/Overview';
import Publication from './tabs/Publication';
import Model from './tabs/Model';
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
    this.fetchData = this.fetchData.bind(this);
  }

  /**
   * Creates the list of tabs given the config
   * @param  {object} config config from REST API call
   * @return {array} array of tabs
   */
  createTabList(config) {
    let tabs = [
      {
        name: 'Overview',
        component: Overview,
        visible: true,
      },
      {
        name: 'Publication',
        component: Publication,
        visible: config.publication !== undefined ? true : false,
      },
      {
        name: 'Model',
        component: Model,
        visible: config.viewer !== undefined ? true : false,
      },
      {
        name: 'Test',
        component: Test,
        visible: true,
      },
      {
        name: 'Installation',
        component: Installation,
        visible: true,
      },
    ];
    return tabs;
  }

  /**
   * Fetches the legal json
   * @param  {string} url url to fetch
   * @param  {string} key State property to set
   */
  fetchData(url, key) {
    let that = this;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        if (key === 'config') {
          const tabs = that.createTabList(result);
          const tabsFiletred = tabs.filter((tab) => {
            return tab.visible === true;
          });
          that.setState({[key]: result, tabs: tabsFiletred});
        } else {
          that.setState({[key]: result});
        }
      });
  }

  /**
   * When component mounts, get legal json
   */
  componentDidMount() {
    const {url, api} = this.props.data;
    this.fetchData(url + api + 'get_config', 'config');
    this.fetchData(url + api + 'get_legal', 'legal');
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
