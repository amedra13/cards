import React from 'react'
import GradingBars from '../Graphs/GradingBars'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import RecentTransactions from '../Graphs/RecentTransactions';

const DashHome = () => {
    return (
        <div className='dashboard__home'>
            <div className="dashboard__grading container">
                <h1>Grades of ALL or Order</h1>
                <GradingBars/>
                <div className='dashboard__gradingSubtitle '>
                    <ArrowUpwardIcon fontSize='small' /> 
                    <h2>Next expected order: PSA #1034887</h2>
                </div>
                <div className='dashboard__gradingSubtitle'>
                    <TrendingUpIcon fontSize='small'/> 
                    <h2>Number of cards in next order: 22</h2>
                </div>
            </div>
            <div className="dashboard__sales container">
                <h1>Sales/cost graph history</h1>
                <h1>Checks all/ recent/ or select order results</h1>
            </div>
            <RecentTransactions/>
            <div className="dashboard__inventory container">
                <h1>Pie graph chowing current inventory</h1>
                <h2>The most of graded inventory: Mostly psa 10/ psa 9</h2>
                <h2>Most of sport</h2>
            </div>
        </div>
    )
}

export default DashHome
