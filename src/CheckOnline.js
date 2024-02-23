import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from 'react-native';

const CheckOnline = () => {

  let [status, setStatus] = useState("checking online connection")

  useEffect(() => {
    // console.log("checking connection");
    fetch("https://www.google.com")
      .then((Response) => {

        if (Response.status == 200){
          setStatus("online")
        } else {
          setStatus("offline")
        }

      }).catch((error) => {
        setStatus("offline")
      });

  }, []);

  return(
    <Text style={Styles.Text}>{status}</Text>
  );

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

export default CheckOnline();