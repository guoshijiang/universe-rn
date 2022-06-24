/**
 * @description: 导入钱包
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
} from 'react-native';
import Head from '../../component/Head';
const data1 = [
  {
    name: '助记词导入',
    id: '1',
  },
];
const data2 = [
  {
    name: '创建钱包',
    id: '2',
  },
];

function Lsit({navigation, route}) {
  const bId = route.params.bId; // 币种
  const dType = route.params.dType; // creat put
  const data = dType == 'create' ? data2 : data1; // 数据源

  const handleToInfoPage = (navigation, item) => {
    let routePush = '';
    if (item.id == 1) {
      routePush = 'WordInfo';
    } else if (item.id == 2) {
      routePush = 'CreatInfo';
    }
    routePush &&
      navigation.navigate(routePush, {
        bId,
        dType,
      });
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleToInfoPage(navigation, item);
        }}
        style={styles.card.view}>
        <Image
          style={styles.card.img}
          source={require('../../assets/logo.jpg')}
        />
        <Text style={styles.card.title}>{item.name}</Text>
        <Image
          style={styles.card.icon}
          source={require('../../assets/right.png')}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Head title="导入钱包" navigation={navigation} />
      <FlatList
        data={data}
        style={{paddingHorizontal: 12}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
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
      marginTop: 20,
    },
    img: {
      width: 30,
      height: 30,
    },
    icon: {
      width: 20,
      height: 20,
    },
    title: {
      color: '#333',
      fontSize: 15,
      marginLeft: 8,
      flex: 1,
    },
  },
});
export default Lsit;
