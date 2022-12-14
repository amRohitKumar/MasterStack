import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Member from './member.page';
import { useMediaQuery } from '@mui/material';

export default function LabTabs({ members }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var match = useMediaQuery('(min-width:800px)');

  return (
    <Box
      sx={{
        typography: 'body1',
        my: '4rem',
        width: match ? '75%' : '100%',
        mx: 'auto',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Member 1"
              value="1"
              sx={{ fontSize: '1.2rem', color: 'black' }}
            />
            <Tab
              label="Member 2"
              value="2"
              sx={{ fontSize: '1.2rem', color: 'black' }}
            />
            <Tab
              label="Member 3"
              value="3"
              sx={{ fontSize: '1.2rem', color: 'black' }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Member member={members[0]} />
        </TabPanel>
        <TabPanel value="2">
          <Member member={members[1]} />
        </TabPanel>
        <TabPanel value="3">
          <Member member={members[2]} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
