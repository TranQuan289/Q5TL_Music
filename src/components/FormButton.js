import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { windowHeight } from '../assets/utils/Dimentions'
import Colors from '../assets/utils/Color'

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} { ...rest }>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: Colors.BLACK,
        fontFamily: 'Quicksand-Bold'
    }
})