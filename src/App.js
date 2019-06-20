import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import { Route, Switch } from "react-router-dom";
import Web from './Web';

class App extends Component {
	render() {

		return (
			<div className="app" >
				<Menu />
				{this.showContentWithMenu(Web)}
			</div >
		);
	}

	showContentWithMenu = (Web) => {
		var result = '';
		if (Web.length > 0) {
			result = Web.map((web, i) => {
				return <Route
					key={i}
					exact={web.exact}
					path={web.path}
					component={web.main}
				/>
			})
		}
		return <Switch>{result}</Switch>

	}
}

export default App;
