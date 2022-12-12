import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'IPaddr', headerName: 'IP address', width: 140 },
  {
    field: 'Port',
    headerName: 'Port',
    type: 'number',
    width: 70,
  },
  {
    field: 'Protocol',
    headerName: 'Transfer protocol',  
    width: 70,
    
  },
];

const rows = [
  { id: 10, Name: 'Negev Minerals', IPaddr: '84.112.113.114', Port: 2021, Protocol:'FTP' },
  { id: 20, Name: 'Bazan', IPaddr: '84.12.112.114', Port: 2021, Protocol:'FTP' },
  { id:55, Name: 'Agan', IPaddr: '84.182.113.119', Port: 2021, Protocol:'FTP' },
  { id: 56,Name: 'yehuda pladot', IPaddr: '84.112.113.154', Port: 21, Protocol:'FTP' },
  { id: 59,Name: 'Psagot Plastic', IPaddr: '84.112.113.4', Port: 21, Protocol:'FTP' },
  { id: 68, Name: 'DeadSea Plants', IPaddr: '84.112.13.14', Port: 2021, Protocol:'FTP' },
  { id: 70, Name: 'Asbest Galil', IPaddr: '84.112.3.114', Port: 22, Protocol:'SFTP' },
  { id: 80, Name: 'Pri Katif', IPaddr: '84.112.110.11', Port: 2021, Protocol:'FTP' },
  { id: 90, Name: 'Netivot mun', IPaddr: '84.112.113.2', Port: 2021, Protocol:'FTP' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rowHeight={25} 
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}