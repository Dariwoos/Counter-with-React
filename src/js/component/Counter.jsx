import React, { useState, useEffect } from "react";
import propType from "prop-types";

function Counter(props) {
	const [number, setNumer] = useState(0);
	useEffect(() => {
		const time = setInterval(() => {
			setNumer(x => x + 1);
		}, props.call);
	}, []);
	if (number == 10) {
		clearInterval(number);
		setNumer(0);
	}
	return (
		<div className="contador">
			<h2 className="numbers">{number}</h2>
		</div>
	);
}
Counter.propType = {
	call: propType.number
};
export default Counter;
