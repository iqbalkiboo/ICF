import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// components
import NewsSubCategory from './NewsSubCategory.jsx';
// assets
import '../../assets/style/news.css'
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const newsCategories = [
    {
        id: "0",
        label: 'ALL'
    },
    {
        id: "1",
        label: 'ICF'
    },
    {
        id: "2",
        label: 'PRESS RELEASE'
    },
    {
        id: "3",
        label: 'PRE EVENT REPORT'
    },
    {
        id: "4",
        label: 'EVENT REPORT'
    },
    {
        id: "5",
        label: 'FEATURE'
    },
]

export default function NewsPages() {
    const location = useLocation()
    const { t } = useTranslation();
    let selectedCategory = newsCategories[0]
    const findCategory = newsCategories.find(x => x.label === location?.state?.params)
    selectedCategory = findCategory ? findCategory : selectedCategory
    
    const [value, setValue] = React.useState(selectedCategory.id)
    const [tabs, setTabs] = React.useState(selectedCategory.label)
    
    const handleChange = (event, newValue) => {
        setTabs(event.target.textContent)
        setValue(newValue);
    };

    return (
        <div className="about-pages">
            <div className="wrap-content-all">
                <div className="labels">{t("NEWS")}</div>
                <div className="wrap-sub-news-menu">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#fff' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                    {newsCategories?.map((newsCategory, index) => (
                                        <Tab key={index} label={newsCategory?.label} value={newsCategory?.id} sx={{color: '#fff'}}/>
                                    ))}
                                </TabList>
                            </Box>
                            {newsCategories?.map((newsCategory, index) => (
                                <TabPanel key={index} value={newsCategory?.id} sx={{color: '#fff'}}>
                                    <NewsSubCategory props={tabs}/>
                                </TabPanel>
                            ))}
                        </TabContext>
                    </Box>
                </div>
            </div>
            <hr className="new1"/>
        </div>
    )
}


