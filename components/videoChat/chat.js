// react imports
import React, { Component } from 'react';
// supporting imports
import PropTypes from 'prop-types';
import _ from 'lodash';
// material-ui imports
import { withStyles } from 'material-ui/styles';
// components imports
import Video from './video';
import Controls from './controls';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  root: {
    position: 'relative',
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  videoLocal: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

class Chat extends Component {
  state = {
    show: true,
    widthLocal: 100,
  }
  componentDidMount = () => {
    this.mounted = true;
    this.delayedHideControls = _.debounce(this.hideControls, 2000);
    this.setState({ widthLocal: this.props.width / 4 < 70 ? 70 : this.props.width / 4 });
  }
  componentWillUnmount = () => {
    this.mounted = false;
  }
  handleMouseEnter = () => {
    this.delayedHideControls.cancel();
    this.setState({ show: true });
  }
  handleMouseLeave = () => {
    this.delayedHideControls();
  }
  hideControls = () => {
    if (this.mounted) this.setState({ show: false });
  }
  render() {
    const {
      classes,
      width,
      fixed,
      audio,
      video,
      videoPeer,
      videoLocal,
      onControlClick,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{ width, height: (width * 3) / 4 }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className={classes.video} >
          <Video width={width} src={videoPeer} muted />
        </div>
        <div className={classes.videoLocal} >
          <Video width={this.state.widthLocal} src={videoLocal} muted />
        </div>
        <div className={classes.controls}>
          <Controls
            onClick={onControlClick}
            width={width}
            show={this.state.show || fixed}
            micOff={!audio}
            videoOff={!video}
          />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.number,
  fixed: PropTypes.bool,
  audio: PropTypes.bool,
  video: PropTypes.bool,
  videoPeer: PropTypes.string,
  videoLocal: PropTypes.string,
  onControlClick: PropTypes.func,
};

Chat.defaultProps = {
  width: 200,
  fixed: false,
  audio: true,
  video: true,
  videoPeer: '',
  videoLocal: '',
  onControlClick: () => {},
};

export default withStyles(styles)(Chat);
