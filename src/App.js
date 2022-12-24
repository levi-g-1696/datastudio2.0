import  React from 'react';
import MainBody from './mainBody';
import DestsTable from './DestTable'
import DestTable  from './DestTableV2'

export default function App() {
let click="empty"  
const demoHanleClick= (arg)=>{click= arg}
  return (
 <>
	<Head/>
	{/* <MainBody /> */}

{/* <DestsTable /> */}
<DestTable/>
	<Bottom/>
</>
  );}
  
  
  function Head() {
  return (
 <>
	<h5>Head </h5>
	</>
	
	)}

	function Bottom() {
  return (
 <>
	<h1>Bottom </h1>
	</>
	
	)
}




