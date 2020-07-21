import React, {useContext} from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import image from '@assets/Home.png';
import ThemeContext from '@context/themeContext';

function Home({navigation}) {
  const handleNavigatorList = () => navigation.navigate('BookList');
  const {isLightTheme} = useContext(ThemeContext);
  return (
    <View style={[styles.container, isLightTheme && styles.darkContainer]}>
      <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity style={styles.button} onPress={handleNavigatorList}>
          <Text style={styles.text}>View All Books</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Home;
