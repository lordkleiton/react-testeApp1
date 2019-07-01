import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Blink extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <View>
                <Text>{this.props.film.title}</Text>
                <Text>{this.props.film.description}</Text>
                <Text>{this.props.film.director}</Text>
                <Text>{this.props.film.producer}</Text>
                <Text>{this.props.film.release_date}</Text>
                <Text>{this.props.film.rt_score}</Text>
            </View>
        )
    }
}