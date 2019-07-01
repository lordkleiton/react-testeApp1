import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        width: '90%',
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
    },
})

export default class Blink extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>{this.props.film.title}</Text>
                <Text>{this.props.film.description}</Text>
                <Text>{this.props.film.director}</Text>
                <Text>{this.props.film.producer}</Text>
                <Text>{this.props.film.release_date}</Text>
                <Text>{this.props.film.rt_score}</Text>
            </View>
        )
    }
}