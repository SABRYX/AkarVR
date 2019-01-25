import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { MainStack } from './src/navigation/index';


export default class App extends Component {
	render() {
		return (
				<MainStack />
		);
	}
}
