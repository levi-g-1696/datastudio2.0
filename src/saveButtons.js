import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SaveButtons({ handleClick }) {
  return (
    <Stack spacing={2} direction="row">

      <Button size="small" variant="contained" onClick={event => handleClick("save")} >Save</Button>
      <Button size="small" variant="contained" onClick={event => handleClick("cancel")} >Cancel</Button>
    </Stack>
  );
}