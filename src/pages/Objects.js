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
import ValuesComp from './valsComp';
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
const valsLst=[ { id: 10, Name: 'Meteo1m-1', monListID: 1, monListName: "Meteorology1m" },
{ id: 550, Name: 'Meteo1m-2', monListID: 1, monListName: "Meteorology1m" ,vals:"mg,mn/9,9/88,88"},
{ id: 50, Name: 'Meteo10m-1', monListID: 2, monListName: "Meteorology10m-std" ,vals:"mg,mn/9,9/88,88"},
{ id: 150, Name: 'rain10m-1', monListID: 15, monListName: "Precipitation" ,vals:"mg,mn/9,9/88,88"},
]
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
        <ValuesComp valsListArr={valsLst}/>
        {/* <ButtonTest callback={alert("getcancel click ")} /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ValuesComp  />
      </TabPanel>

    </Box>
  );
}