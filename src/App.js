import  React from 'react';
import MainBody from './mainBody';

export default function App() {
let click="empty"  
const demoHanleClick= (arg)=>{click= arg}
  return (
 <>
	<Head/>
	<MainBody />


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




