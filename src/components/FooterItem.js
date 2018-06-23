import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

/**
 * FooterItem class
 * @extends React
 */
class FooterItem extends React.Component {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  /**
   * Handles opening the dialog when clicked
   */
  handleClickOpen() {
    this.setState({open: true});
  }

  /**
   * Handles closing the dialog
   */
  handleClose() {
    this.setState({open: false});
  }

  /**
   * Renders FooterItem
   * @return {ReactElement}
   */
  render() {
    const {fullScreen, name, content} = this.props;
    const GDialogContentText = glamorous(DialogContentText)({
      whiteSpace: 'pre-line',
    });
    const GButton = glamorous(Button)({
      'textTransform': 'none !important',
      'fontSize': '10px !important',
      ':hover': {
        backgroundColor: '#fafafa !important',
      },
    });
    return (
      <div>
        <GButton onClick={this.handleClickOpen}>{name}</GButton>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{name}</DialogTitle>
          <DialogContent>
            <GDialogContentText>{content}</GDialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

FooterItem.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default withMobileDialog()(FooterItem);
