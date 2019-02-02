import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ModelItem from './ModelItem';
import MenuList from '@material-ui/core/MenuList';

const styles = (theme) => ({
  drawerPaper: {
    position: 'relative',
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
    return (
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
                <Divider />
              </div>
            );
          })}
        </MenuList>
      </Drawer>
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
