import React, { Component } from 'react'
import { View } from 'react-native'
import Blink from './components/Display'

export default class BlinkApp extends Component {
	_isMounted = false

	state = {
		data: [],
		isLoading: true
	}

	abortController = new AbortController()

	async getFilms() {
		return new Promise((resolve, reject) => {
			fetch('https://ghibliapi.herokuapp.com/films', { signal: this.abortController.signal })
				.then(r => r.json())
				.then(r => resolve(r))
				.catch(e => reject(e))
		})
	}

	componentDidMount(){
		this._isMounted = true
		this.getFilms().then(r => {if (this._isMounted) this.setState({ data: r, isLoading: false })})
	}

	componentWillUnmount() {
		//this.abortController.abort()
		this._isMounted = false
	}

	default(){
		return (
			<View>
				<Blink text='agora voce me vê' />
			</View>
		)
	}

	filmsList(){
		let a = []

		for (let i = 0; i < this.state.data.length; i++) {
			a.push(<Blink text={this.state.data[i].title} key={i} />)
		}

		return (
			<View>
				{a}
			</View>
		)
	}

	render() {
		return this.state.data.length ? this.filmsList() : this.default()
	}

	
}