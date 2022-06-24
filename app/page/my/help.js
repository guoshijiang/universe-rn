import React from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';
import Head from '../../component/Head';

function Help({navigation}) {
  return (
    <View>
      <Head navigation={navigation} title={'帮助中心'} />
    </View>
  );
}

export default Help;
