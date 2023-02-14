import { StatusBar } from 'expo-status-bar';
import {useState} from  'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const image = require('./assets/bruschetta.png')

export default function App() {
  
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 5000);
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Healthy Recipes" component={HomeScreen} 
        options={{headerStyle:{backgroundColor:'#F4501C', }, 
        headerTintColor: '#fff', headerTitleStyle:{fontWeight:'bold',} ,headerTitleStyle:{justifyContent: "center",},}} />
        <Stack.Screen name = " " component={DetailsScreen} options={{headerStyle:{backgroundColor:'#F4501C', }, 
        headerTintColor: '#fff', headerTitleStyle:{fontWeight:'bold',} ,headerTitleStyle:{justifyContent: "center",},}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen({ navigation }) {
  const [amount, setAmount] = useState(0);
  return (
    <View style = {styles.title}>
      <Text style = {{fontSize:35}}>Bruschetta Recipe</Text>
      <Image source={image} style = {{marginTop:40}}/>
      <TextInput style = {styles.input}placeholder = 'Enter the Number of Servings'
      onChangeText = {newText => setAmount(newText)}>
        
      </TextInput>
      
      
      <Pressable style = {styles.button} onPress={() => {
          navigation.navigate(' ', {
            amount: amount,
          });
        }}>
        <Text style = {styles.button}>View Recipe</Text>
      </Pressable>
    </View>
  );
}

function DetailsScreen({ route }) {
  const { amount } = route.params;
  
  return (
    <View style={{ flex: 1 }}>
      
      <Text style = {{fontSize: 45, marginTop: 80, textAlign: "center"}}>Bruschetta</Text>
      
      <Text style = {styles.subheading}>ingredients</Text>
      
      <View>
      <Text style = {styles.list}>{amount*4} plum tomatoes {"\n"}</Text>
      <Text style = {styles.list}>{amount*6} basil leaves {"\n"}</Text>
      <Text style = {styles.list}>{amount*3} garlic cloves, chopped {"\n"}</Text>
      <Text style = {styles.list}>{amount*3} TB olive oil {"\n"}</Text>
      </View>

      <Text style = {styles.subheading}>Directions</Text>
      <Text style = {styles.list}>Combine the ingredients. add salt to taste. Top French bread slices with mixture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
title:{
  marginTop:60,
  alignItems: 'center'
},
input:{
  fontSize:20,
  marginTop: 40,
  marginBottom: 40
},
button:{
  backgroundColor:'#555555',
  fontSize: 20,
  color: '#fff',
  padding: 5
},
list:{
fontSize: 20,
marginLeft: 50
},
subheading:{
  fontSize:30,
  marginLeft: 30
}



})
