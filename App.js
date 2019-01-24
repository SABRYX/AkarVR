import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { MainStack } from './src/navigation/index';

const MainApp =  createAppContainer( MainStack );

export default class App extends Component {
	render() {
		return (
				<MainApp />
		);
	}
}
