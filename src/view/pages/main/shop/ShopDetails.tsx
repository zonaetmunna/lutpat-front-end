import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByShopQuery } from '../../../../features/product/productApi';
import { useGetSingleStoreQuery } from '../../../../features/store/storeApi';
import ProductCard from '../../../components/molecules/ProductCard';

const ShopDetails = () => {
	const { id = '' } = useParams();
	const { data, isLoading: shopLoading, isError: shopError } = useGetSingleStoreQuery(id);
	const store = data?.data;
	console.log(store);

	const {
		data: datas,
		isLoading: productLoading,
		isError: productError,
	} = useGetProductsByShopQuery(id);
	const products = datas?.data;
	console.log(products);

	const [categoryFilter, setCategoryFilter] = useState('');
	/*  const {
    data: datas,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductsQuery(); */

	// const products = datas?.data;

	useEffect(() => {
		// Reset the category filter when the shop ID changes
		setCategoryFilter('');
	}, [id]);

	if (shopLoading || productLoading) {
		return <div>Loading...</div>;
	}
	if (shopError) {
		return <div>Error loading shop.</div>;
	}

	if (productError) {
		return <div>Error loading products.</div>;
	}

	return (
		<div className='container mx-auto bg-gray-100 p-10'>
			<div className='flex flex-col lg:flex-row'>
				{/* sidebar */}
				<div className='w-full lg:w-1/4 bg-white hidden sm:block overflow-y-auto p-4 rounded-lg shadow-md'>
					<h2 className='text-lg font-medium mb-4'>Shop Information</h2>
					<div className='flex items-center mb-4'>
						<img src={store?.image} alt='Logo' className='h-12 w-12 mr-2' />
					</div>
					<div>
						<p className='text-gray-900 font-medium'>{store?.name ?? ''}</p>
					</div>

					<div className='mt-4'>
						<p className='text-gray-600 font-medium'>Phone:</p>
						<p className='text-gray-900 font-medium'>{store?.phone}</p>
					</div>
					<div className='mt-4'>
						<p className='text-gray-600 font-medium'>Email:</p>
						<p className='text-gray-900 font-medium'>{store?.email}</p>
					</div>
					<div className='mt-4'>
						<p className='text-gray-600 font-medium'>Website:</p>
						<p className='text-gray-900 font-medium'>{store?.website}</p>
					</div>
					<div className='mt-4'>
						<p className='text-gray-600 font-medium'>Social Media:</p>
						<p className='text-gray-900 font-medium'>{store?.socialMedia}</p>
					</div>
					<div className='mt-4'>
						<p className='text-gray-600 font-medium'>Social Media:</p>
						<p className='text-gray-900 font-medium'>{store?.socialMedia}</p>
					</div>
					<div className='mt-4'>
						<p className='text-gray-600 font-medium'>Status:</p>
						<p className='text-gray-900 font-medium'>{store?.status}</p>
					</div>
					<div className='mt-4'>
						<p className='text-gray-600 font-medium'>Location:</p>
						<p className='text-gray-900 font-medium'>{store?.location}</p>
					</div>
				</div>
				{/* content */}
				<div className='w-full lg:w-3/4 h-full overflow-y-auto bg-gray-100 ml-5 px-10 '>
					<div className='flex items-center mb-4 '>
						<img
							src={store?.image}
							alt='Logo'
							className='w-full h-48 object-cover mr-2 rounded-lg shadow-md'
						/>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{products && products.length > 0 ? (
							products.map((product) => <ProductCard key={product._id} product={product} />)
						) : (
							<div>No products found.</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopDetails;
