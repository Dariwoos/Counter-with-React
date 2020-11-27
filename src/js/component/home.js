import React from "react";
import Counter from "./Counter.jsx";
import "../../styles/Counter.css";
import "../../styles/index.scss";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<div className="letters row justify-content-center">
				<h1>Counter done with React</h1>
			</div>
			<div className="row justify-content-center ">
				<Counter call={100000000} />
				<Counter call={10000000} />
				<Counter call={1000000} />
				<Counter call={100000} />
				<Counter call={10000} />
				<Counter call={1000} />
			</div>
		</div>
	);
}
