import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Blink from './components/Display'

export default class BlinkApp extends Component {
	state = {
		data: [],
	}

	async getFilms(){
		return new Promise((resolve, reject) => {
			fetch('https://ghibliapi.herokuapp.com/films')
				.then(r => r.json())
				.then(r => resolve(r))
				.catch(e => reject(e))
		})
	}

	componentDidMount(){
		this.getFilms().then(r => this.setState({ data: r }))
	}
	
	default(){
		return (
			<View>
				<Text>Esperando resposta.</Text>
			</View>
		)
	}

	filmsList(){
		let a = []

		for (let film of this.state.data) a.push(<Blink film={ film } key={ film.id } />)

		return <View>{ a }</View>
	}

	render() {
		return this.state.data.length ? this.filmsList() : this.default()
	}
}