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
    const {classes, data, handleModelChoice, currentModelIndex} = this.props;
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
          {data.map((model, index) => {
            return (
              <div key={'model_' + index}>
                <ModelItem
                  value={index}
                  primary={model.name}
                  secondary={model.task_extended}
                  thumbnail={model.url + 'thumbnail/thumbnail.jpg'}
                  handleModelChoice={handleModelChoice}
                  currentModelIndex={currentModelIndex}
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
  data: PropTypes.array.isRequired,
  handleModelChoice: PropTypes.func.isRequired,
  currentModelIndex: PropTypes.number.isRequired,
};

export default withStyles(styles)(ModelList);
