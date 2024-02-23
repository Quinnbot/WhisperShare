import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UseGetShare from './UseGetShare';
// import CheckOnline from './CheckOnline';

const App = () => {

  // let files = UseGetShare();

  return (
    <View>
      {/* <CheckOnline /> */}
      {/* <Text>huh</Text> */}
      <UseGetShare />
    </View>
    );
}

export default App;