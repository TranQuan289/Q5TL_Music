import { View, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../assets/utils/Dimentions'
import Colors from '../assets/utils/Color'
import Ionicons from 'react-native-vector-icons/Ionicons'


const SearchHome = ({ ...rest}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            numberOfLines={1}
            placeholder="Search"
            placeholderTextColor='#fff'
            {...rest}
        />
        <TouchableOpacity style={styles.iconStyle}>
            <Ionicons name='search' size={20} color={Colors.WHILE} />
        </TouchableOpacity>
    </View>
  )
}

export default SearchHome

const styles = StyleSheet.create ({
    inputContainer: {
        marginTop: 5,
        width: '100%',
        height: 40,
        borderColor: Colors.WHILE,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:10,
      },
      iconStyle: {
        padding: 3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
      },
      input: {
        padding: 3,
        paddingLeft: 10,
        flex: 1,
        fontSize: 16,
        color:Colors.WHILE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: Colors.WHILE,
        borderRightWidth: 1,
      },
})