/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
} from 'react-native';
import Config from 'react-native-config';


const App= () => {
  return (
    <>
<Text>{process.env.REACT_APP_DATA+'process'}</Text>    
<Text>{Config.REACT_APP_DATA+'config'}</Text>    
</>
);
};


export default App;
