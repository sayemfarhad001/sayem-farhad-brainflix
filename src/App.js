import React from "react";
import "./styles/main.css";
import HomePage from "./components/HomePage"
import Header from "./components/Header";
import Upload from "./components/Upload";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Hero from "./components/Hero";
// import Main from "./components/Main";
// import Comments from "./components/Comments";
// import SideVideo from "./components/SideVideo";

// import videoBar from "./data/videos.json";		//Importing Data from Json file
// import videos from "./data/video-details.json";	//Importing Data from Json file

class App extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage}/>
					<Route 
						path="/video/:id" 
						render={ 
							props => {
								return <HomePage {...props}/>
							}
						} 
					/>
					<Route path="/upload" exact component={Upload} />
				</Switch>
			</BrowserRouter>
		)
	}
}
export default App;