import { Outlet } from 'react-router-dom';
import NavbarSeller from '../components/sellerDashboard/nav/NavbarSeller';
import SellerDashboardSidebar from '../components/sellerDashboard/sidebar/SellerDashboardSidebar';

const SellerDashboard = () => {
	return (
		<div className=''>
			<NavbarSeller />

			<div className='flex flex-grow'>
				<SellerDashboardSidebar />

				<main className='flex-grow bg-gray-100 p-6'>
					<div className='container mx-auto'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default SellerDashboard;
