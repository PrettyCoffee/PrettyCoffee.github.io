import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faGitlab, faXing } from '@fortawesome/free-brands-svg-icons'
import {Toastify, toastAction} from "./components/Toastify/Toastify"

//My Sites
import Home from "./containers/Home/Home"
import About from "./containers/About/About"
import CV from "./containers/CV/CV"
import Coding from "./containers/Coding/Coding"
import Designs from "./containers/Designs/Designs"
import Articles from "./containers/Articles/Articles"

import "./App.css"

type colors = {
	[key:string]:string
	'bg-color':string,
	'default-color':string,
	'accent-color':string,
	'accent-color2':string,
}
const defaultColors:colors = {
	'bg-color': "rgba(46,46,46,255)",
	'default-color': "rgba(230,230,230,255)",
	'accent-color': "rgba(50,200,150,.3)",
	'accent-color2': "rgba(200, 50, 50, 0.3)",
}
export default function App() {
	const[page, setPage]:string|any = useState("home")
	//Prepare colors
	var root = document.documentElement;
	Object.keys(defaultColors).forEach(key => {
		var c = localStorage.getItem(key)
		if (c) {
			root.style.setProperty("--"+key, c);
		}
	});

	var handleColorChange = (key:string, color:string) => {
		root.style.setProperty("--"+key, color);
		toastAction(key+' changed to '+color)
		localStorage.setItem(key, color);
	}

	return (
		<div className="content-wrapper">
			<Toastify/>
			<div className="icon-container">
				<div className="back" onClick={() => setPage("home")}><FontAwesomeIcon icon={faHome}/></div>
				<a href="MailTo:jonathan-holz@outlook.com">
					<FontAwesomeIcon  icon={faEnvelope}/>
				</a>
				<a href="https://www.xing.com/profile/Jonathan_Holz2/cv">
					<FontAwesomeIcon  icon={faXing}/>
				</a>
				<a href="https://github.com/PrettyCoffee">
					<FontAwesomeIcon  icon={faGithubAlt}/>
				</a>
				<a href="https://gitlab.com/PrettyCoffee">
					<FontAwesomeIcon  icon={faGitlab}/>
				</a>
			</div>
			{/* new state Router */}
			{( page === "about" ) ? 
				<About/>
			: ( page === "cv" ) ? 
				<CV/>
			: ( page === "coding" ) ? 
				<Coding/>
			: ( page === "designs" ) ? 
				<Designs/>
			: ( page === "articles" ) ? 
				<Articles/>
			: ( // default case is Home
				<Home 
					handleColorChange={handleColorChange}
					setPage={setPage}
				/>
			)}
		</div>
	)



	/* Disabled Routing because github.io cant handle it
		If Reemplementing you will have to change menu links and the home icon to <Link /> 
	return (
		<div className="content-wrapper">
			<Toastify/>
			<Router>
				<div className="icon-container">
					<Link className="back" to="/"><FontAwesomeIcon icon={faHome}/></Link>
					<a href="MailTo:jonathan-holz@outlook.com">
						<FontAwesomeIcon  icon={faEnvelope}/>
					</a>
					<a href="https://www.xing.com/profile/Jonathan_Holz2/cv">
						<FontAwesomeIcon  icon={faXing}/>
					</a>
					<a href="https://github.com/PrettyCoffee">
						<FontAwesomeIcon  icon={faGithubAlt}/>
					</a>
					<a href="https://gitlab.com/PrettyCoffee">
						<FontAwesomeIcon  icon={faGitlab}/>
					</a>
				</div>
				<Switch >
					<Route path="/articles">
						<Articles />
					</Route>
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
						<Home 
							handleColorChange={handleColorChange}
						/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
	*/
}