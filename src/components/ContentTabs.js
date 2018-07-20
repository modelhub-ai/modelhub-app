import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer';
import theme from '../theme.js';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

/**
 * ContentTabs Class
 * @extends Component
 */
class ContentTabs extends Component {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.state = {
      value: 0, // 3
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  /**
   * Handles change
   * @param  {event} event mouse event
   * @param  {number} value current value
   */
  handleChange(event, value) {
    this.setState({value});
    console.log('current tab: ', this.props.tabs[value].name.toLowerCase());
  }

  /**
   * Handles onChange
   * @param  {number} index tab value
   */
  handleChangeIndex(index) {
    this.setState({value: index});
  }

  /**
   * Renders ContentTabs
   * @return {ReactElement}
   */
  render() {
    const {classes, theme, model, fetches, tabs} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            TabIndicatorProps={{
              style: {backgroundColor: theme.darkTeal + ' !important'},
            }}
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            centered
          >
            {tabs.map((tab, index) => {
              return <Tab key={index} label={tab.name} />;
            })}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {tabs.map((tab, index) => {
            return (
              <TabContainer
                key={index}
                dir={theme.direction}
                model={model}
                fetches={fetches}
                tab={tab}
              />
            );
          })}
        </SwipeableViews>
      </div>
    );
  }
}

ContentTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired,
};

export default withStyles(styles, {withTheme: true})(ContentTabs);
