import { View, Text, Image, StyleSheet, Pressable, TextInput} from "react-native";
import { useEffect, useState } from "react"
import {getEUR} from '../services/currencies';


export default function Screen()
{
    
    //to get the conversion
    const [conversion, setConversion] = useState("0");
    const [loading, setLoading] = useState(true);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const EUR = conversion
    const BRL = currentValue
    let valueExchange;
    if(BRL > 0){
        valueExchange = BRL * parseInt(EUR);
    }else{
        valueExchange =0;
    }
    const updateCurrency = async () =>{
        setLoading(true);
        const dolar = await getEUR()
        setLoading(false);
        setCurrentValue(dolar);
        }


        useEffect(()=>{
            updateCurrency();
        },[]);
    return (
        <View style={styles.boxCurrency}>
            {loading &&
            <Text style={styles.loadingText}>Loading...</Text>
            }

            {!loading && // if not loading display the content


            <View>
            <View style={styles.boxContainer}>
              <Text style={styles.textCurrency}> Today's Exchange Rate</Text>
            <Image source={require('../assets/eur.png')} style={styles.img}/>
            <View style={styles.boxCurrency}>
          
            <Text style={styles.textValue}> 1 EUR = R${currentValue} </Text>
            </View>
            <Pressable onPress={updateCurrency}>
                <Text style={styles.textBtn}>Update Currency</Text>
            </Pressable>
            <Text style={styles.titleConversion}>Convert EUR to REAL</Text>
            <TextInput returnKeyType= 'done' keyboardType="numeric" style={styles.input} onChangeText={value=>setConversion(value)} placeholder="Type Amount"> 
            </TextInput>
            <TextInput style={styles.input} editable={false}>{valueExchange.toFixed(3)}</TextInput>
            </View>
            </View>
            }
         
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10
    },
    textCurrency:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    img:{
        width: 60,
        height: 60,
    
       alignSelf: 'center',
    }, 
    textBtn:{
        backgroundColor: '#007aff',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15,
        width: 200,
        textAlign: 'center',
        alignSelf: 'center',
    },
    boxCurrency:{
       alignItems: 'center',	
       marginTop: 30,
    },
    textValue:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    loadingText:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }, 

    boxContainer:{
        backgroundColor: '#EAF2FF',
        padding: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 20,
        width: 350,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
  
    },
    input:{
        borderWidth: 1,
        borderColor: '#007aff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: 200,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#F5F5F5',
    },

    textConversion:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        alignSelf: 'center',
        color: '#007aff',
        textTransform: 'uppercase',
    },
    titleConversion:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,
        alignSelf: 'center',
        color: '#007aff',
        textTransform: 'uppercase',
        
    }


 
})


