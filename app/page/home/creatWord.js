/**
 * @description: 创建助记词
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
  StatusBar,
} from 'react-native';
import Head from '../../component/Head';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {WALLETKEY, wordTexts} from '../../config';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

function CreatWord({navigation, route}) {
  const name = route.params.name;
  const bId = route.params.bId;
  
  const [words, setWords] = useState({});

  const handlePutData = async () => {
    let info = {
      name,
      address: wordTexts.txt,
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
    navigation.dispatch(CommonActions.navigate({name: 'HomeTab'}));
  };

  const handleCopy = () => {
    Clipboard.setString(wordTexts.txt);
    Toast.show({
      type: 'success',
      text1: '已复制',
    });
  };

  const wordItemRender = () => {
    let arr = [];
    wordTexts.arr.map((item, index) => {
      arr.push(
        <Text key={index} style={styles.box.item}>
          {item}
        </Text>,
      );
    });
    return arr;
  };

  const handleCheck = (item)=> {
    const temp = words;
    if(temp[item]) {
      delete temp[item];
    }else {
      temp[item] = item
    }
    setWords({...temp});
  }

  return (
    <View style={{backgroundColor:'#fff'}}>
      <StatusBar translucent={false} backgroundColor='#fff' barStyle="dark-content" />
      <Head title={'备份助记词'} />
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize:14,color:'#222'}}>请根据您抄写的助记词，按顺序选择填充</Text>
        <View style={{...styles.box.view,height:200}}>
          {
            Object.values(words).map((item, index) => (
              <Text key={index} style={[styles.box.item, {color:'#4C6EF5'} ,index%3==1 && styles.box.item2]}>
                {item}
              </Text>
            ))
          }
        </View>
        <View style={{...styles.box.view, backgroundColor:'#fff'}}>
          {
            wordTexts.arr.map((item, index) => (
              <TouchableOpacity 
                onPress={()=>handleCheck(item)} 
                style={[styles.box.item, styles.box.itembd, words[item]&&styles.box.active, index%3==1&&styles.box.item2]}
              >
                <Text key={index} style={[words[item]&&{color:'#fff'}]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <TouchableOpacity onPress={handlePutData} style={styles.btn}>
          <Text style={{color: '#fff'}}>完成</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleCopy} style={styles.copy}>
          <Text style={{color: '#9575cd'}}>复制助记词</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    view: {
      backgroundColor: '#F7F8FC',
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 15,
      flexWrap: 'wrap',
      marginTop: 25,
      borderRadius: 15,
    },
    item: {
      width: '30%',
      textAlign: 'center',
      backgroundColor: '#fff',
      marginVertical: 5,
      paddingVertical: 8,
      borderRadius: 15,
      color: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item2: {
      marginHorizontal: '5%',
    },
    active: {
      backgroundColor: '#4C6EF5',
    },
    itembd: {
      borderWidth: 1,
      borderColor: '#D6D9E0',
    }
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#4C6EF5',
    borderRadius: 10,
    marginTop: 30,
  },
  copy: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default CreatWord;
