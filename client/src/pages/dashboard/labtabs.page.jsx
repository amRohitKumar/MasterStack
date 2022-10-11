import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Member from './member.page';

export default function LabTabs({members}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Member 1" value="1" />
            <Tab label="Member 2" value="2" />
            <Tab label="Member 3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Member member={members[0]}/></TabPanel>
        <TabPanel value="2"><Member member={members[1]}/></TabPanel>
        <TabPanel value="3"><Member member={members[2]}/></TabPanel>
      </TabContext>
    </Box>
  );
}
