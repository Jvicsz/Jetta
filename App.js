import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Image} from 'react-native';


export default function App() {
return (
<View style={styles.container}>
  
 <ImageBackground  source={require('./src/assets/images/fundo2.png')} resizeMode="cover" style={styles.image}>
<Image source={require('./src/assets/images/jetola.png')} style={styles.image2} /> 
 <Text style={[styles.textLogin ,{fontSize:60, textAlign:'center' ,color:'dark' }]}>Login</Text>
    <TextInput  style={styles.input} placeholder="Digite seu email" />
    <TextInput style={styles.input}   placeholder="Digite sua senha" secureTextEntry={true}/>
    <Button 
    style={styles.Button}
    title='Login'
  
  
  
  
/>
 </ImageBackground>
 
</View>

);
}

//ESTILO E POSIÇÃO DE ELEMENTOS

const styles = StyleSheet.create({

container:{
  flex: 1, 
},

image: {
  flex: 1,
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  resizeMode: 'cover',
},

input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 25,

},

image2: {

width:68,
height:30




},






});