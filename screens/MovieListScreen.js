import React from 'react'
import {View, KeyboardAvoidingView, TextInput} from 'react-native'
import FlatListMovies from '../FlatListMovies';

export default class MovieListScreen extends React.Component {
  state = {
    searchParam: ''
  }
  static navigationOptions = () => ({
    headerTitle: 'Movies'
  })

  handleSelectMovie = movie => {
    this.props.navigation.push('MovieDetails', movie)
  }

  handleSearch = (text) => {
    this.setState({searchParam: text})
    this.props.screenProps.search(this.state.searchParam)
  }

  render() {
    return (
      <View>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value = {this.state.searchParam}
          onChangeText={(text) => this.handleSearch(text)}
          placeholder="Search"
        />
      </KeyboardAvoidingView>
      <FlatListMovies 
        movies={this.props.screenProps.movies}
        onSelectMovie={this.handleSelectMovie}
      />
      </View>
    )
  }
}
