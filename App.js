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
<Text>{process.env.APPCENTER_KEY_ALIAS+'process'}</Text>    
<Text>{Config.APPCENTER_KEY_ALIAS+'config'}</Text>    
</>
);
};


export default App;
