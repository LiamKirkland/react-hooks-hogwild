import React, {useState} from "react";
import Nav from "./Nav";
import HogDisplay from "./HogDisplay";
import hogData from "../porkers_data";
import FilterAndSort from "./FilterAndSort";

function App() {
	const [hogs, setHogs] = useState(hogData.map(hog => {return {...hog, hidden: false}}))
	const [filter, setFilter] = useState({
		greased: false,
		sort: 'name'
	})

	function revealHidden() {
		console.log("reveal your hog")
		setHogs(hogs.map(hog => { return {...hog, hidden: false}}))
	}

	return (
		<div className="App">
			<Nav />
			<FilterAndSort onSetFilter={setFilter} filterSettings={filter} onRevealHidden={revealHidden}/>
			<HogDisplay hogs={hogs} filter={filter} onSetHogs={setHogs}/>
		</div>
	);
}

export default App;
