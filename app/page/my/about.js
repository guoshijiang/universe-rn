import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Head from '../../component/Head';
function About({navigation}) {
  return (
    <View>
      <Head navigation={navigation} title={'关于我们'} />
      <View style={styles.logo.view}>
        <Image
          style={styles.logo.img}
          source={require('../../assets/logo.jpg')}
        />
        <Text style={styles.logo.title}>软件名称</Text>
        <Text style={styles.logo.sub}>当前版本 1.1</Text>
      </View>
      <View style={{paddingHorizontal: 12, backgroundColor: '#fff'}}>
        <TouchableOpacity
          onPress={() => {
            handleToPage(navigation);
          }}
          style={styles.card.view}>
          <Text style={styles.card.title}>版本更新</Text>
          <Image
            style={styles.card.icon}
            source={require('../../assets/right.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleToPage(navigation);
          }}
          style={styles.card.view}>
          <Text style={styles.card.title}>服务协议</Text>
          <Image
            style={styles.card.icon}
            source={require('../../assets/right.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleToPage(navigation);
          }}
          style={styles.card.view}>
          <Text style={styles.card.title}>隐私策略</Text>
          <Image
            style={styles.card.icon}
            source={require('../../assets/right.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleToPage(navigation) {}

const styles = StyleSheet.create({
  logo: {
    view: {
      alignItems: 'center',
      paddingVertical: 40,
    },
    img: {
      width: 50,
      height: 50,
    },
    title: {
      fontSize: 15,
      color: '#333',
      marginTop: 2,
    },
    sub: {
      fontSize: 12,
      color: '#666',
      marginTop: 2,
    },
  },
  card: {
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 14,
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

export default About;
