import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View,
  Button,
  Modal,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Head from '../../component/Head';
let {width, height} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WALLETKEY, blist} from '../../config';

function HomeTab({navigation}) {
  const [bSel, setBSel] = useState(''); // 当前选中的币id
  const [modalVisible, setModalVisible] = useState(false);
  const [wItem, setWItem] = useState({}); // 当前钱包
  const [bSource, setBSource] = useState({}); // 本地钱包地址数据
  // 获取本地钱包数据
  const getList = async () => {
    const val = await AsyncStorage.getItem(WALLETKEY);
    console.log(val);
    if (val) {
      let dic = JSON.parse(val);
      setBSource(dic);
      let items = dic[dic.show[0]];
      let item = items.find(item => item.id == dic.show[1]);
      setBSel(dic.show[0]);
      setWItem(item);
    }
  };
  // 页面出现生命周期
  useFocusEffect(
    useCallback(() => {
      getList();
    }, []),
  );
  // 打开弹窗
  const handleShow = () => {
    setModalVisible(true);
  };
  // 弹窗币种布局
  const showRenderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleSelShowItem(item.id)}>
        <Text
          style={[
            {
              textAlign: 'center',
              paddingVertical: 20,
              backgroundColor: item.id == bSel ? '#fff' : '#f2f2f2',
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  //弹窗选择币种
  const handleSelShowItem = id => {
    setBSel(id);
  };
  // 布局地址item
  const addressRenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelAddress(item)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#90caf9',
          marginBottom: 10,
          borderRadius: 4,
          padding: 10,
        }}>
        <View>
          <Text style={{color: '#fff'}}>{item.name}</Text>
          <Text
            style={{color: '#888', width: 100}}
            ellipsizeMode="middle"
            numberOfLines={1}>
            {item.address}
          </Text>
        </View>
        {addressIsSel(item)}
      </TouchableOpacity>
    );
  };
  // 是否被选中
  const addressIsSel = item => {
    if (wItem.id == item.id) {
      return (
        <Image
          style={{width: 20, height: 20}}
          source={require('../../assets/home/dui.png')}
        />
      );
    } else {
      return null;
    }
  };
  // 点击选中地址
  const handleSelAddress = item => {
    setWItem(item);
    setModalVisible(false);
  };
  // 无地址展示
  const addressForNone = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
          // handleToListPage(navigation, 'select');
          handleToListPage(navigation, bSel);
        }}>
        <Text style={{marginTop: 20, textAlign: 'center', color: '#888'}}>
          添加钱包
        </Text>
      </TouchableOpacity>
    );
  };
  // 去转账
  const handlePageZz = () => {
    navigation.navigate('ZzMain');
  };
  // 去收款
  const handlePageSk = () => {
    navigation.navigate('SkMain');
  };

  if (Object.keys(wItem).length > 0) {
    return (
      <View style={{...styles.container, paddingTop: StatusBar.currentHeight}}>
        <StatusBar translucent={true} backgroundColor='rgba(0,0,0,0)' barStyle="dark-content" />
        <View style={styles.head.view}>
          <TouchableOpacity
            onPress={handleShow}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.head.title}>{wItem.name}</Text>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/home/botarrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleToListPage(navigation, 'select')}>
            <Image
              style={styles.head.img}
              source={require('../../assets/home/wallet.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={styles.money.view}>
            <View style={{paddingHorizontal: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#fff', fontSize: 12}}>我的资产($)</Text>
                <TouchableOpacity>
                  <Image
                    style={{width: 15, height: 15, marginLeft: 8}}
                    source={require('../../assets/home/eye.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    flex: 1,
                    textAlign: 'right',
                    fontSize: 12,
                  }}
                />
              </View>
              <Text style={{color: '#fff', fontSize: 22}}>0</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#42a5f5',
                paddingVertical: 15,
                marginTop: 30,
              }}>
              <TouchableOpacity
                onPress={handlePageZz}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 15, height: 15}}
                  source={require('../../assets/home/zz.png')}
                />
                <Text style={{color: '#fff', fontSize: 12, marginLeft: 4}}>
                  转账
                </Text>
              </TouchableOpacity>
              <View style={{height: 10, width: 1, backgroundColor: '#fff'}} />
              <TouchableOpacity
                onPress={handlePageSk}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 15, height: 15}}
                  source={require('../../assets/home/sk.png')}
                />
                <Text style={{color: '#fff', fontSize: 12, marginLeft: 4}}>
                  收款
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.list}>
            <Text style={{fontSize: 15, color: '#333'}}>资产</Text>
            <View style={[styles.card.view, {marginTop: 10}]}>
              <Image
                style={styles.card.img}
                source={require('../../assets/home/bi.png')}
              />
              <View style={{flex: 1, marginLeft: 12}}>
                <Text style={styles.card.title}>{wItem.bName}</Text>
              </View>
              <View>
                <Text style={{color: '#333'}}>0.012</Text>
                <Text>$50.71</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                flex: 1,
                backgroundColor: '#000',
                opacity: 0.2,
              }}
            />
            <View style={{height: 400, flexDirection: 'row'}}>
              <FlatList
                data={blist}
                style={{height: '100%', flex: 1, backgroundColor: '#f2f2f2'}}
                renderItem={showRenderItem}
                keyExtractor={item => item.id}
              />
              <View style={{flex: 3, backgroundColor: '#fff'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                  }}>
                  <Text style={{fontSize: 16}}>{bSel}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      // handleToListPage(navigation, 'select');
                      handleToListPage(navigation, bSel);
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('../../assets/home/add.png')}
                    />
                  </TouchableOpacity>
                </View>
                {bSource[bSel]?.length ? (
                  <FlatList
                    data={bSource[bSel] || []}
                    style={{
                      flex: 1,
                      backgroundColor: '#fff',
                      paddingHorizontal: 20,
                    }}
                    renderItem={addressRenderItem}
                    keyExtractor={item => item.id}
                  />
                ) : (
                  addressForNone()
                )}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor='rgba(0,0,0,0)' barStyle="dark-content" />
        <Image
          style={styles.nosel.topImage}
          source={require('../../assets/cover.png')}
        />
        <View style={{paddingHorizontal: 20}}>
          <View style={{marginTop: 15, marginBottom: 25}}>
            <Text style={{fontSize: 18, color: '#222', fontWeight: 'bold'}}>数字资产钱包</Text>
            <Text style={{fontSize: 14, color: '#9397AF', marginTop: 5}}>
              支持BTC、ETH、TRON、Zilliqa等主流公链
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleToListPage(navigation, 'put')}
            style={styles.card.view}>
            <Image
              style={styles.card.img}
              source={require('../../assets/home/dao.png')}
            />
            <View style={{flex: 1, marginLeft: 15}}>
              <Text style={styles.card.title}>我有钱包</Text>
              <Text style={styles.card.sub}>导入钱包</Text>
            </View>
            <Image
              style={styles.card.icon}
              source={require('../../assets/right.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleToListPage(navigation, 'create')}
            style={styles.card.view}>
            <Image
              style={styles.card.img}
              source={require('../../assets/home/create.png')}
            />
            <View style={{flex: 1, marginLeft: 15}}>
              <Text style={styles.card.title}>我没有钱包</Text>
              <Text style={styles.card.sub}>创建钱包</Text>
            </View>
            <Image
              style={styles.card.icon}
              source={require('../../assets/right.png')}
            />
          </TouchableOpacity>
          {/* 验证助记词 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('CreatWord',{})}
            style={styles.card.view}>
            <View style={{flex: 1, marginLeft: 15}}>
              <Text style={styles.card.title}>验证助记词</Text>
            </View>
            <Image
              style={styles.card.icon}
              source={require('../../assets/right.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
// 跳转添加钱包
const handleToListPage = (navigation, dType) => {
  // navigation.navigate('List', {
  //   dType,
  // });
  console.log(111, dType)
  const path = dType==='create' ? 'List' : 'WordInfo';
  navigation.navigate(path, {
    dType,
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    view: {
      // height: 50,
      flexDirection: 'row',
      paddingHorizontal: 12,
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
    },
    title: {
      fontSize: 17,
      color: '#333',
      marginRight: 5,
    },
    img: {
      width: 20,
      height: 20,
    },
  },
  money: {
    view: {
      backgroundColor: '#2196f3',
      paddingTop: 12,
      marginHorizontal: 12,
      borderRadius: 8,
      marginTop: 10,
      overflow: 'hidden',
    },
  },
  list: {
    paddingHorizontal: 12,
    marginVertical: 20,
  },
  nosel: {
    topImage: {
      width: width,
      height: width*260/375,
    },
  },
  card: {
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
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
    },
    sub: {
      color: '#9397AF',
      fontSize: 13,
      marginTop: 2,
    },
  },
});
const mtyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
});
export default HomeTab;
