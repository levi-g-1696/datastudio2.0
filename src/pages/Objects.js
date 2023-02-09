import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import DestinationComp from './DestinationsComp'
import DestinationCompV2c from './DestinationCompClass';
import ResponsiveAppBar from './CrudButtons'
//import DestinationCompV3c from './destsFull'
import MonListFormV2 from './monListFormV2';
//import MonNamesApp from './monListFormV3'
import MonitorListComp from './monListComp';
// import ButtonTest from './buttontest';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const checkcallback = (s) => { alert("got:" + s) }
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ObjectsComp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
   
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Destinations" {...a11yProps(0)} />
        <Tab label="Monitor lists" {...a11yProps(1)}  />
        <Tab label="Values" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />

      </Tabs>
      <TabPanel value={value} index={0}>
      
        <DestinationCompV2c />
     
        {/* <DestinationCompV3c /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MonitorListComp />
        {/* <	MonNamesApp MonNamesString= {"monWS,monPREC10,monT,monRH"} GetMonitorsNames= {checkcallback} /> */}
      
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        {/* <ButtonTest callback={alert("getcancel click ")} /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>

    </Box>
  );
}