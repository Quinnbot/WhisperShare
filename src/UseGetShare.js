import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

function UseGetShare() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        ReceiveSharingIntent.getReceivedFiles(files => {
            setFiles(files);
        }, (error) => {
            console.log(error);
        }, 'ShareMedia');

        // ReceiveSharingIntent.clearReceivedFiles();
    }, []);

    // useEffect(() => {
    //     console.log(files);
    // }, [files]);

    // Return JSX that renders the files

    return(
        <View>
            <Text>
                {files.weblink}
            </Text>
        </View>
    );

    // return (
    //     <View>
    //         {files.map((file, index) => (
    //             <View key={index}>
    //                 <Text>File Name: {file.fileName}</Text>
    //                 <Text>File Extension: {file.extension}</Text>
    //                 {/* Render other file properties as needed */}
    //             </View>
    //         ))}
    //     </View>
    // );
}
export default UseGetShare;