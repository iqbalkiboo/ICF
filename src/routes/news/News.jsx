import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// components
import AllPages from './components/all/All.js'

import '../../assets/style/news.css'

export default function NewsPages() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className="about-pages">
                <div className="labels">News</div>
                <div className="wrap-sub-news-menu">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#fff' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                    <Tab label="ALL" value="1" sx={{color: '#fff'}}/>
                                    <Tab label="ICF" value="2" sx={{color: '#fff'}}/>
                                    <Tab label="PRESS RELEASE" value="3" sx={{color: '#fff'}}/>
                                    <Tab label="PRE EVENT REPORT" value="4" sx={{color: '#fff'}}/>
                                    <Tab label="EVENT REPORT" value="5" sx={{color: '#fff'}}/>
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{color: '#fff'}}><AllPages /></TabPanel>
                            <TabPanel value="2" sx={{color: '#fff'}}>ICF</TabPanel>
                            <TabPanel value="3" sx={{color: '#fff'}}>PRESS RELEASE</TabPanel>
                            <TabPanel value="4" sx={{color: '#fff'}}>PRE EVENT REPORT</TabPanel>
                            <TabPanel value="5" sx={{color: '#fff'}}>EVENT REPORT</TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>
    )
}
