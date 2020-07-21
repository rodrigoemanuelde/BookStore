import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookList from '@screens/BookList';
import Home from '@screens/Home';
import ListDetail from '@screens/ListDetail';
import {defaultnavOption} from '@constants/navOption';
import ThemeContext, {themes} from '@context/themeContext';
import BooksContext from '@context/booksContext';
import {getBookList} from '@services/bookServices';

const AppStack = createStackNavigator();
const DetailStack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const isLightTheme = theme === themes.dark;
  const toogleTheme = () => setTheme(isLightTheme ? themes.light : themes.dark);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => setBooks(await getBookList());
    getBooks();
  }, []);

  return (
    <BooksContext.Provider value={{books}}>
      <ThemeContext.Provider value={{theme, isLightTheme, toogleTheme}}>
        <NavigationContainer>
          <AppStack.Navigator
            initialRouteName="Home"
            screenOptions={defaultnavOption(isLightTheme)}>
            <AppStack.Screen
              name="Inicio"
              component={Home}
              options={{title: 'Inicio'}}
            />
            <AppStack.Screen
              name="BookList"
              component={BookList}
              options={{title: 'Book List'}}
            />
            <DetailStack.Screen
              name="ListDetail"
              component={ListDetail}
              options={{title: 'Book Description'}}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </BooksContext.Provider>
  );
};

export default App;
