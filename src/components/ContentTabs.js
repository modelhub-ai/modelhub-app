import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
    // width: 500
  }
});

class ContentTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      config: {},
      tabs: []
    };
    this.fetchConfig = this.fetchConfig.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  fetchConfig(url) {
    let that = this;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(config) {
        const tabs = that.createTabList(config);
        that.setState({ config: config, tabs: tabs });
      });
  }

  createTabList(config) {
    let tabs = [
      { name: "Overview", visible: true },
      {
        name: "Publication",
        visible: config.publication != undefined ? true : false
      },
      {
        name: "Model",
        visible: config.viewer != undefined ? true : false
      },
      { name: "Test", visible: true },
      { name: "Installation", visible: true }
    ];
    return tabs;
  }
  componentWillMount() {
    this.fetchConfig(this.props.data.url + "get_config");
  }

  render() {
    const { classes, theme } = this.props;
    const { config, tabs } = this.state;
    const tabsFiletred = tabs.filter(tab => {
      return tab.visible === true;
    });
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            {tabsFiletred.map((tab, index) => {
              return <Tab key={index} label={tab.name} />;
            })}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {tabsFiletred.map((tab, index) => {
            return (
              <TabContainer key={index} dir={theme.direction}>
                {tab.name}
              </TabContainer>
            );
          })}
        </SwipeableViews>
      </div>
    );
  }
}

ContentTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ContentTabs);
