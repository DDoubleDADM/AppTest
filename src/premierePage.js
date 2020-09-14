import * as React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
      const [buttonEnable, setEnable] = React.useState(false);
      const [buttonDisable, setDisable] = React.useState(false);

      onConnect = () => {
        navigation.navigate("pageDeux");
      }
      onEnable = () => {
        setEnable(true);
      }

        return(
          <>
            <StatusBar barStyle="dark-content" />
             <SafeAreaView>
                <View style={styles.body}>
                    <Button
                    onPress={onConnect}
                    title="Tester"
                    accessibilityLabel="Permet de vous connecter au serveur"
                      />
                      <Button
                      onPress={onEnable}
                      title="Tester"
                      accessibilityLabel="Permet de vous connecter au serveur"
                        />
                </View>
             </SafeAreaView>
          </>
        );
}

function PageDeux({ navigation }) {

        return(
          <>
            <StatusBar barStyle="dark-content" />
             <SafeAreaView>
                <View style={styles.body}>
                    <Text>Bonjour</Text>
                </View>
             </SafeAreaView>
          </>
        );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="pageDeux" component={PageDeux} /></Stack.Navigator>
    </NavigationContainer>
  );

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
}
