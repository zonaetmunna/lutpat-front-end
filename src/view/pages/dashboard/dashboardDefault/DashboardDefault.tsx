import TodayRevenue from '../../../components/molecules/TodayRevenue';
import TotalOrder from '../../../components/molecules/TotalOrder';
import TotalRevenue from '../../../components/molecules/TotalRevenue';
import TotalStore from '../../../components/molecules/TotalStore';

const DashboardDefault = () => {
	return (
		<div className='mt-5'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
				<div className='col-span-1'>
					<TotalRevenue />
				</div>
				<div className='col-span-1'>
					<TotalOrder />
				</div>
				<div className='col-span-1'>
					<TodayRevenue />
				</div>
				<div className='col-span-1'>
					<TotalStore />
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{/* <ChartSalesHistory /> */}</div>
		</div>
	);
};

export default DashboardDefault;
