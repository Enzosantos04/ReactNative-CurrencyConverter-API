import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CustomDrawer} from '../components/custom-drawer'
import { Ionicons } from '@expo/vector-icons';


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: '#007AFF', 
          drawerStyle: {
            backgroundColor: '#F7F7F7', 
          },
          headerStyle: {
            backgroundColor: '#F7F7F7', // Alterando a cor de fundo do cabeçalho
          }, headerTitleStyle:{color: '#007AFF'}, }}
        drawerContent={(props) => <CustomDrawer {...props} />} 
      >
     
        <Drawer.Screen
          name="index"
          options={{ 
            title: 'AUD Exchange Rate',
            drawerLabel: () => ( 
              <View style={styles.drawerHeader}>
                <Image
                  source={require('../assets/aud.png')} // Caminho da imagem
                  style={styles.image}
                />
                <Text style={styles.title}>AUD Exchange Rate</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="usd"
          options={{
            title: 'USD Exchange Rate',
            drawerLabel: () => (
                <View style={styles.drawerHeader}>
                  <Image
                    source={require('../assets/usd.png')} // Caminho da imagem
                    style={styles.image}
                  />
                  <Text style={styles.title}>USD Exchange Rate</Text>
                </View>
              ),
          }}
        />
        <Drawer.Screen
          name="euro"
          options={{
            title: 'EURO Exchange Rate',
            drawerLabel: () => (
                <View style={styles.drawerHeader}>
                  <Image
                    source={require('../assets/eur.png')} // Caminho da imagem
                    style={styles.image}
                  />
                  <Text style={styles.title}>EURO Exchange Rate</Text>
                </View>
              ), 
          }}
        />
    
      <Drawer.Screen
          name="gbp"
          options={{
            title: 'GBP Exchange Rate',
            drawerLabel: () => (
                <View style={styles.drawerHeader}>
                  <Image
                    source={require('../assets/gbp.png')} // Caminho da imagem
                    style={styles.image}
                  />
                  <Text style={styles.title}>GBP Exchange Rate</Text>
                </View>
              ), }}/>
           </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    flexDirection: 'row'
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 10,
    color: '#007AFF'
  },
});