import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

import './bootstrap.min.table.css'
export default class DestsTable extends Component {
    constructor() {
        super()
        this.state =
        {
            destrows: [],
            value: "",
            editing: false,
            currentid: "",
            currentValue: ""

        }
    }
    render() {
        let destrows = [...this.props.dests];
        destrows = [
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
return(

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
)
        // return (
        //     <>
        //         <table class="table table-hover">
        //             <thead>
        //                 <tr>
        //                     <th scope="col">Type</th>
        //                     <th scope="col">Column heading</th>
        //                     <th scope="col">Column heading</th>
        //                     <th scope="col">Column heading</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr class="table-active">
        //                     <th scope="row">Active</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr>
        //                     <th scope="row">Default</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-primary">
        //                     <th scope="row">Primary</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-secondary">
        //                     <th scope="row">Secondary</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-success">
        //                     <th scope="row">Success</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-danger">
        //                     <th scope="row">Danger</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-warning">
        //                     <th scope="row">Warning</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-info">
        //                     <th scope="row">Info</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-light">
        //                     <th scope="row">Light</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //                 <tr class="table-dark">
        //                     <th scope="row">Dark</th>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                     <td>Column content</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </>
        // )
    }
}