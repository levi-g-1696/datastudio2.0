import Table from 'react-bootstrap/Table';
import React , {useState} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { propTypes } from 'react-bootstrap/esm/Image';
function DestTable() {
    let destrows = [
        { id: 10, Name: 'Negev Minerals', IPaddr: '84.112.113.114', Port: 2021, Protocol: 'FTP' },
        { id: 20, Name: 'Bazan', IPaddr: '84.12.112.114', Port: 2021, Protocol: 'FTP' },
        { id: 55, Name: 'Agan', IPaddr: '84.182.113.119', Port: 2021, Protocol: 'FTP' },
        { id: 56, Name: 'yehuda pladot', IPaddr: '84.112.113.154', Port: 21, Protocol: 'FTP' },
        { id: 59, Name: 'Psagot Plastic', IPaddr: '84.112.113.4', Port: 21, Protocol: 'FTP' },
        { id: 68, Name: 'DeadSea Plants', IPaddr: '84.112.13.14', Port: 2021, Protocol: 'FTP' },
        { id: 70, Name: 'Asbest Galil', IPaddr: '84.112.3.114', Port: 22, Protocol: 'SFTP' },
        { id: 80, Name: 'Pri Katif', IPaddr: '84.112.110.11', Port: 2021, Protocol: 'FTP' },
        { id: 90, Name: 'Netivot mun', IPaddr: '84.112.113.2', Port: 2021, Protocol: 'FTP' },
    ];
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>IPaddr</th>
                    <th>Port</th>
                    <th>Protocol</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{destrows[0].id}</td>
                    <td>{destrows[0].Name}</td>
                    <td>{destrows[0].IPaddr}</td>
                    <td>{destrows[0].Port}</td>
                    <td>{destrows[0].Protocol}</td>
                    <td><ToggleButtonExample callback={(x)=>{alert ("callback ok "+ x)}} id={ destrows[0].id} /></td>
                </tr>
                <tr>
                    <td>{destrows[1].id}</td>
                    <td>{destrows[1].Name}</td>
                    <td>{destrows[1].IPaddr}</td>
                    <td>{destrows[1].Port}</td>
                    <td>{destrows[1].Protocol}</td>

                </tr>
                <tr>
                    <td>{destrows[2].id}</td>
                    <td>{destrows[2].Name}</td>
                    <td>{destrows[2].IPaddr}</td>
                    <td>{destrows[2].Port}</td>
                    <td>{destrows[2].Protocol}</td>
                </tr>
            </tbody>
        </Table>
    );
   
}
export default DestTable


//import ToggleButton from 'react-bootstrap/ToggleButton';

function ToggleButtonExample(props) {
    //props:callback id
  
    const [checked, setChecked] = useState(false);
    // const [ radioValue, setRadioValue] = useState('1');

     

    return (
        <>

            <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="secondary"
                checked={checked}
                value="1"
                onChange={(e) => {setChecked(e.currentTarget.checked)
                                  if (e.currentTarget.checked ) {props.callback (props.id)

                                  }
                                  
                                  }}
            >
                V
            </ToggleButton>

        </>)
}