/**
 * @description: 创建钱包
 */
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
} from 'react-native';
import Head from '../../component/Head';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WALLETKEY} from '../../config';

function CreatInfo({navigation, route}) {
  const bId = route.params.bId;
  const [form, setForm] = useState({
    name: bId,
    pwd: '',
    repwd: '',
  });

  const [cheked, setCheked] = useState(false);
  const [status, setStatus] = useState(false);

  const changeForm = (value, key) => {
    // setForm({...form, [key]: value});
    const temp = {...form, [key]: value};
    setForm(temp);
    let status = true;
    Object.values(temp).forEach(item=> {
      if(!item || !item.trim()) status = false;
    })
    setStatus(status);
  };

  const handlePageWord = () => {
    console.log(111)
    navigation.navigate('BakupWord', {
      bId,
      name: form.name,
    });
  };

  return (
    <View style={styles.container}>
      <Head navigation={navigation} title={'创建钱包'} />
      <ScrollView style={{flex: 1, paddingHorizontal: 12}}>
        <View style={styles.item.view}>
          <Text style={styles.item.title}>设置名称</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => changeForm(text, 'name')}
            value={form.name}
            placeholder={'请输入名称'}
          />
        </View>
        <View style={styles.item.view}>
          <Text style={styles.item.title}>设置密码</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={text => changeForm(text, 'pwd')}
            value={form.pwd}
            placeholder='密码不少于8位数'
          />
        </View>
        <View style={styles.item.view}>
          <Text style={styles.item.title}>确认密码</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={text => changeForm(text, 'repwd')}
            value={form.repwd}
            placeholder='密码不少于8位数'
          />
        </View>
        <TouchableOpacity style={styles.warn} onPress={()=>setCheked(c=>!c)}>
          <Image 
            style={styles.checked} 
            source={cheked?require('../../assets/checked.png'):require('../../assets/unchecked.png')} 
          />
          <Text>我已阅读并同意</Text><Text style={styles.link}>《用户协议》</Text><Text>以及</Text><Text style={styles.link}>《隐私政策》</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePageWord} 
          style={{...styles.btn, backgroundColor: status?'#4C6EF5':'#94A9FF'}}
        >
          <Text style={{color:'#fff',fontSize:16}}>创建钱包</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 120,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 8,
    textAlignVertical: 'top',
    backgroundColor: '#f7f7f7',
  },
  item: {
    view: {
      marginTop: 20,
      marginLeft: 7,
    },
    title: {
      fontSize: 15,
      color: '#262626',
    },
  },
  input: {
    height: 60,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 13,
    backgroundColor: '#4C6EF5',
    borderRadius: 10,
    marginTop: 40,
    height: 48,
  },
  warn: {
    marginTop: 15,
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  link: {
    color: '#4C6EF5',
  },
  checked: {
    width: 22,
    height: 22,
    marginRight: 5,
  }
});

export default CreatInfo;
