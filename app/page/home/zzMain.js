/**
 * @description: 转账首页
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
} from 'react-native';
import Head from '../../component/Head';

function ZzMain({navigation}) {
  const [list, setList] = useState([{name: 'xxx', id: 1}]);
  // 头布局
  const renderHead = () => {
    return (
      <View>
        <Text
          style={{
            color: '#333',
            padding: 12,
            fontSize: 15,
            borderBottomColor: '#f2f2f2',
            borderBottomWidth: 1,
          }}>
          转账历史
        </Text>
      </View>
    );
  };
  // 布局cell
  const zzRenderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 12,
          paddingVertical: 12,
          borderBottomColor: '#f2f2f2',
          borderBottomWidth: 1,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 13, color: '#333'}}>0xef5...d3f0a</Text>
          <Text style={{color: '#999', fontSize: 12}}>2021-11-21 14:50</Text>
        </View>
        <Text>0.02</Text>
      </View>
    );
  };
  const handlePageZzform = () => {
    navigation.navigate('Zzform');
  };

  return (
    <View style={styles.container}>
      <Head title={'转账'} navigation={navigation} />
      <View style={styles.boxs}>
        <TouchableOpacity onPress={handlePageZzform} style={styles.box}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/info.png')}
          />
          <Text style={{marginTop: 5}}>直接转账</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePageZzform} style={styles.box}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/info.png')}
          />
          <Text style={{marginTop: 5}}>扫码转账</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          margin: 12,
          marginTop: 20,
          elevation: 3,
        }}
        ListHeaderComponent={renderHead}
        renderItem={zzRenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  box: {
    width: '30%',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 3,
  },
});

export default ZzMain;
