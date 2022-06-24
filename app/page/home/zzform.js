/**
 * @description: 转账信息单
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
  TextInput,
} from 'react-native';
import Head from '../../component/Head';
import {CommonActions} from '@react-navigation/native';

function Zzform({navigation}) {
  const [form, setForm] = useState({
    address: '',
    money: '',
  });
  const changeForm = (value, key) => {
    setForm({...form, [key]: value});
  };
  const handleZz = () => {
    navigation.dispatch(CommonActions.goBack());
  };
  return (
    <View style={styles.container}>
      <Head title={'转账'} navigation={navigation} />
      <View>
        <View style={styles.card.view}>
          <Text style={styles.card.title}>钱包地址</Text>
          <TextInput
            style={styles.card.input}
            onChangeText={text => changeForm(text, 'address')}
            value={form.address}
            placeholder={'输入或粘贴钱包地址'}
          />
        </View>
        <View style={styles.card.view}>
          <Text style={styles.card.title}>转账金额</Text>
          <TextInput
            style={styles.card.input}
            onChangeText={text => changeForm(text, 'address')}
            value={form.money}
            placeholder={'请输入数量'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItem: 'center',
              paddingVertical: 12,
            }}>
            <Text>钱包余额</Text>
            <Text
              style={{
                color: '#666',
                fontSize: 12,
                flex: 1,
                textAlign: 'right',
              }}>
              钱包余额
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleZz} style={styles.btn}>
        <Text style={{color: '#fff'}}>确 认</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    view: {
      backgroundColor: '#fff',
      marginTop: 10,
      paddingHorizontal: 12,
      paddingTop: 12,
    },
    title: {
      fontSize: 15,
    },
    input: {
      height: 40,
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    },
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#1296db',
    marginHorizontal: 12,
    borderRadius: 8,
    marginTop: 40,
  },
});

export default Zzform;
