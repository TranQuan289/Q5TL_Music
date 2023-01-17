import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Colors from '../assets/utils/Color'
import ConversationItem from '../components/ConversationItem'

const conversations = [
    {
        id: 1,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 2,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },
    {
        id: 3,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 4,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },
    {
        id: 5,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 6,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },
    {
        id: 7,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 8,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },
    {
        id: 7,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 8,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },
    {
        id: 7,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 8,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },
    {
        id: 7,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 8,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },
    {
        id: 7,
        name: "Erik",
        type: "Nghệ sĩ",
        avatar: 'https://znews-photo.zingcdn.me/w1920/Uploaded/wobvjuz/2022_02_18/erik_dau_nhat_la_lang_im_04.jpg',
    },
    {
        id: 8,
        name: "Sơn Tùng MTP",
        type: "Nghệ sĩ",
        avatar: 'https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg',
    },

]

export default function ArtistMusic() {
    return (
        <View style={styles.rootView}>
            <View >
                <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20, color: Colors.primary }}>Nghệ Sĩ</Text>

            </View>
            <FlatList
                data={conversations}
                renderItem={({ item, index }) => <ConversationItem conversation={item} />}
                keyExtractor={(item, index) => index.toString()}


            />
        </View>
    )
}

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: Colors.background
    },
    nameText: {
        fontSize: 24,
        alignSelf: 'center'

    }
})