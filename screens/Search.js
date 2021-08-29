import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,StyleSheet,FlatList } from 'react-native'

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            data:''
          
        }
    }
    
    


    render() {
        return (
            <View>
                <TextInput style={styles.input} placeholder='Enter Country Name' onChangeText={(username)=>this.setState({username})}
                value={this.state.username} autoCapitalize='none'
                />
                
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.userbtn}
                    onPress={this._login}
                    //  onPress={()=>alert('login')}
                      >
                        <Text>Search</Text>
                    </TouchableOpacity>
                    
                </View>

                

            </View>
        )
    }

 

    _login=()=>{
        if(this.state.username !==''){
        this.props.navigation.navigate('Detail',this.state.username)}
        else{alert(`Enter country name`)}
    }
}






const styles=StyleSheet.create({

    
    text:{textAlign:'center'}
    ,
    inputContainer:{
        width:'90%',
        margin:'auto'
    },
    
    input:{
        // width:'80%',
    padding:15,
    marginBottom:10,
    },
    
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    userbtn:{
        backgroundColor:'blue',
        padding:10,
    }
    
    })