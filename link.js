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
      var url = this.props.source.uri;
      URLHandler.openUrl(url);
    }
  }
}

module.exports = Link;
