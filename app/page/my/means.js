import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  TextInput,
} from 'react-native';
import Head from '../../component/Head';
import { blist } from '../../config';

const Means = ({navigation})=> {
  const data = ['收款', '代收款', '转账'];
  const [visiable, setvisiable] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Head title='资产总览' navigation={navigation} />
      <View style={styles.top}>
        <View style={styles.box}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:14}}>我的资产</Text>
            <TouchableOpacity onPress={()=>setvisiable(c=>!c)}>
              <Image style={{width:20,height:20,marginLeft:8}} source={require('../../assets/eye.png')}></Image>
            </TouchableOpacity>
          </View>
          <Text style={{color:'#fff',fontSize:32,marginRight:8}}>{visiable?'19.81':'***'}</Text>
        </View>
        <View style={styles.search}>
          <Image style={{width:20,height:20,marginRight:5}} source={require('../../assets/search.png')}></Image>
          <TextInput style={{flex:1}}></TextInput>
        </View>
      </View>
      <SectionList
        sections={[{data:blist}, {data:blist}]}
        style={{paddingHorizontal:12,backgroundColor:'#fff',flex:1,marginTop:15}}
        keyExtractor={item => item.id}
        renderSectionHeader={()=>(
          <View><Text style={{fontSize:16,color:'#222',marginBottom:20,}}>ETH_1</Text></View>
        )}
        renderItem={({item})=> (
          <TouchableOpacity
            style={styles.card.view}
          >
            <Image 
              style={styles.card.icon}
              source={require('../../assets/BTC.png')}
            />
            <View style={{flex:1}}>
              <Text style={styles.card.title}>{item.id}</Text>
              <Text style={styles.card.text}>ksk3927171937123192123</Text>
            </View>
            <View style={{width:65,alignItems:'flex-end'}}>
              <Text style={styles.card.title}>0.89</Text>
              <Text style={styles.card.text}>¥241.23</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    backgroundColor: '#F7F8FC',
    paddingTop: 6,
    paddingBottom: 15,
    alignItems: 'center',
  },
  box: {
    width: 335,
    height: 110,
    marginBottom: 22,
    backgroundColor: '#4C6EF5',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    width: 335,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  card: {
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 25,
    },
    icon: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    title: {
      color: '#222',
      fontSize: 16,
    },
    text: {
      color: '#9397AF',
      fontSize: 12,
    }
  },
  btn: {
    width: 180,
    borderRadius: 19,
    height: 40,
    backgroundColor: '#4C6EF5',
    textAlign: 'center',
    lineHeight: 40,
    color: '#fff',
    fontSize: 16,
  }
});

export default Means;
