import  React from 'react';
import MainBody from './mainBody';
import DestsTable from './DestTable'
import DestTable  from './DestTableV2'
import DestHeadGrid from './destHeadGrid';
import DestValueGrid from './destValueGrid';
 
export default function App() {
let click="empty" 
const tstcallback=(id)=> {alert("success to get id:"+id)} 
const demoHanleClick= (arg)=>{click= arg}
  return (
 <>
	<Head/>
	{/* <MainBody /> */}

{/* <DestsTable /> */}
{/* <DestTable/> */}
<DestHeadGrid   />
<DestValueGrid status={true} ID="575 "  callback= {tstcallback} IP="2.33.44.55"  Name="Negev Min" Port="21" Protocol="Ftp"/>
<DestValueGrid  status={false} ID="578 "  callback= {tstcallback} IP="2.33.44.90"  Name="galil Min" Port="21" Protocol="Ftp"/>

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




