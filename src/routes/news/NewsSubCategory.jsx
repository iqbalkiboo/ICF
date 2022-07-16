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
import { useLocation } from 'react-router';

const newsSubCategories = [
    {
        id: "0",
        label: 'ALL'
    },
    {
        id: "1",
        label: 'TRACK'
    },
    {
        id: "2",
        label: 'ROAD BIKE'
    },
    {
        id: "3",
        label: 'OFF ROAD'
    },
    {
        id: "4",
        label: 'SPORTBIZ'
    },
]

export default function NewsSubCategory(props) {
    const location = useLocation()

    let selectedSubCategory = newsSubCategories[0]
    const findSubCategory = newsSubCategories.find(x => x.label === location?.state?.params)
    selectedSubCategory = findSubCategory ? findSubCategory : selectedSubCategory
    
    const [value, setValue] = React.useState(selectedSubCategory.id)
    const [tabs, setTabs] = React.useState(selectedSubCategory.label)
    
    const handleChange = (event, newValue) => {

        setTabs(event.target.textContent)
        setValue(newValue);
    };

    return (
        <div className="about-pages">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#fff' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" >
                            {newsSubCategories?.map((newsSubCategory, index) => (
                                <Tab key={index} label={newsSubCategory?.label} value={newsSubCategory?.id} sx={{color: '#fff'}}/>
                            ))}
                        </TabList>
                    </Box>
                    {newsSubCategories?.map((newsSubCategory, index) => (
                            <TabPanel key={index} value={newsSubCategory?.id} sx={{color: '#fff'}}><AllPages props={props} sub={tabs}/></TabPanel>
                    ))}
                </TabContext>
            </Box>
        </div>
    )
}
