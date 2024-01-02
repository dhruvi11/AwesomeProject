/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function ListScreen({navigation}) {
  const [searchText, setsearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(10);
  const [isListEnd, setIsListEnd] = useState(false);
  const [demoList, setDemoList] = useState([]);

  useEffect(() => {
    callDemoApi();
  }, []);

  const callDemoApi = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data.map((item, index) => {
          if (index < offset) {
            console.log('item>>>>>> ', item.id );
            console.log('item>>>>>> ',  offset);
            demoList.push(item);
            setDemoList(demoList);
            console.log('item>>>>>> ',  demoList);
            setOffset(offset + 10);
          }
        });
      })
      .catch(error => console.error(error));
  };

  const callLoadMoreApi = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setDemoList([]);
        data.map((item, index) => {
          console.log('item>>>>>> ', item.id < offset);
        if (item.id < offset) {
            demoList.push(item);
            setDemoList(demoList);
            setOffset(offset + 10);
          }
        });
      })
      .catch(error => console.error(error));
  };

  const search = (arr, str) => {
    const chars = str.split('');
    return arr.filter(item =>
      chars.every(char => item.employee_name.includes(char)),
    );
  };

  const searchData = text => {
    let searchData = [];
    searchData = search(demoList, text);
    console.log('searchData', searchData);
    setDemoList(searchData);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailScreen', {data: item});
        }}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          width: '90%',
          backgroundColor: 'white',
          padding: 20,
          //   flexDirection: 'row',
          //   justifyContent: 'space-evenly',
          borderRadius: 5,
          margin: 10,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>{item.id}</Text>
        <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 16, color: 'black'}}>{item.body}</Text>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <TextInput
          onChangeText={text => {
            searchData(text);
            setsearchText(text);
          }}
          onChange={() => {
            searchData(searchText);
          }}
          placeholder="Search Movie here"
          style={{
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 5,
            padding: 15,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 30,
          }}
        />
        <FlatList
          data={demoList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={renderFooter}
          onEndReached={callLoadMoreApi}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ListScreen;
