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
  controls: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

class Chat extends Component {
  state = {
    show: true,
  }
  componentDidMount = () => {
    this.mounted = true;
    this.delayedHideControls = _.debounce(this.hideControls, 2000);
  }
  componentWillUnmount = () => {
    this.mounted = false;
  }
  handleMouseEnter = () => {
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
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{ width, height: (width * 3) / 4 }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className={classes.video} >
          <Video width={width} />
        </div>
        <div className={classes.controls}>
          <Controls width={width} show={this.state.show} />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.any,
};

Chat.defaultProps = {
  width: 200,
};

export default withStyles(styles)(Chat);
