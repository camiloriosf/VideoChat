// react imports
import React, { Component } from 'react';
// supporting imports
import PropTypes from 'prop-types';
// material-ui imports
import { withStyles } from 'material-ui/styles';
import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import MicIcon from 'material-ui-icons/Mic';
import MicOffIcon from 'material-ui-icons/MicOff';
import VideocamIcon from 'material-ui-icons/Videocam';
import VideocamOffIcon from 'material-ui-icons/VideocamOff';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  root: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    opacity: 0.8,
  },
});

class Controls extends Component {
  handleClick = option => () => {
    this.props.onClick({ option, micOff: this.props.micOff, videoOff: this.props.videoOff });
  }
  render() {
    const {
      classes,
      show,
      width,
      micOff,
      videoOff,
    } = this.props;
    return (
      <Zoom in={show}>
        <div className={classes.root} style={{ maxWidth: width }}>
          <Button mini variant="fab" color="primary" aria-label="Mic" onClick={this.handleClick('mic')} className={classes.button}>
            {micOff ? <MicOffIcon /> : <MicIcon />}
          </Button>
          <Button mini variant="fab" color="primary" aria-label="Videocam" onClick={this.handleClick('video')} className={classes.button}>
            {videoOff ? <VideocamOffIcon /> : <VideocamIcon />}
          </Button>
        </div>
      </Zoom>
    );
  }
}

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool,
  width: PropTypes.number,
  micOff: PropTypes.bool,
  videoOff: PropTypes.bool,
  onClick: PropTypes.func,
};

Controls.defaultProps = {
  show: false,
  width: 200,
  micOff: false,
  videoOff: false,
  onClick: () => {},
};

export default withStyles(styles)(Controls);
