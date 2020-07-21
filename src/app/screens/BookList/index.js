import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import BookItem from '@components/BookItem';
//import {bookData} from './constants';
import styles from './styles';
import ThemeContext from '@context/themeContext';
import BooksContext from '@context/booksContext';

function BookList() {
  const {isLightTheme} = useContext(ThemeContext);
  const {books} = useContext(BooksContext);
  const keyExtractor = ({id}) => `Libro: ${id}`;

  const itemSeparator = () => (
    <View style={[styles.separator, isLightTheme && styles.separatorwhite]} />
  );

  const renderItem = ({item}) => {
    const {title, author, description, image} = item;
    return (
      <BookItem
        title={title}
        author={author}
        description={description}
        image={image}
      />
    );
  };
  return (
    <FlatList
      style={[styles.background, isLightTheme && styles.darkcontainer]}
      data={books}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={itemSeparator}
    />
  );
}

export default BookList;

//53.32
