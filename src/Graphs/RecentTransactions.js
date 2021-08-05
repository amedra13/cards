import React from 'react'
import Transactions from '../data/transactions'
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const RecentTransactions = () => {
    const total = Transactions.reduce((sum, trx) => {
        if(trx.type === 'Sale' || trx.type === 'Trade-Sale' ){
            return sum+=trx.price;
        }else {
            return sum-=trx.price;
        }
    }, 0)

    return (
        <div className='dashboard__transactions container'>
            <h1>Recent Activity</h1>
            <div>
                <h1 className="sum">{total}</h1>
                <p>past 30 days</p>
                <p>$1435 vs last month</p>
                <p>Most Recent Transactions</p>
            </div>
            <div className='transactions'>
                <div className='transactions__item' >
                    <p></p>
                    <p>Card Name</p>
                    <p>Sold To</p>
                    <p>Price</p>
                </div>
                {Transactions.map((t,idx) => {
                    let image = t.type === 'Sale' ? <MonetizationOnIcon/> : 
                    t.type === 'Buy' ? <AddShoppingCartIcon/> : <SyncAltIcon/>;

                    return <div className='transactions__item' key={idx}>
                        <span>{image}</span>
                        <p>{t.card}</p>
                        <p>{t.soldTo}</p>
                        <p>{t.price}</p>
                    </div>

                })}
  
                
            </div>
        </div>
    )
}

export default RecentTransactions
