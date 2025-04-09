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
    <Box
      className="header"
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        backgroundColor: 'red',
        pt: 2,
        pb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '5%',
      }}
    >
      {/* First Column: Image */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <Image
          src="/corneliusLogo.png"
          width={80}
          height={80}
          alt="Cornelius the Cornhusker"
        />
      </Box>

      {/* Second Column: Title and Tabs (Centered) */}
      <Box
        sx={{
          flex: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Cornfed Ultimate Frisbee
        </h1>
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

      {/* Third Column: Cornfed Logo */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Image
          src="/cornfedLogo.png"
          width={120}
          height={120}
          alt="Cornfed Ultimate Frisbee"
        />
      </Box>
    </Box>
  );
};

export default Header;
