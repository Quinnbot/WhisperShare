import React, { useEffect, useState, useRef, createElement } from 'react';
import { Text, View, AppState, ImageBackground, StyleSheet } from 'react-native';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { useFocusEffect } from '@react-navigation/native';

function GetIntentShare(){

    received = null;

    ReceiveSharingIntent.getReceivedFiles(files => {
        
        received = files[0]['weblink'];

        console.log("rec: ", received);
        
    }, (error) => {

        console.log("recv error: we got nothing :/ ");

    }, 'ShareMedia');

    // ReceiveSharingIntent.clearReceivedFiles();

    return(received);

}

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

function UseGetShare() {
    const [files, setFiles] = useState([]);

    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    var element = <Text style={Styles.Text}> no links to share </Text>;
    const subscription = AppState.addEventListener('change', nextAppState => {

        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
          ) {
            
            setFiles(GetIntentShare());
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
    });

    useEffect(() => {
        console.log('use effect: ', files)
        if (files === null){
            element = <Text style={Styles.Text}> no links to share </Text>;
        } else {
            element = <Text style={Styles.Text}> {files} </Text>;
        }
    }, [files]);
    
    

    return(
        <View style={{backgroundColor: 'black'}}>
            <Text>
               {element}
            </Text>
        </View>
    );
}
export default UseGetShare;