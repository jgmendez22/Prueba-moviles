import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/logo.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>Escoje un pais</Text>
        <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
      <Button theme="primary" label="Argentina gana" />
      <Button theme="secundary" label="Francia gana"/>
      <Button theme="tercero" label="Marruecos gana el tercero"/>
      </View>
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27262e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },
});
