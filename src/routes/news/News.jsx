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

export default function NewsPages() {
    const [value, setValue] = React.useState('1');
    const [subCateg, setSubCateg] = React.useState('1')
    const [tabs, setTabs] = React.useState('ALL')
    const [tabsCateg, setTabsCateg] = React.useState('ROAD')
    
    const handleChange = (event, newValue) => {
        setTabs(event.target.textContent)
        setValue(newValue);
    };

    const handleSubCateg = (event, newVal) => {
        setTabsCateg(event.target.textContent)
        setSubCateg(newVal)
    }

    console.log(subCateg)

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
                                <TabList onChange={handleSubCateg} aria-label="lab API tabs example" >
                                    <Tab label="ROAD" value="1" sx={{color: '#fff'}}/>
                                    <Tab label="OFF ROAD" value="2" sx={{color: '#fff'}}/>
                                    <Tab label="TRACK" value="3" sx={{color: '#fff'}}/>
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{color: '#fff'}}><AllPages props={tabs} sub={tabsCateg}/></TabPanel>
                            <TabPanel value="2" sx={{color: '#fff'}}><AllPages props={tabs} sub={tabsCateg}/></TabPanel>
                            <TabPanel value="3" sx={{color: '#fff'}}><AllPages props={tabs} sub={tabsCateg}/></TabPanel>
                            <TabPanel value="4" sx={{color: '#fff'}}><AllPages props={tabs} sub={tabsCateg}/></TabPanel>
                            <TabPanel value="5" sx={{color: '#fff'}}><AllPages props={tabs} sub={tabsCateg}/></TabPanel>
                        </TabContext>
                    </Box>
                    {/* bikin baru untuk tab filter subCateg */}
                </div>
            </div>
        </div>
    )
}
