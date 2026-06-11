import React, {useState} from "react";
import Nav from "./Nav";
import HogDisplay from "./HogDisplay";
import hogData from "../porkers_data";
import FilterAndSort from "./FilterAndSort";

function App() {
	const [hogs, setHogs] = useState([...hogData])
	const [filter, setFilter] = useState({
		greased: false,
		sort: 'name'
	})
	console.log(filter)

	return (
		<div className="App">
			<Nav />
			<FilterAndSort onSetFilter={setFilter} filterSettings={filter}/>
			<HogDisplay hogs={hogs} filter={filter}/>
		</div>
	);
}

export default App;
