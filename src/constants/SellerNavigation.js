import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineChartBar,
	HiOutlineCash,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/Dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/ListProducts',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/ListOrders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'salesTracking',
		label: 'Sales Tracking',
		path: '/SalesTracking',
		icon: <HiOutlineChartBar />
	},
	{
		key: 'sellerwallet',
		label: 'Seller Wallet',
		path: '/Sellerwallet',
		icon: <HiOutlineCash/>
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'profileSettings',
		label: 'Profile Settings',
		path: '/profileSetting',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]