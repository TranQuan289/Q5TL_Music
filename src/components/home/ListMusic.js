import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const lists = [
  {
    avata:
      'https://avatar-ex-swe.nixcdn.com/song/2019/12/25/6/3/c/6/1577268566289_640.jpg',
    nameMusic: 'Mascara',
    nameSinger: 'Chillies',
    time: 'Hôm nay',
  },
  {
    avata:
      'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/d/7/6/5d76f8f71c270b8e2adb413ae524037c.jpg',
    nameMusic: 'Về bên anh',
    nameSinger: 'J97',
    time: 'Hôm nay',
  },
  {
    avata:
      'https://avatar-ex-swe.nixcdn.com/song/2018/02/26/f/8/3/d/1519612532813_640.jpg',
    nameMusic: 'Một năm mới bình an',
    nameSinger: 'Sơn Tùng M-TP',
    time: 'Hôm nay',
  },
  {
    avata:
      'https://avatar-ex-swe.nixcdn.com/song/2022/12/07/5/6/5/7/1670385361814_640.jpg',
    nameMusic: 'Don’t Côi',
    nameSinger: 'RPT Orijinn & Ronboogz',
    time: 'Hôm nay',
  },
  {
    avata: 'https://i1.sndcdn.com/artworks-000319063860-5qw7nd-t500x500.jpg',
    nameMusic: 'Ghé qua',
    nameSinger: 'Dick x Tofu x PC',
    time: 'Hôm nay',
  },
  {
    avata:
      'https://thanhtay.edu.vn/wp-content/uploads/2021/05/Cau-truc-hope.jpg',
    nameMusic: 'Hope',
    nameSinger: 'Reddy',
    time: 'Hôm nay',
  },
  {
    avata: 'https://i.ytimg.com/vi/V5GS5ANG96M/maxresdefault.jpg',
    nameMusic: '3107',
    nameSinger: 'W/n',
    time: 'Hôm nay',
  },
  {
    avata: 'https://i.ytimg.com/vi/dLQe4qEfVJw/maxresdefault.jpg',
    nameMusic: '1 Phút',
    nameSinger: 'Andiez',
    time: 'Hôm nay',
  },
  {
    avata: 'https://i.ytimg.com/vi/nHK0u40Ompc/maxresdefault.jpg',
    nameMusic: 'Cô gái m52',
    nameSinger: 'HuyR ft. Tùng Viu',
    time: 'Hôm nay',
  },
  {
    avata: 'https://i.ytimg.com/vi/rBS8_gEbNWg/maxresdefault.jpg',
    nameMusic: 'Nụ Cười 18 20',
    nameSinger: ' Doãn Hiếu',
    time: 'Hôm nay',
  },
];
const ListMusic = () => {
  const navigation = useNavigation();
  const handleTapconveration = () => {
    navigation.navigate('PlayList');
  };

  const [heart, setHeart] = useState(false);

  return (
    <ScrollView>
      {lists.map((list, index) => {
        return (
          <View key={index}>
            <TouchableOpacity onPress={handleTapconveration}>
              <View style={styles.rootView}>
                <View style={styles.image}>
                  <Image
                    style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                    source={{uri: list.avata}}
                  />
                </View>
                <View style={styles.wrapperText}>
                  <Text style={styles.textMusic}>{list.nameMusic}</Text>
                  <Text style={styles.textName}>{list.nameSinger}</Text>
                  <Text style={styles.textTime}>{list.time}</Text>
                </View>
                <View style={styles.icon}>
                  {heart ? (
                    <AntDesign
                      onPress={() => setHeart(!heart)}
                      name="heart"
                      style={{color: 'red', fontSize: 20}}
                    />
                  ) : (
                    <AntDesign
                      onPress={() => setHeart(!heart)}
                      name="hearto"
                      style={{color: 'black', fontSize: 20}}
                    />
                  )}
                  <Ionicons
                    name="ellipsis-vertical"
                    style={{color: 'black', fontSize: 20, marginLeft: 10}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ListMusic;
const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 10,
  },
  image: {
    borderRadius: 10,
    height: 70,
    width: 70,
    overflow: 'hidden',
  },
  wrapperText: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
  },
  textMusic: {
    fontSize: 18,
    fontWeight: '600',
  },
  textName: {
    fontSize: 12,
  },
  textTime: {
    marginTop: 5,
    fontSize: 10,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
