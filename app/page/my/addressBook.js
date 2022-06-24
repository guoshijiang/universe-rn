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
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import Head from '../../component/Head';

const handleCopy = (item) => {
  console.log(item)
  Clipboard.setString(''+item);
  Toast.show({
    type: 'success',
    text1: '已复制',
  });
};

const AddressBook = ({navigation})=> {
  const data = [1,2,3];

  return (
    <SafeAreaView style={styles.container}>
      <Head title='地址簿' navigation={navigation} />
      <FlatList
        data={data}
        style={{paddingHorizontal:12,backgroundColor:'#fff',flex:1}}
        keyExtractor={item => item}
        renderItem={({item})=> (
          <TouchableOpacity
            onPress={()=>handleCopy(item)}
            style={styles.card.view}
          >
            <View>
              <Text style={styles.card.title}>名称{item}</Text>
              <Text style={styles.card.text}>ksk3927171937123192123</Text>
            </View>
            <Image 
              style={styles.card.icon}
              source={require('../../assets/copy.png')}
            />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity 
        style={{alignItems:'center',paddingBottom:20}} 
        onPress={()=>navigation.navigate('CreateAddress')}
      >
        <Text style={styles.btn}>添加地址</Text>
      </TouchableOpacity>
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
      paddingVertical: 14,
      justifyContent: 'space-between',
    },
    icon: {
      width: 16,
      height: 16,
    },
    title: {
      color: '#222',
      fontSize: 16,
    },
    text: {
      color: '#9397AF',
      fontSize: 13,
      marginTop: 3,
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
