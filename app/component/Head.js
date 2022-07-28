import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
    // View
} from 'react-native';
import {headerHeight, statusBarHei} from '../config';
import {View} from "react-native-ui-lib";

const {height, width} = Dimensions.get('window');
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View useSafeArea>
        <StatusBar translucent={false} backgroundColor='#fff' barStyle="dark-content" />
        <View style={[styles.wrap]}>
          <Text
            numberOfLines={1}
            style={[
              {paddingHorizontal: this.props.noBack ? 0 : 30},
              styles.title,
            ]}>
            {this.props.title || ''}
          </Text>
          {this.props.noBack ? null : (
            <TouchableHighlight
              underlayColor="#eee"
              activeOpacity={0.9}
              onPress={() =>
                this.props.navigation && this.props.navigation.goBack()
              }
              style={styles.backIconWrap}>
              <Image
                style={styles.backIcon}
                source={require('../assets/back.png')}
              />
            </TouchableHighlight>
          )}
          {this.props.rightContent ? (
            <View style={styles.rightWrap}>{this.props.rightContent}</View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    zIndex: 999,
  },
  backIconWrap: {
    position: 'absolute',
    paddingHorizontal: 12,
    top: 0,
    height: headerHeight,
    justifyContent: 'center',
    zIndex: 2,
  },
  backIcon: {
    width: 26,
    height: 26,
  },
  title: {
    zIndex: 1,
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  rightWrap: {
    position: 'absolute',
    right: 0,
    paddingRight: 12,
    top: statusBarHei,
    height: headerHeight,
    justifyContent: 'center',
    zIndex: 3,
  },
});
