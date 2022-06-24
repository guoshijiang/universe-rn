import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import WebView from "react-native-webview";
const {height, width} = Dimensions.get('window');

let _scroll = null;
function My({navigation}) {

  return (
    <View style={styles.container}>
      <WebView  source={{uri: 'https://uniswap.tokenpocket.pro/?utm_source=tokenpocket#/swap'}}></WebView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default My;
