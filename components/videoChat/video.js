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
  render() {
    const {
      classes,
      width,
      src,
      muted,
    } = this.props;
    return (
      <video
        width={width}
        src={src}
        autoPlay
        muted={muted}
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
  src: PropTypes.string,
  muted: PropTypes.bool,
};

Video.defaultProps = {
  width: 200,
  src: '',
  muted: false,
};
export default withStyles(styles)(Video);
