import { useEffect, useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';

const revenueData = [
	{ date: '2022-01-01', amount: 1000 },
	{ date: '2022-01-02', amount: 2000 },
	{ date: '2022-01-03', amount: 1500 },
	// Add more data as needed
];

const TotalRevenue = () => {
	const [totalRevenue, setTotalRevenue] = useState(0);

	useEffect(() => {
		// Calculate the total revenue from the custom data prop
		const revenue = revenueData.reduce((acc, curr) => acc + curr.amount, 0);
		setTotalRevenue(revenue);
	}, []);
	return (
		<div className='bg-white rounded-md shadow-md p-4'>
			<div className='flex items-center mb-2'>
				<FaMoneyBillAlt className='text-gray-500 mr-2' />
				<h2 className='text-lg font-medium text-gray-800'>Total Revenue</h2>
			</div>
			<p className='text-4xl font-bold text-green-500'>${totalRevenue}</p>
		</div>
	);
};

export default TotalRevenue;
