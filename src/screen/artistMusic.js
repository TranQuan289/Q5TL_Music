import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Colors from '../assets/utils/Color'
import ConversationItem from '../components/ConversationItem'

const conversations = [
    {
        id: 1,
        name: "Rihanna",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/rihanna-428403.jpg',
    },
    {
        id: 2,
        name: "Beyonce",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/beyonce-609515.jpg',
    },
    {
        id: 3,
        name: "Adele",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/adele-428406.jpg',
    },
    {
        id: 4,
        name: "Taylor Swift",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/taylor-swift-428409.jpg',
    },
    {
        id: 5,
        name: "Justin Bieber",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/justin-bieber-428416.jpg',
    },
    {
        id: 6,
        name: "Lady Gaga",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/lady-gaga-428418.jpg',
    },
    {
        id: 7,
        name: "Chris Brown",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/chris-brown-428419.jpg',
    },
    {
        id: 8,
        name: "Bruno Mars",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/bruno-mars-428421.jpg',
    },
    {
        id: 9,
        name: "Jennifer Lopez",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/jennifer-lopez-428423.jpg',
    },
    {
        id: 10,
        name: "Katy Perry",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/katy-perry-427790.jpg',
    },
    {
        id: 11,
        name: "Demi Lovato",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/demi-lovato-428009.jpg',
    },
    {
        id: 12,
        name: "Celine Dion",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/celine-dion-428376.jpg',
    },
    {
        id: 13,
        name: "Cher",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/cher-428379.jpg',
    },
    {
        id: 14,
        name: "Whitney Houston",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/whitney-houston-428350.jpg',
    },
    {
        id: 15,
        name: "Mariah Carey",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/mariah-carey-428318.jpg',
    },
    {
        id: 16,
        name: "Nicki Minaj",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/nicki-minaj-428313.jpg',
    },
    {
        id: 17,
        name: "Billie Eilish",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/billie-eilish-428057.jpg',
    },
    {
        id: 18,
        name: "Madonna",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/madonna-428322.jpg',
    },
    {
        id: 19,
        name: "Post Malone",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/post-malone-428050.jpg',
    },

    {
        id: 20,
        name: "Ariana Grande",
        type: "Ca sĩ",
        avatar: 'https://toplist.vn/images/800px/ariana-grande-428022.jpg',
    },

]

export default function ArtistMusic() {
    return (
        <View style={styles.rootView}>
            <View >
                <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20, color: Colors.primary }}>Top 20 Ca Sĩ</Text>

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