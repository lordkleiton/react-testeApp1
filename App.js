import React, { Component } from 'react'
import { View } from 'react-native'
import Blink from './components/Display'



async function hm(){
	return new Promise((resolve, reject) => {
		fetch('https://ghibliapi.herokuapp.com/films', { signal: this.abortController.signal })
			.then(result => result.json())
			.then((r) => {
				resolve(r)
			})
			.catch(err => reject(err))
	})
}



export default class BlinkApp extends Component {
	state = {
		data: []
	}

	abortController = new AbortController()

	async hm() {
		return new Promise((resolve, reject) => {
			fetch('https://ghibliapi.herokuapp.com/films', { signal: this.abortController.signal })
				.then(result => result.json())
				.then((r) => {
					resolve(r)
				})
				.catch(err => reject(err))
		})
	}

	componentDidMount(){
		this.hm().then((r) => this.setState({ data: r }))
	}

	render() {

		if (this.state.data.length){

			let a = []

			for (let i = 0; i < this.state.data.length; i++){
				a.push(<Blink text={this.state.data[i].title} key={i} />)
			}
			
			return (
				<View>
					{a}
				</View>
			)
		}
		else{
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

	componentWillUnmount(){
		this.abortController.abort()
	}
}