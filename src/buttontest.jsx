import Button from 'react-bootstrap/Button';
import * as React from 'react';
// function TypesExample() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

export default class ButtonTest extends React.Component {
     constructor(props) {
         super();
    //     this.state = {ID:props.currentDestination.ID, Name: props.currentDestination.Name, Protocol:props.currentDestination.Protocol,IP:props.currentDestination.IP,
	// 	               Port:props.currentDestination.Port,VirtPath:"",User:"",Psw:""};
        
      
    }

    handleClick = e => {
        e.stopPropagation();  //  <------ Here is the magic
        this.props.onClick();
      }
    render() {
     
        return (
<>
<Button variant="secondary" onClick={this.handleClick} >Cancel</Button>{' '}
</>)
}}
// export default TypesExample;