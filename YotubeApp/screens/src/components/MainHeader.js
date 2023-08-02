import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {sizes, spacing} from '../constants/theme';
import {signOut} from 'firebase/auth'
import {auth} from '../../../config/firebase'
const MainHeader = ({title}) => {


    const onSignOut=()=>{
    signOut(auth).catch(error=>console.log(error))
  }
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Icon icon="Hamburger" onPress={()=>{}} />
      <Text style={styles.title}>{title}</Text>
      <Icon icon="Back" onPress={onSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});

export default MainHeader;
