import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Image from 'next/image';

interface HeaderProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const Header = ({ value, onChange }: HeaderProps) => {
  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  return (
    <>
      <Image
        src="/Cornelius_new.png"
        width={50}
        height={50}
        className="absolute left-2 top-2"
        alt="Cornelius the Cornhusker"
      />
      <Box
        className="header"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: 'red',
          pl: '25%',
          pt: 2,
          pb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={onChange}
          sx={{
            '& .MuiTabs-flexContainer': { gap: '4px' },
            '& .MuiTab-root': {
              color: 'white',
            },
            '& .Mui-selected': {
              color: 'white !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
          }}
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </>
  );
};

export default Header;
