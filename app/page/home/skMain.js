/**
 * @description: 收款首页
 */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import Head from '../../component/Head';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

function SkMain({navigation}) {
  const handleCopy = () => {
    Clipboard.setString('0x5E3AB67002Df47dEd4FeB0722E9ccbfe9bf54F15');
    Toast.show({
      type: 'success',
      text1: '已复制',
    });
  };
  return (
    <View style={styles.container}>
      <Head navigation={navigation} title="收款" />
      <View
        style={{
          margin: 12,
          elevation: 3,
          padding: 20,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <QRCode value="https://www.baidu.com" size={200} ecl="L" />
        </View>
        <View
          style={{
            margin: 20,
            backgroundColor: '#f2f2f2',
            marginTop: 40,
            alignItems: 'center',
            padding: 12,
            borderRadius: 4,
          }}>
          <Text>收款地址</Text>
          <Text style={{textAlign: 'center', marginTop: 8}}>
            0x5E3AB67002Df47dEd4FeB0722E9ccbfe9bf54F15
          </Text>
        </View>
        <TouchableOpacity onPress={handleCopy}>
          <Text style={{textAlign: 'center'}}>复制</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  code: {
    view: {},
  },
});
export default SkMain;
