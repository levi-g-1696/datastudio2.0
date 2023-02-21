import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall(props) {
  const [stationID, setStationID] = React.useState('');
  const stationList=  props.stations
  const handleChange = (event) => {
    setStationID(event.target.value)
    props.callback(event.target.value)
  };
  
  //===========
const menuList= stationList.map((item)=>  <MenuItem value={item.id}>{item.id+" , "+ item.Name}</MenuItem> )
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Station </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={stationID}  //default select value as state
        label="Station"
        onChange={handleChange}
      >
         {menuList}
      
      </Select>
    </FormControl>
  );
}