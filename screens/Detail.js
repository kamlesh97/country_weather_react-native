import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,FlatList,Image  } from 'react-native'

export default class Detail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[],
            cap:''
        }
    }

    componentDidMount() {
        this.getData();
        
      }
    
      getData= async()=>{
        const url=`https://restcountries.eu/rest/v2/name/${this.props.route.params}`;
        fetch(url).then(response=>response.json())
        .then((responseJson)=>{
          this.setState({data:this.state.data.concat(responseJson)})
        })
      }


      renderRow=({item})=>{
          let str=this.props.route.params
          str=str.charAt(0).toUpperCase()+str.toLowerCase().slice(1)
        return (
        <View style={styles.item}>
        
          <View style={styles.row} >
              <TouchableOpacity onPress={this.navigateTo}>
          <Text style={styles.text}>{item.name==str?<Image source={{uri:item.flag}} style={styles.image} />:null}</Text>    
          
          <Text style={styles.text}>{item.name==str?`Capital - ${item.capital} ${this.setState({cap:item.capital})}`:null}</Text>
            </TouchableOpacity>
          <Text style={styles.text}>{item.name==str?`Population - ${item.population}`:null}</Text>
          <Text style={styles.text}>{item.name==str?`timezone - ${item.timezones}`:null}</Text>
          <Text style={styles.text}>{item.name==str?`Currencies - ${item.currencies[0].code} ${item.currencies[0].symbol}`:null}</Text>
          <Text style={styles.text}>{item.name==str?`Languages - ${item.languages[0].name} ${item.languages[0].nativeName}`:null}</Text>
          <Text style={styles.text}>{item.name==str?`Latitude - ${item.latlng[0]} , Longitude - ${item.latlng[1]}`:null}</Text>
          </View>
        </View>
        
        
        )
        
      }

    render() {
        return (
            
               
                <FlatList style={styles.container}
      data={this.state.data}
      renderItem={this.renderRow}
      keyExtractor={(item,index)=>index.toString()}
      />
            
        )
    }

    navigateTo=()=>{this.props.navigation.navigate('Weather',this.state.cap)}
}



const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#fff',
      backgroundColor:'#F5FCFF'
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  
    item:{
//   marginBottom:10,
  
  
    },
    image:{
      width:150,
      height:100,
      resizeMode:'cover',
      marginTop:-10
    },
    text:{
      fontSize:16,
      padding:5
    },
    row:{
      flexDirection:'column',
      justifyContent:'flex-start',
      margin:10,
      
      
    }
  
  });
  