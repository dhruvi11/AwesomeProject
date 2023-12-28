/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function DetailScreen({navigation, route}) {
  const [searchText, setsearchText] = useState('');
console.log(JSON.stringify(route))
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{flex: 1, alignContent: 'center',padding:20}}>
        <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',paddingStart:10}}>
          {route.params.data.id}
        </Text>
        <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',padding:10}}>
          {route.params.data.title}
        </Text>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '200',padding:10}}>
          {route.params.data.body}
        </Text>
     
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

export default DetailScreen;
