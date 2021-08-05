import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import StorageIcon from '@material-ui/icons/Storage';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebar__list'>
                <li><HomeIcon fontSize='large' /> Home</li>
                <li><StorageIcon fontSize='large' /> Inventory</li>
                <li><MarkunreadMailboxIcon fontSize='large' /> Grading</li>
                <li> <AttachMoneyIcon fontSize='large' />Sales</li>
            </ul>
        </div>
    )
}

export default Sidebar
