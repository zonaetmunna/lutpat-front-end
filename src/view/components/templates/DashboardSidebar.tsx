import { useState } from 'react';
import { BiMessageSquare, BiStore } from 'react-icons/bi';
import { FaChevronDown, FaChevronUp, FaCog, FaList, FaPlus, FaUser } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiLogOut, FiShoppingBag } from 'react-icons/fi';
import { MdDashboard, MdPeople, MdPerson, MdRestaurantMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../../app/store';
import { logOut } from '../../../features/auth/authSlice';

interface SidebarProps {
	toggleSidebar: () => void;
	isCollapsed: boolean;
}
const DashboardSidebar = ({ toggleSidebar, isCollapsed }: SidebarProps) => {
	const { user } = useSelector((state: RootState) => state.auth);

	const navigate = useNavigate();

	const [isProductOpen, setIsProductOpen] = useState(false);
	const [isVendorOpen, setIsVendorOpen] = useState(false);
	const [isCustomerOpen, setIsCustomerOpen] = useState(false);
	const [isOrderOpen, setIsOrderOpen] = useState(false);

	const toggleProductMenu = () => {
		setIsProductOpen(!isProductOpen);
	};

	const toggleVendorMenu = () => {
		setIsVendorOpen(!isVendorOpen);
	};
	const toggleCustomerMenu = () => {
		setIsCustomerOpen(!isCustomerOpen);
	};

	const toggleOrderMenu = () => {
		setIsOrderOpen(!isOrderOpen);
	};

	// logout
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logOut());
	};

	return (
		<div
			className={`${
				isCollapsed ? 'w-20' : 'w-56'
			} fixed top-0 left-0 bottom-0 h-screen p-5  shadow-md bg-gray-800 text-gray-100 flex flex-col transition-all duration-300 ease-in-out overflow-y-auto hide-scrollbar`}>
			<div className='flex items-center justify-center h-16 rounded-full'>
				<img src={user?.profileImage} alt='Logo' className='rounded-full w-20 h-20' />
			</div>
			<div className='m-2 flex justify-center items-center'>
				<p>{user?.name}</p>
				<p>{user?.role}</p>
			</div>

			<nav className='flex flex-col py-4 '>
				{/* dashboard */}
				<button
					onClick={() => navigate('/admin-dashboard')}
					className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md'>
					<span className='mr-2'>
						<MdDashboard className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Dashboard</span>
				</button>
				{/* shop */}
				<button
					onClick={() => navigate('shop-list')}
					className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md'>
					<span className='mr-2'>
						<BiStore className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Shop-List</span>
				</button>
				{/* products */}
				<button
					className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md  transition-colors duration-200'
					onClick={toggleProductMenu}>
					<span className='mr-2'>
						<FaList className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Products</span>
					{isProductOpen ? (
						<FaChevronUp className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					) : (
						<FaChevronDown className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					)}
				</button>
				<div className={`ml-4 ${isProductOpen ? '' : 'hidden'}`}>
					<Link
						to='product-list'
						className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md transition-colors duration-200'>
						<span className='mr-2'>
							<FaList className='mr-4' />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Product List</span>
					</Link>
					<Link
						to='product-add'
						className='flex items-center py-2 px-4 hover:bg-gray-300 rounded-md'>
						<span className='mr-2'>
							<FaPlus className='mr-4' />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Add Product</span>
					</Link>
				</div>

				{/* category */}
				<button
					onClick={() => navigate('category-list')}
					className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md'>
					<span className='mr-2'>
						<MdRestaurantMenu className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Category-List</span>
				</button>

				{/* vendors */}
				<button
					className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md'
					onClick={toggleVendorMenu}>
					<span className='mr-2'>
						<FaUser className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Vendors</span>
					{isVendorOpen ? (
						<FaChevronUp className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					) : (
						<FaChevronDown className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					)}
				</button>
				<div className={`ml-4 ${isVendorOpen ? '' : 'hidden'}`}>
					<Link
						to='vendor-list'
						className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md'>
						<span className='mr-2'>
							<FaUser className='mr-4' />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Vendors List</span>
					</Link>
					<Link
						to='vendor/:id'
						className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md'>
						<span className='mr-2'>
							<FaUser className='mr-4' />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Vendor Profile</span>
					</Link>
				</div>
				{/* customer */}
				<button
					className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md'
					onClick={toggleCustomerMenu}>
					<span className='mr-2'>
						<MdPerson className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Customer</span>
					{isCustomerOpen ? (
						<FaChevronUp className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					) : (
						<FaChevronDown className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					)}
				</button>
				<div className={`ml-4 ${isCustomerOpen ? '' : 'hidden'}`}>
					<Link
						to='customer-list'
						className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md'>
						<span className='mr-2'>
							<MdPeople className='mr-4' />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Customer List</span>
					</Link>
					<Link
						to='customer/:id'
						className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md'>
						<span className='mr-2'>
							<FaUser className='mr-4' />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Customer</span>
					</Link>
				</div>
				{/* orders */}
				<button
					className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md'
					onClick={toggleOrderMenu}>
					<span className='mr-2'>
						<FiShoppingBag className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Orders</span>
					{isOrderOpen ? (
						<FaChevronUp className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					) : (
						<FaChevronDown className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
					)}
				</button>
				<div className={`ml-4 ${isOrderOpen ? '' : 'hidden'}`}>
					<Link
						to='order-list'
						className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md'>
						<span className='mr-2'>
							<FiShoppingBag />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Order List</span>
					</Link>
					<Link
						to='/order/:id'
						className='flex items-center py-2 px-4 hover:bg-gray-700 rounded-md'>
						<span className='mr-2'>
							<FiShoppingBag />
						</span>
						<span className={`${isCollapsed ? 'hidden' : ''}`}>Order Details</span>
					</Link>
				</div>

				{/* setting */}
				<button
					onClick={() => navigate('settings')}
					className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md'>
					<span className='mr-2'>
						<FaCog className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Settings</span>
				</button>
				{/* messages */}
				<button
					onClick={() => navigate('message')}
					className='flex items-center py-2 px-4  hover:bg-gray-700 rounded-md'>
					<span className='mr-2'>
						<BiMessageSquare className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Message</span>
				</button>
			</nav>
			{/* )} */}
			{/* logout */}
			<div className='flex items-center justify-center'>
				<button
					onClick={handleLogOut}
					className='flex items-center py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-200'>
					<span className='mr-2'>
						<FiLogOut className='mr-4' />
					</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>Logout</span>
				</button>
			</div>
			<div className='absolute bottom-0 mb-6 mx-auto cursor-pointer' onClick={toggleSidebar}>
				{isCollapsed ? (
					<FiChevronRight className='text-gray-500 text-2xl' />
				) : (
					<FiChevronLeft className='text-gray-500 text-2xl' />
				)}
			</div>
		</div>
	);
};

export default DashboardSidebar;
