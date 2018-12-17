import React from 'react'
import {Image, Text, View} from 'react-native'

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('title'),
  })

  render() {
    return (
      <View>
         <Image
            style={{width: 200, height: 200}}
            source={{uri:this.props.navigation.getParam('poster')}}
          />
        <Text>{this.props.navigation.getParam('type')}</Text>
        <Text>{this.props.navigation.getParam('year')}</Text>
      </View>
    )
  }
}
