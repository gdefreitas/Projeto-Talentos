import React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Branco } from '../../styles/index.js';
import styles from './styles.js';

function Bar({home, children}){
 return <Appbar style={styles.bottom}>
   {home ? null : <Appbar.BackAction onPress={() => {}} color={Branco}/>}
   <Text style={home ? styles.textHome : styles.text}>{children}</Text>
  </Appbar>
};

export default Bar;