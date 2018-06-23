import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ContentTabs from './ContentTabs';
import Footer from './Footer';

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
      {name: 'Overview', visible: true},
      {
        name: 'Publication',
        visible: config.publication !== undefined ? true : false,
      },
      {
        name: 'Model',
        visible: config.viewer !== undefined ? true : false,
      },
      {name: 'Test', visible: true},
      {name: 'Installation', visible: true},
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
          that.setState({[key]: result, tabs: tabs});
        } else {
          that.setState({[key]: result});
        }
      });
  }

  /**
   * When component mounts, get legal json
   */
  componentDidMount() {
    this.fetchData(this.props.data.url + 'get_config', 'config');
    this.fetchData(this.props.data.url + 'get_legal', 'legal');
  }

  /**
   * Renders Content
   * @return {ReactElement}
   */
  render() {
    const {classes} = this.props;
    const {config, legal, tabs} = this.state;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContentTabs config={config} tabs={tabs} />
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
