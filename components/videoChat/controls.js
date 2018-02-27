// react imports
import React, { Component } from 'react';
// supporting imports
import PropTypes from 'prop-types';
// material-ui imports
import { withStyles } from 'material-ui/styles';
import Zoom from 'material-ui/transitions/Zoom';
import IconButton from 'material-ui/IconButton';
import MicIcon from 'material-ui-icons/Mic';
import MicOffIcon from 'material-ui-icons/MicOff';
import VideocamIcon from 'material-ui-icons/Videocam';
import VideocamOffIcon from 'material-ui-icons/VideocamOff';
import VolumeDownIcon from 'material-ui-icons/VolumeDown';
import SettingsIcon from 'material-ui-icons/Settings';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  root: {
    backgroundColor: theme.palette.common.white,
    opacity: 0.8,
    textAlign: 'center',
  },
  icon: {
    color: theme.palette.primary.main,
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
          <IconButton color="primary" aria-label="Mic" onClick={this.handleClick('mic')}>
            {micOff ? <MicOffIcon /> : <MicIcon />}
          </IconButton>
          <IconButton color="primary" aria-label="Videocam" onClick={this.handleClick('video')}>
            {videoOff ? <VideocamOffIcon /> : <VideocamIcon />}
          </IconButton>
          <IconButton color="primary" aria-label="Volume" onClick={this.handleClick('volume')}>
            <VolumeDownIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Settings" onClick={this.handleClick('settings')}>
            <SettingsIcon />
          </IconButton>
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
