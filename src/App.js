import React, { useEffect, useState, useRef, createElement } from 'react';
import { Text, View, AppState, ImageBackground, StyleSheet } from 'react-native';
import UseGetShare from './UseGetShare';


import GetShare from './GetShare';

const App = () => {

  // let files = UseGetShare();

  return (
    <View style={Styles.View}>
      {/* <CheckOnline /> */}
      {/* <Text style={Styles.Text}>huh</Text> */}
      <GetShare />
    </View>
    );
}

//style sheet
const Styles = StyleSheet.create({
  
  View:{
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 50,
  }

});

export default App;