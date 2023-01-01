import  React, { useState } from 'react';
import MainBody from './mainBody';

import DestHeadGrid from './destHeadGrid';
import DestValueGrid from './destValueGridV23';
 
export default function App() {
let click="empty" 
const [selectedID,setSelectedID] = useState(-1)
const tstcallback=(id)=> {
	// make status for all false 
	// only one true
	setSelectedID(id)
	 
	//alert("success to get id:"+id)
} 
const demoHanleClick= (arg)=>{click= arg}
const ONremove= (arg)=>{alert ("clicked REMOVE row-"+arg)}
const ONedit= (arg)=>{alert ("clicked Edit row-"+arg)}
  return (
 <>
	<Head/>
	<MainBody />

{/* <DestsTable /> */}
{/* <DestTable/>  // makes only 1 call back for all rows*/} 

 {/* <DestValueGrid selectedID={selectedID} ID="575 "  getSelectedID= {tstcallback} IP="2.33.44.55"  Name="Negev Min" Port="21" Protocol="Ftp"/>
<DestValueGrid   selectedID={selectedID} ID="578 "  getSelectedID= {tstcallback} IP="2.33.44.90"  Name="galil Min" Port="21" Protocol="Ftp"/>  */}
{/* <DestValueGrid onRemove={ONremove} onEdit={ONedit} ID="575 "   IP="2.33.44.55"  Name="Negev Min" Port="21" Protocol="Ftp"/>
<DestValueGrid   onRemove={ONremove} onEdit={ONedit} ID="578 "   IP="2.33.44.90"  Name="galil Min" Port="21" Protocol="Ftp"/>  */}

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




