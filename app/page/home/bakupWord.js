/**
 * @description: 创建助记词
 */
import React, {useState, useRef} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Head from '../../component/Head';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {WALLETKEY, wordTexts} from '../../config';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';


const Introduce = (props)=> {
  return (
    <View style={styles.introduce}>
      <Image style={styles.introduce.img} source={require('../../assets/backup.png')} />
      <View>
        <Text style={styles.introduce.text}>如果您的手机丢失或损坏，纸密码是你找回钱包的唯一途径，</Text>
        <Text style={styles.introduce.text}>（安全起见，请不要截图形式）</Text>
      </View>
      <TouchableOpacity style={{...styles.btn,width:'100%'}} onPress={props?.onClick}>
        <Text style={styles.btnText}>我知道了</Text>
      </TouchableOpacity>
    </View>
  )
}

const Create = (props)=> {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState('');
  const words = useRef([]);
  const handleChange = (text)=> {
    const txt = text && text.trim();
    setWord(txt);
  }
  const handlePrev = (type)=> {
    if((index==0&&type==-1) || (index==11&&type==1) || (type==1&&!word)) {
      return;
    }
    type==1 && (words.current[index]=word);
    setWord(words.current[index+type]||'');
    setIndex(c=>c+type)
  }
  return (
    <View style={styles.create}>
      <Text style={styles.create.text}>请安顺序写下12个单词并保存在安全的地方</Text>
      <Text style={styles.create.text}>（安全起见，请不要截图形式）</Text>
      <ImageBackground style={styles.create.bg} source={require('../../assets/word.png')}>
        <Text style={styles.create.no}>NO.{index+1}/12</Text>
        <TextInput style={styles.create.input} 
          placeholder={'请输入单词'}
          value={word}
          onChangeText={handleChange}
        ></TextInput>
      </ImageBackground>
      <View style={styles.tip.view}>
        <Text style={styles.tip.txt}>切记:</Text>
        <Text style={styles.tip.txt}>请勿将助记词透露给任何人</Text>
        <Text style={styles.tip.txt}>助记词一旦丢失,资产将无法恢复</Text>
        <Text style={styles.tip.txt}>
          请勿通过截屏、网络传输的方式进行备份保存
        </Text>
        <Text style={styles.tip.txt}>遇到任何情况,请不要轻易卸载钱包APP</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>handlePrev(-1)}>
          <Image style={styles.create.btn} source={index==0?require('../../assets/prev-normal.png'):require('../../assets/prev.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handlePrev(1)}>
          <Image style={styles.create.btn} source={index==11?require('../../assets/next-normal.png'):require('../../assets/next.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}


function CreatWord({navigation, route}) {
  const name = route.params.name;
  const bId = route.params.bId;
  const [step, setStep] = useState(1);
  return (
    <View style={{backgroundColor:'#fff',minHeight:'100%',overflow:'scroll'}}>
      <Head navigation={navigation} title={'备份助记词'} />
      <ScrollView style={{padding: 20,backgroundColor:'#fff',flex:1}}>
        {step===1 && <Introduce onClick={()=>setStep(c=>c+1)}/>}
        {step===2 && <Create onClick={()=>setStep(c=>c+1)}/>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  introduce: {
    alignItems: 'center',
    img: {
      width: 230,
      height: 230,
      marginTop: 50,
      marginBottom: 25,
      justifyContent: 'center'
    },
    text: {
      color: '#222',
      fontSize: 16,
      lineHeight: 22,
      textAlign: 'center',
      paddingHorizontal: 45,
      marginBottom: 5,
    },
  },
  create: {
    alignItems: 'center',
    paddingBottom: 20,
    text: {
      color: '#222',
      fontSize: 16,
      lineHeight: 20,
      textAlign: 'center',
      marginBottom: 8,
    },
    bg: {
      marginTop: 15,
      width: 270,
      height: 237,
    },
    no: {
      fontSize: 16,
      color: '#4C6EF5',
      marginTop: 18,
      marginLeft: 16,
    },
    input: {
      color: '#4C6EF5',
      fontSize: 30,
      textAlign: 'center',
      width: '92%',
      marginTop: 30,
      marginLeft: '4%',
    },
    btn: {
      marginTop: 35,
      marginHorizontal: 15,
      width: 100,
      height: 100,
    }
  },
  box: {
    view: {
      backgroundColor: '#ebebeb',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 15,
      flexWrap: 'wrap',
      marginTop: 30,
    },
    item: {
      width: '30%',
      textAlign: 'center',
      backgroundColor: '#fff',
      marginVertical: 5,
      paddingVertical: 8,
      borderRadius: 4,
      color: '#333',
    },
  },
  tip: {
    view: {
      marginTop: 10,
    },
    txt: {
      color: '#D85151',
      fontSize: 14,
      marginTop: 5,
    },
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#4C6EF5',
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreatWord;
