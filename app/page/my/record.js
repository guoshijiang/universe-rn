import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Head from '../../component/Head';


const AddressBook = ({navigation})=> {
  const data = ['收款', '代收款', '转账'];

  return (
    <SafeAreaView style={styles.container}>
      <Head title='交易记录' navigation={navigation} />
      <FlatList
        data={data}
        style={{paddingHorizontal:12,backgroundColor:'#fff',flex:1,marginTop:15}}
        keyExtractor={item => item}
        renderItem={({item})=> (
          <TouchableOpacity
            style={styles.card.view}
          >
            <Image 
              style={styles.card.icon}
              source={require('../../assets/BTC.png')}
            />
            <View style={{flex:1}}>
              <Text style={styles.card.title}>{item}</Text>
              <Text style={styles.card.text}>ksk3927171937123192123</Text>
            </View>
            <View style={{width:65,alignItems:'flex-end'}}>
              <Text style={styles.card.title}>0.89</Text>
              <Text style={styles.card.text}>2021-09-12</Text>
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
  card: {
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 35,
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

export default AddressBook;
