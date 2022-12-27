import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox(props) {
  const [checked, setChecked] = React.useState(props.statval);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.callback(event.target.checked)
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx= {{ '& .MuiSvgIcon-root': { fontSize: 18 } }}
    />
   
  );
}