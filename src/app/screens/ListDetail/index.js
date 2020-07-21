import React, {useContext} from 'react';
import {SafeAreaView, View, Image, Text, ScrollView} from 'react-native';
import ThemeContext from '@context/themeContext';

import styles from './styles';

function ListDetail({route}) {
  const {isLightTheme} = useContext(ThemeContext);
  const {title, author, description, image} = route.params;
  return (
    <SafeAreaView
      style={[styles.container, isLightTheme && styles.darkContainer]}>
      <ScrollView>
        <View style={styles.coverContainer}>
          <Text style={styles.title}>{title}</Text>
          <Image source={{uri: image}} style={styles.cover} />
        </View>
        <View>
          <Text style={[styles.author, isLightTheme && styles.darkText]}>
            {author}
          </Text>
          <Text style={[styles.description, isLightTheme && styles.darkText]}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListDetail;
