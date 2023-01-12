import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ConversationItem({ conversation }) {
    return (
        <View style={styles.rootView}>
            <Image source={{ uri: conversation?.avatar }} style={styles.avatarImg} />
            <View>
                <Text style={styles.textName}>{conversation?.name}</Text>
                <Text style={{color:'#c3c3c3'}}>{conversation?.type}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    rootView: {
        paddingLeft: 25,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarImg: {
        width: 60,
        height: 60,
        aspectRadio: 1,
        borderRadius: 40,
        marginRight: 12
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 17,
        color:'#fff'
    },


})