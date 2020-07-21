import React from 'react';
import {black, darkblue} from '@constants/colors';
import CustomSwitch from '@components/CustomSwitch';

export const defaultnavOption = (isLightTheme) => ({
  headerStyle: {backgroundColor: isLightTheme ? darkblue : black},
  headerTintColor: isLightTheme ? black : darkblue,
  headerRight: () => <CustomSwitch />,
});
