import React from 'react'
import DashboardStatusGrid from '../../components/Seller/DashboardStatusGrid'
import TransactionChart from '../../components/Seller/TransactionChart'
import WeeksTotalSales from '../../components/Seller/WeeksTotalSales'
import RecentOrders from '../../components/Seller/RecentOrders'
import PopularProducts from '../../components/Seller/PopularProducts'


const Dashboard = () => {
  return (
    <div className="w-full mx-auto">
      <DashboardStatusGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <WeeksTotalSales />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
  
        
        

      </div>
      
    </div>
  )
}

export default Dashboard