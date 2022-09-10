import React from 'react';
import { View, Text , Pressable} from 'react-native';
import styles  from './styles';
const StyledButton = (props) => {
    return ( 
      <Pressable
      style={styles.button}
      onPress={() => {console.warn('Heythere')}}
      >
<Text>Custom Order</Text>
      </Pressable>  
      );
};
 
export default StyledButton;


