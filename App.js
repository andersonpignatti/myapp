import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { useState } from 'react';

 

export default function App() {

 

  let [valetanol,setValetanol] = useState('');

  let [conetanol,setConetanol] = useState('');

  let [valgasol,setValgasol] = useState('');

  let [congasol,setCongasol] = useState('');

 

function calc(){

 

let etanol = (conetanol/valetanol);

let gasolina = (congasol/valgasol);

 
if (gasolina < etanol) {
 Alert.alert("Qual Consumo informa: ","Abasteça com Etanol (valor por km) R$" + etanol.toFixed(2))
} else { 

  Alert.alert("Qual Consumo informa: ","Abasteça com Gasolina (valor por km)R$" + gasolina.toFixed(2))
}
 

}

 

  return (

    <View style={styles.container}>

      <View> 
    
      <Text style={styles.titulo}>Qual Consumo</Text>

      <Text style={styles.subtitle}>
      Valor Etanol: </Text><TextInput style={styles.input}
      keyboardType='numeric'
      onChangeText={(text) => setValetanol(text)}

      

      />


      
      <Text style={styles.subtitle}>
        Consumo Etanol (KM/L):</Text> 
        <TextInput style={styles.input}
        onChangeText={(text) => setConetanol(text)}  
        keyboardType='numeric'
        />
        

      <Text style={styles.subtitle}>Valor Gasolina: </Text>
      
      
      <TextInput style={styles.input}

      onChangeText={(text) => setValgasol(text)}
      keyboardType='numeric'
      

      />

      <Text style={styles.subtitle}>Consumo Gasolina (KM/L): </Text>
      <TextInput style={styles.input}

      onChangeText={(text) => setCongasol(text)}     
      keyboardType='numeric'
      

      />
      
      
      
    <View style={styles.button}>
      <Button style={styles.button}

      title='Enviar'

      color={'grey'}

      onPress={calc}

      

      />
</View>
      <StatusBar style="auto" />

      </View>

    </View>

  );

}

 

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#222',

    alignItems: 'center',

    justifyContent: 'center',

  },

  container2: {

    flex: 1,

    backgroundColor: 'lightgray',

    alignItems: 'center',

    justifyContent: 'center',

  },

  titulo: {

   

    fontSize:40,

    fontWeight:'bold',

    color:'grey',

    padding:20

  },

 

  input:{

    borderColor:'lightgrey',

    borderWidth:1,

    color:'#fff',

    marginBottom: 10,

    textAlign:'center',

    width:100,

    alignContent:'center',

    marginLeft:'auto',

    marginRight:'auto',
    
    fontWeight:'bold'



 

  },

  subtitle: {

    fontWeight:'bold',

    color:'gray',

    marginBottom:15,

    marginLeft:'auto',

    marginRight:'auto'

  },

  button: {
    marginTop:30
  }

 

});