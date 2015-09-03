/**
 * A trivial example of a React Native application
 */
var React = require('react-native');

var {
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var URLHandler = require('react-native-url-handler');

let openUrl = URLHandler.openUrl || URLHandler.openURL || null;
if (!openUrl) {
  throw new Error("react-native-link can't figure out how to open links with this version of react-native-url-handler! :(");
}

class Link extends React.Component {
  render() {
    return (
      <View
        onPress={this._linkPressed}
      >
        {this.props.children}
      </View>
    );
  }

  _linkPressed() {
    if (this.props.source && this.props.source.uri) {
      let url_ = this.props.source.uri;
      openUrl(url_);
    }
  }
}

module.exports = Link;
