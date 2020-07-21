import React, {useContext} from 'react';
import {Switch} from 'react-native';
import {white} from '@constants/colors';
import ThemeContext from '@context/themeContext';

function CustomSwitch() {
  const {isLightTheme, toogleTheme} = useContext(ThemeContext);
  return (
    <Switch
      trackColor={{false: 'gray', true: 'teal'}}
      thumbColor={white}
      ios_backgroundColor="gray"
      onValueChange={toogleTheme}
      value={isLightTheme}
    />
  );
}

export default CustomSwitch;
