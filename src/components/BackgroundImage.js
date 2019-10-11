import React, {Component} from 'react';
import {ImageBackground} from 'react-native';

class BackgroundImage extends Component {
  render() {
    const {source, children, style, ...props} = this.props;
    return (
      <ImageBackground
        source={source}
        //style={{position: 'absolute'}}
        style={{flex: 1, width: null, height: null, ...style}}
        {...props}>
        {children}
      </ImageBackground>
    );
  }
}
// BackgroundImage.propTypes = {
//   source: React.PropTypes.object,
//   children: React.PropTypes.object,
//   style: React.PropTypes.object,
// };
export default BackgroundImage;
