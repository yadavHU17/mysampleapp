import React from 'react';
import {
  Text,
} from 'react-native';
import {REACT_APP_DATA} from "@env"
const App= () => {
  console.log(REACT_APP_DATA)
  return (<>
  <Text>{REACT_APP_DATA}</Text>
  </>
);
};


export default App;
