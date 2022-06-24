import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Head from '../../component/Head';

function CreateAddress({navigation}) {

  const [form, setForm] = useState({
    name: '',
    mark: '',
    address: '',
  });


  const changeForm = (value, key) => {
    setForm({...form, [key]: value})
  };

  const handleSave = ()=> {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Head navigation={navigation} title={'添加地址'} />
      <ScrollView style={{flex: 1, paddingHorizontal: 12}}>
        <View style={styles.item.view}>
          <Text style={styles.item.title}>名字</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => changeForm(text, 'name')}
            value={form.name}
            placeholder={'请输入名字'}
          />
        </View>
        <View style={styles.item.view}>
          <Text style={styles.item.title}>备注</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={text => changeForm(text, 'mark')}
            value={form.mark}
            placeholder='请输入备注信息'
          />
        </View>
        <View style={styles.item.view}>
          <Text style={styles.item.title}>添加地址</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={text => changeForm(text, 'address')}
            value={form.address}
            placeholder='请输入钱包地址'
          />
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleSave} style={{alignItems:'center'}}>
        <Text style={styles.btn}>保存</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    view: {
      marginTop: 10,
      marginLeft: 7,
    },
    title: {
      fontSize: 16,
      color: '#222',
    },
  },
  input: {
    height: 60,
    borderBottomColor: '#eee',
    paddingBottom: 20,
    color: '#9397AF',
  },
  btn: {
    backgroundColor: '#4C6EF5',
    borderRadius: 19,
    width: 180,
    marginVertical: 15,
    height: 40,
    lineHeight: 40,
    color:'#fff',
    fontSize:16,
    textAlign: 'center',
  },
});

export default CreateAddress;
