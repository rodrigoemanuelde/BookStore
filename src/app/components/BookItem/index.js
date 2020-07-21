import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ThemeContext from '@context/themeContext';

import styles from './styles';

function BookItem({image, title, author, description}) {
  const {isLightTheme} = useContext(ThemeContext);
  const navigation = useNavigation();
  const handleNavigateToListDetail = () =>
    navigation.navigate('ListDetail', {title, author, description, image});
  return (
    <TouchableOpacity onPress={handleNavigateToListDetail}>
      <View
        style={[styles.bigContainer, isLightTheme && styles.darkbigContainer]}>
        <View style={styles.bookContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: image}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text
              style={styles.description}
              numberOfLines={3}
              ellipsizeMode="tail">
              {description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
