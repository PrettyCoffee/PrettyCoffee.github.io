import React, { useState } from "react";
import { Toastify, toastAction } from "./_components/Toastify"
import Navbar from "./_components/Navbar"

//My Sites
import Start from "./Start/Start"
import About from "./About/About"
import CV from "./CV/CV"
import Coding from "./Coding/Coding"
import Showcase from "./Showcase/Showcase"
import Articles from "./Articles/Articles"

import "./_styles/App.css"

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
	const [currPage, setCurrPage] = useState("")

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
			<Toastify />
			<Navbar setCurrPage={setCurrPage}/>
			{
				(currPage === "articles")?
					<Articles />
				:(currPage === "showcase")?
					<Showcase />
				:(currPage === "coding")?
					<Coding />
				:(currPage === "about")?
					<About />
				:(currPage === "cv")?
					<CV />

				: <Start 
					handleColorChange={handleColorChange}
					setCurrPage = {setCurrPage}
				/>
			}
		</div>
	);
}

/* Disabled Routing because github.io cant handle it
If Reemplementing you will have to change menu links and the home icon to <Link /> 
return (
	<Router>
		<div className="content-wrapper">
			<Toastify />
			<Navbar />
			<Switch >
				<Route path="/articles">
					<Articles />
				</Route>
				<Route path="/showcase">
					<Showcase />
				</Route>
				<Route path="/coding">
					<Coding />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/CV">
					<CV />
				</Route>
				<Route path="/">
					<Start 
						handleColorChange={handleColorChange}
					/>
				</Route>
			</Switch>
		</div>
	</Router>
);
*/