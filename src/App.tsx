import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faGitlab } from '@fortawesome/free-brands-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//My Sites
import Home from "./containers/Home/Home"
import About from "./containers/About/About"
import CV from "./containers/CV/CV"
import Coding from "./containers/Coding/Coding"
import Designs from "./containers/Designs/Designs"

//My Styles
import "./App.css"

export default function App() {
	return (
		<div className="content-wrapper">
			<div className="icon-container">
				<a href="MailTo:prettycoffee@protonmail.com">
					<FontAwesomeIcon  icon={faEnvelope}/>
				</a>
				<a href="https://github.com/PrettyCoffee">
					<FontAwesomeIcon  icon={faGithubAlt}/>
				</a>
				<a href="https://gitlab.com/PrettyCoffee">
					<FontAwesomeIcon  icon={faGitlab}/>
				</a>
			</div>
			<Router>
				<Switch >
					<Route path="/designs">
						<Designs />
					</Route>
					<Route path="/Coding">
						<Coding />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/CV">
						<CV />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Link to="/"><div className="back"><FontAwesomeIcon icon={faHome}/></div></Link>
			</Router>
		</div>
	);
}