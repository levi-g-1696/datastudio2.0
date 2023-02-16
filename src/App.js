import React, { useState } from 'react';
// import MainBody from './mainBody';
// import Appf from './basicfield2';

// import DestHeadGrid from './destHeadGrid';
// import DestValueGrid from './destValueGridV23';
// import MonitorListComp from './monListComp';
// import BasicTextFields from './basicField';
// import BasicTextFields2 from './basicfield2';
// //import MonNamesApp from './monListFormV3';
// import MonListComp from './monListComp'
// import StationNameForm from './statinNameForm';
// import StationFormPart1 from './stationFormP1';
import ValuesComp from './valsComp'
import MainBodyRT from './mainBody-Rt'

export default function App() {
	let click = "empty"
	const [selectedID, setSelectedID] = useState(-1)
	const tstcallback = (id) => {
		// make status for all false 
		// only one true
		setSelectedID(id)

		//alert("success to get id:"+id)
	}
	const demoHanleClick = (arg) => { click = arg }
	const checkcallback=(s)=> {alert("got:"+s)}
	const ONremove = (arg) => { alert("clicked REMOVE row-" + arg) }
	const ONedit = (arg) => { alert("clicked Edit row-" + arg) }
	return (
		
		<div className='container'>
				<Head />
				<ValuesComp />
		{/* <MainBody /> */}
			{/* <MainBodyRT /> */}
			<Bottom />
			</div>
	);
}


function Head() {
	return (
		<>
			<h5>Head </h5>
		</>

	)
}

function Bottom() {
	return (
		<>
			<h1>Bottom </h1>
		</>

	)
}




