import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// components
import AllPages from './components/all/All.js'
// assets
import '../../assets/style/news.css'

export default function NewsSubCategory(props) {
    const [value, setValue] = React.useState('1')
    const [tabs, setTabs] = React.useState('ROAD')
    
    const handleChange = (event, newValue) => {

        setTabs(event.target.textContent)
        setValue(newValue);
    };

    return (
        <div className="about-pages">
            <div className="wrap-sub-news-menu">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#fff' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                <Tab label="ROAD" value="1" sx={{color: '#fff'}}/>
                                <Tab label="OFF ROAD" value="2" sx={{color: '#fff'}}/>
                                <Tab label="TRACK" value="3" sx={{color: '#fff'}}/>
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{color: '#fff'}}><AllPages props={props} sub={tabs}/></TabPanel>
                        <TabPanel value="2" sx={{color: '#fff'}}><AllPages props={props} sub={tabs}/></TabPanel>
                        <TabPanel value="3" sx={{color: '#fff'}}><AllPages props={props} sub={tabs}/></TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}
