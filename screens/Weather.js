import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,FlatList,Image  } from 'react-native'

export default class Weather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[],
        }
    }
    
    componentDidMount() {
        this.getData();
        
      }

      getData= async()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${this.props.route.params}&appid=b934d21b1c532bd17ce7e0c8025bad48`;
        fetch(url).then(response=>response.json())
        .then((responseJson)=>{
          this.setState({data:this.state.data.concat(responseJson)})
        })
      }


      renderRow=({item})=>{
        console.warn(item);
        return (
        <View >
        
          <View style={styles.row} >
           
          
          <Text style={styles.text}>{`temperature in celsius -  ${(item.main.temp-273.15).toFixed(2)}`}</Text>
          <Text style={styles.text}>{`humidity - ${item.main.humidity}`}</Text>
          <Text style={styles.text}>{`pressure - ${item.main.pressure}`}</Text>
          <Text style={styles.text}>{`wind-speed - ${item.wind.speed} ,wind-degree - ${item.wind.deg} `}</Text>
          
      
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

  
}



const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#fff',
      backgroundColor:'#F5FCFF'
      // alignItems: 'center',
      // justifyContent: 'center',
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
  