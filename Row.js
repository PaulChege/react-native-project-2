import React from 'react'
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {padding: 20},
})

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectMovie(props)}>
    <Image
      style={{width: 150, height: 150}}
      source={{uri: props.poster}}
    />
    <Text>{props.title}</Text>
    <Text>{props.type}</Text>
    <Text>{props.year}</Text>
  </TouchableOpacity>
)

Row.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.string
}

export default Row
