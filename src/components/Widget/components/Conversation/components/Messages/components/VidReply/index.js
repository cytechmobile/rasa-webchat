import React, { PureComponent } from 'react';
import { PROP_TYPES } from 'constants';

import './styles.scss';

class VidReply extends PureComponent {
  render() {
    return (
      <div className="rw-video">
        <b className="rw-video-title">
          { this.props.message.get('title') }
        </b>
        <div className="rw-video-details">
          <video controls className="rw-videoFrame" autoPlay={this.props.message.get("autoplay")}>
            <source src={this.props.message.get('video')}/>
          </video>
        </div>
      </div>
    );
  }
}

VidReply.propTypes = {
  message: PROP_TYPES.VIDREPLY
};

export default VidReply;
