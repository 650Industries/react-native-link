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
  TouchableHighlight,
  View,
} = React;

let URLHandler = require('react-native-url-handler');

class Link extends React.Component {
  render() {
    return (
      <TouchableHighlight {...this.props}
        onPress={() => {
          console.log("linkPressed", this.props.source);
          if (this.props.source && this.props.source.uri) {
            let url_ = this.props.source.uri;
            URLHandler.openUrl(url_);
          }
        }}
      >
        {this.props.children}
      </TouchableHighlight>
    );
  }

}

module.exports = Link;
