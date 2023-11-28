import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/templates/DashboardNavbar';
import DashboardSidebar from '../components/templates/DashboardSidebar';

const AdminDashboard = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	console.log(isCollapsed);
	return (
		<div className='flex'>
			<div className='flex flex-grow'>
				{/* Sidebar */}
				<DashboardSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
				{/* Content */}
				<main
					className={`flex-grow bg-gray-100  ${
						isCollapsed ? 'ml-20' : 'ml-56'
					} transition-all duration-300 ease-in-out`}>
					{/* Navbar */}
					<DashboardNavbar toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
					<div className='container mx-auto p-6'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default AdminDashboard;
