// react imports
import React, { Component } from 'react';
// supporting imports
import PropTypes from 'prop-types';
// material-ui imports
import { withStyles } from 'material-ui/styles';
// components imports
import Chat from '../components/videoChat/chat';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  root: {

  },
});

class VideoChat extends Component {
  state = {
    videoLocal: null,
    videoPeer: null,
    audio: true,
    video: true,
  }
  componentDidMount = () => {
    /* eslint-disable no-undef */
    navigator.getUserMedia =
      navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          audio: true,
          video: true,
        },
        this.handleVideo,
        this.handleVideoError,
      );
    } else {
      console.log('Video Recording is not supported in your browser'); // eslint-disable-line no-console
    }
    /* eslint-enable no-undef */
  }
  componentWillUnmount = () => {
    if (this.localStream !== undefined) {
      this.localStream.getVideoTracks()[0].stop();
    }
  }
  handleVideo = (stream) => {
    this.localStream = stream;
    this.peerStream = stream;
    this.setState({
      videoLocal: window.URL.createObjectURL(this.localStream),
      videoPeer: window.URL.createObjectURL(this.peerStream),
    });
  }
  handleControlClick = ({ option }) => {
    switch (option) {
      case 'mic':
        this.localStream.getAudioTracks()[0].enabled = !this.state.audio;
        this.setState(prevState => ({ audio: !prevState.audio }));
        break;
      case 'video':
        this.localStream.getVideoTracks()[0].enabled = !this.state.video;
        this.setState(prevState => ({ video: !prevState.video }));
        break;
      default:
        break;
    }
  }
  handleVideoError = (err) => {
    console.log(`error: ${err}`); // eslint-disable-line no-console
  }
  render() {
    const {
      width,
      fixed,
    } = this.props;
    return (
      <Chat
        videoPeer={this.state.videoPeer}
        videoLocal={this.state.videoLocal}
        onControlClick={this.handleControlClick}
        width={width}
        fixed={fixed}
        video={this.state.video}
        audio={this.state.audio}
      />
    );
  }
}

VideoChat.propTypes = {
  width: PropTypes.number,
  fixed: PropTypes.bool,
};

VideoChat.defaultProps = {
  width: 200,
  fixed: false,
};

export default withStyles(styles)(VideoChat);
