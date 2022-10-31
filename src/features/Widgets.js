import React from 'react'
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info"
import { FiberManualRecord } from '@mui/icons-material'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("React god", "Top news - 999 readers")}
            {newsArticle("Mnogo sum dobyr", "test")}
        </div>
        
    )
}

export default Widgets