/**
 * @description: 助记词导入钱包
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
import {CommonActions} from '@react-navigation/native';
import {WALLETKEY} from '../../config';

function WordInfo({navigation, route}) {
  const bId = route.params.bId || route.params.dType || 'ETH';
  const [form, setForm] = useState({
    name: bId,
    pwd: '',
    repwd: '',
  });

  const [status, setStatus] = useState(false);
  const [cheked, setCheked] = useState(false);

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

  const handlePutData = async () => {
    let info = {
      name: form.name,
      address: form.address,
      id: Date.now(),
      bName: bId,
    };
    let dic = {};
    const val = await AsyncStorage.getItem(WALLETKEY);
    if (val !== null) {
      dic = JSON.parse(val);
    }
    if (dic[bId]?.length) {
      dic[bId].push(info);
    } else {
      dic[bId] = [info];
    }
    // 记录选择项
    dic.show = [bId, info.id];
    let value = JSON.stringify(dic);
    await AsyncStorage.setItem(WALLETKEY, value);
    let n = await AsyncStorage.getItem(WALLETKEY);
    console.log(n);
    navigation.dispatch(CommonActions.navigate({name: 'Tab'}));
  };

  return (
    <View style={styles.container}>
      <Head navigation={navigation} title={'导入钱包'} />
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <TextInput
          style={styles.textArea}
          onChangeText={text => changeForm(text, 'address')}
          value={form.address}
          multiline={true}
          placeholder={'输入助记词或私钥,助记词用空格做分隔'}
        />
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
            style={styles.input}
            onChangeText={text => changeForm(text, 'pwd')}
            value={form.pwd}
            placeholder={'密码不少于8位数'}
          />
        </View>
        <View style={styles.item.view}>
          <Text style={styles.item.title}>确认密码</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => changeForm(text, 'repwd')}
            value={form.repwd}
            placeholder={'密码不少于8位数'}
          />
        </View>
        <TouchableOpacity style={styles.warn} onPress={()=>setCheked(c=>!c)}>
          <Image 
            style={styles.checked} 
            source={cheked?require('../../assets/checked.png'):require('../../assets/unchecked.png')} 
          />
          <Text>我已阅读并同意</Text><Text style={styles.link}>《用户协议》</Text><Text>以及</Text><Text style={styles.link}>《隐私政策》</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePutData()} 
          style={{...styles.btn, backgroundColor: status?'#4C6EF5':'#94A9FF'}}
        >
          <Text style={{color: '#fff', fontSize: 16}}>导入钱包</Text>
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
    borderColor: '#D9DDE1',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 9,
    paddingVertical: 12,
    color: '#9397AF',
    fontSize: 14,
    textAlignVertical: 'top',
    backgroundColor: '#F8F8F7',
  },
  item: {
    view: {
      marginTop: 20,
    },
    title: {
      fontSize: 15,
      color: '#262626',
    },
  },
  input: {
    height: 60,
    paddingBottom: 20,
    borderBottomColor: '#EBEBED',
    borderBottomWidth: 1,
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 15,
    // backgroundColor: '#94A9FF',
    borderRadius: 10,
    marginTop: 75,
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

export default WordInfo;
