/**
 * @description: 转账明细
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

function ZzInfo({navigation}) {
  return (
    <View style={styles.container}>
      <Head title={'详情'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ZzInfo;
