import React from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import { headerHeight } from '../../config'

const My = ({navigation}) => {
  const handleNavigate = (url)=> {
    navigation.navigate(url)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.head.view}>
        <Image style={styles.head.img} source={require('../../assets/setting.png')} />
        <Image style={styles.head.img} source={require('../../assets/sao.png')} />
      </View>
      <View style={styles.head.top}>
        <Text style={{color:'#F0D6B7',fontSize:16}}>邀请好友</Text>
        <TouchableOpacity style={styles.head.topBtn}>
          <Text style={{fontSize:12,color:'#383A50'}}>立即前往</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <TouchableOpacity style={styles.card.view} onPress={()=>{handleNavigate('Means')}} >
          <Image style={styles.card.img} source={require('../../assets/zc.png')} />
          <Text style={styles.card.title}>资产总览</Text>
          <Image style={styles.card.icon} source={require("../../assets/right.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card.view}>
          <Image style={styles.card.img} source={require('../../assets/qb.png')} />
          <Text style={styles.card.title}>我的钱包</Text>
          <Image style={styles.card.icon} source={require("../../assets/right.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card.view} onPress={()=>{handleNavigate('Record')}}>
          <Image style={styles.card.img} source={require('../../assets/jy.png')} />
          <Text style={styles.card.title}>交易记录</Text>
          <Image style={styles.card.icon} source={require("../../assets/right.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card.view} onPress={()=>{handleNavigate('AddressBook')}}>
          <Image style={styles.card.img} source={require('../../assets/dz.png')} />
          <Text style={styles.card.title}>地址簿</Text>
          <Image style={styles.card.icon} source={require("../../assets/right.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{handleNavigate('About')}} style={styles.card.view}>
          <Image style={styles.card.img} source={require('../../assets/info.png')} />
          <Text style={styles.card.title}>关于我们</Text>
          <Image style={styles.card.icon} source={require("../../assets/right.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{handleNavigate('Help')}} style={styles.card.view}>
          <Image style={styles.card.img} source={require('../../assets/question2.png')} />
          <Text style={styles.card.title}>帮助中心</Text>
          <Image style={styles.card.icon} source={require("../../assets/right.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const handleToAboutPage = (navigation)=> {
//   navigation.navigate('About')
// }
// const handleToHelpPage = (navigation)=> {
//   navigation.navigate('Help')
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  head: {
    view: {
      height: headerHeight,
      backgroundColor: "#fff",
      zIndex: 999,
      flexDirection: "row",
      alignItems: 'center',
      paddingHorizontal: 12,
      justifyContent: 'space-between',
    },
    img: {
      width: 22,
      height: 22,
    },
    top: {
      height: 60,
      marginTop: 10,
      marginHorizontal: 8,
      marginBottom: 20,
      backgroundColor: '#454A5D',
      borderRadius: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    topBtn: {
      borderRadius: 24,
      width: 66,
      height: 25,
      backgroundColor: '#F0D6B7',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  card: {
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    img: {
      width: 22,
      height: 22,
    },
    icon: {
      width: 20,
      height: 20
    },
    title: {
      color: "#000",
      fontSize: 16,
      marginLeft: 10,
      flex: 1,
    }
  }
})

export default My;