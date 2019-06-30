import React, { Component } from 'react'
import { View } from 'react-native'
import Blink from './components/Display'

async function teste(){
	//return new Promise((resolve) => {
		try {
			let response = await fetch('https://ghibliapi.herokuapp.com/films')
			let json = await response.json()
			console.log({ result: json })
		}
		catch (error) {
			console.log(error)
		}
	//})
}

export default class BlinkApp extends Component {
	componentDidMount(){
		teste()//.then((r) => {console.log(r)})
	}

	render() {
		return (
			<View>
				<Blink text='I love to blink' />
				<Blink text='Yes blinking is so great' />
				<Blink text='Why did they ever take this out of HTML' />
				<Blink text='Look at me look at me look at me' />
				<Blink text='cala a boca filho da puta' />
			</View>
		)
	}
}