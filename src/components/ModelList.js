import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ModelItem from './ModelItem';
import MenuList from '@material-ui/core/MenuList';
import MenuTag from './MenuTag';
import glamorous from 'glamorous';

const styles = (theme) => ({
  drawerPaper: {
    position: 'relative',
    height: '100vh',
    overflowY: 'scroll',
    width: 340,
  },
  toolbar: theme.mixins.toolbar,
});

/**
 * ModelList Class
 * @extends Component
 */
class ModelList extends Component {
  /**
   * Renders ModelList
   * @return {ReactElement}
   */
  render() {
    const {
      classes,
      models,
      handleModelChoice,
      currentModelIndex,
    } = this.props;
    const GDiv = glamorous.div({});
    return (
      <GDiv>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          SlideProps={{unmountOnExit: true}}
        >
          <MenuList>
            <div className={classes.toolbar} />
            {models.map((model, index) => {
              const {name, task_extended, thumbnail} = model;
              return (
                <div key={'model_' + index}>
                  <ModelItem
                    value={index}
                    primary={name}
                    secondary={task_extended}
                    thumbnail={thumbnail}
                    handleModelChoice={handleModelChoice}
                    currentModelIndex={currentModelIndex}
                    models={models}
                  />
                  <MenuTag models={models} value={index} />
                  <Divider />
                </div>
              );
            })}
          </MenuList>
        </Drawer>
      </GDiv>
    );
  }
}

ModelList.propTypes = {
  classes: PropTypes.object.isRequired,
  models: PropTypes.array.isRequired,
  handleModelChoice: PropTypes.func.isRequired,
  currentModelIndex: PropTypes.number.isRequired,
};

export default withStyles(styles)(ModelList);
