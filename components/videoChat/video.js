// react imports
import React, { Component } from 'react';
// supporting imports
import PropTypes from 'prop-types';
// material-ui imports
import { withStyles } from 'material-ui/styles';
import Controls from './controls';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  video: {

  },
});

class Video extends Component {
  state = {
    videoSrc: null,
  }
  componentDidMount = () => {
    /* eslint-disable no-undef */
    navigator.getUserMedia =
      navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ video: true }, this.handleVideo, this.videoError);
    }
    /* eslint-enable no-undef */
  }
  handleVideo = (stream) => {
    this.setState({ videoSrc: window.URL.createObjectURL(stream) });
  }
  videoError = (err) => {
    console.log(`error: ${err}`);
  }
  render() {
    const {
      classes,
      width,
    } = this.props;
    return (
      <video
        width={width}
        src={this.state.videoSrc}
        autoPlay
        className={classes.video}
      >
        <track kind="captions" />
        <Controls />
      </video>
    );
  }
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.number,
};

Video.defaultProps = {
  width: 200,
};
export default withStyles(styles)(Video);
