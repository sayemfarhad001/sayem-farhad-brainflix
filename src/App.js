import React from "react";
import "./styles/main.css";
import HomePage from "./components/HomePage"
import Header from "./components/Header";
import Upload from "./components/Upload";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage}/>
					<Route 
						path="/video/:id" 
						render={ props => 	{	return <HomePage {...props} />	} } 
					/>
					<Route path="/upload" exact component={Upload} />
				</Switch>
			</BrowserRouter>
		)
	}
}
export default App;