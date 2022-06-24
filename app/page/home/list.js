/**
 * @description: 选择币种 添加网络
 */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  // StatusBar,
} from 'react-native';
import Head from '../../component/Head';
import ActionSheet from 'react-native-actionsheet';
import { blist } from '../../config';

const data = blist;
let _selectAction = null;
let _selectBid = '';

function Lsit({navigation, route}) {
  const dType = route.params.dType; // create put select

  // 点击item
  const handleToInfoPage = item => {
    // if (dType == 'select') {
    //   _selectBid = item.id;
    //   _selectAction.show();
    // } else {
    //   navigation.navigate('PutList', {
    //     bId: item.id,
    //     dType,
    //   });
    // }
    if(item.id==='BTC') {
      _selectBid = item.id;
      return _selectAction.show();
    }
    const path = route.params.dType=='create' ? 'CreatInfo' : 'WordInfo';
    navigation.navigate(path, {
      bId: item.id==='identity' ? '' : item.id,
      dType,
    });
  };
  // 点击选项卡
  const handleActionSheet = index => {
    // let ddType = '';
    // if (index == 2) {
    //   return;
    // }
    // if (index == 0) {
    //   ddType = 'create';
    // } else if (index == 1) {
    //   ddType = 'put';
    // }
    // navigation.navigate('PutList', {
    //   bId: _selectBid,
    //   dType: ddType,
    // });
    index!==2 && navigation.navigate(index == 0 ? 'CreatInfo' : 'WordInfo', {
      bId: _selectBid,
      dType: index == 0 ? 'create' : 'put',
    });
  };
  // 标题
  const getTitle = () => {
    const title = {
      'create': '添加钱包',
      'put': '导入钱包',
      'select': '添加网络',
    }
    return title[dType] || null;
  };
  // 头布局
  const renderHead = () => {
    return (
      <View>
        <Text style={styles.header}>单网络钱包:</Text>
      </View>
    );
  };
  // item布局
  const renderItem = ({item}) => {
    const imgs = {
      'BTC': require('../../assets/BTC.png'),
      'ETH': require('../../assets/ETH.png'),
      'EOS': require('../../assets/EOS.png'),
      'USDT': require('../../assets/USDT.png'),
      'identity': require('../../assets/identity.png'),
    }
    return (
      <TouchableOpacity
        onPress={() => {
          handleToInfoPage(item);
        }}
        style={styles.card.view}
      >
        <Image style={styles.card.img} source={imgs[item.id]}/>
        <View style={{justifyContent: 'center',  flex: 1}}>
          <Text style={styles.card.title}>{item.name}</Text>
          {item.id==='identity' && <Image
            style={{width:16,height:16,marginLeft:15,marginTop:3}}
            source={require('../../assets/question.png')}
          />}
        </View>
        <Image
          style={styles.card.icon}
          source={require('../../assets/right.png')}
        />
      </TouchableOpacity>
    );
  };
  const identity = {
    name: '身份钱包(HD)', id: 'identity'
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar translucent={false} backgroundColor='#fff' barStyle="dark-content" /> */}
      <Head title={getTitle()} navigation={navigation} />
      {/* 身份钱包 */}
      {dType==='create' && renderItem({item: identity})}
      <FlatList
        data={data}
        // style={{paddingHorizontal: 12}}
        renderItem={renderItem}
        ListHeaderComponent={renderHead}
        keyExtractor={item => item.id}
      />
      {
        dType==='create' &&
        <TouchableOpacity style={{alignItems:'center',paddingBottom:20}}>
          <Text style={styles.addBtn}>添加自定义网络</Text>
        </TouchableOpacity>
      }
      <ActionSheet
        ref={view => (_selectAction = view)}
        title=""
        options={['创建钱包', '导入钱包', '取消']}
        cancelButtonIndex={2}
        onPress={handleActionSheet}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    color: '#9397AF', 
    fontSize: 16,
    paddingHorizontal: 12,
    marginBottom: -5, 
    marginTop: 10,
  },
  addBtn: {
    width: 180,
    height: 40,
    lineHeight: 40,
    backgroundColor: '#E7ECFF',
    borderRadius: 19,
    textAlign: 'center',
    color: '#4C6EF5',
    fontSize: 16,
  },
  card: {
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 15,
      paddingHorizontal: 12,
    },
    img: {
      width: 40,
      height: 40,
    },
    icon: {
      width: 22,
      height: 22,
    },
    title: {
      color: '#222',
      fontSize: 16,
      marginLeft: 15,
      justifyContent: 'center',
    },
  },
});

export default Lsit;