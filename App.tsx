import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native'
import React from 'react'
import { ThemeContext } from './Src/Context/ThemeContext'
import { useState } from 'react'
import { myColors } from './Src/Styles/Colors';
import Button from './Components/Button';
import Mykeyboard from './Components/Mykeyboard';

export default function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value = {theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#F6C0BA'}]}>

      <Switch
      value={theme === 'dark'}
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
    <Mykeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})