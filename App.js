import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {fetchMovies} from './api'
import {
  createStackNavigator
} from 'react-navigation'
import MovieListScreen from './screens/MovieListScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const MainStack = createStackNavigator(
  {
    MovieList: MovieListScreen,
    MovieDetails: MovieDetailsScreen
  },
  {
    initialRouteName: 'MovieList',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)

export default class App extends React.Component {
  state = {
    movies: null,
    searchParam: 'Moon'
  }

  componentDidMount(){
    this.getMovies(this.state.searchParam)
  }

  getMovies = async (searchParam) => {
    const movies = await fetchMovies(searchParam)
    this.setState({movies: movies})
  }

  search = searchParam => {
    this.getMovies(searchParam)
  }

  render() {
    return (
      <MainStack 
        screenProps ={{
          movies: this.state.movies,
          search: this.search
        }}
      />
    );
  }
}
