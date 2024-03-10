
import React, { useEffect, useState, useRef } from 'react';
import { Text, View, AppState, StyleSheet } from 'react-native';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

function GetShare() {
    const [links, setLinks] = useState(null);
    const appState = useRef(AppState.currentState);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                ReceiveSharingIntent.getReceivedFiles(links => {
                    if (links && links.length >  0) {
                        const receivedLink = links[0]['weblink'];
                        console.log(receivedLink);
                        setLinks(receivedLink);
                    }
                }, (error) => {
                    console.log("recv error: ", error);
                }, 'ShareMedia');
            }
            appState.current = nextAppState;
        });

        return () => {
            subscription.remove();
        };
    }, []);

    let element;
    if (links) {
        element = <Text style={Styles.Text}> {links} </Text>;
    } else {
        element = <Text style={Styles.Text}> no links to share </Text>;
    }

    return (
        <View style={Styles.View}>
            {element}
        </View>
    );
}

const Styles = StyleSheet.create({
    View: {
        backgroundColor: 'black',
        flex:   1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: 'white',
        fontSize:   50,
    }
});

export default GetShare;