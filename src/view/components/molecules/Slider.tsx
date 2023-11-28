import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useGetProductsQuery } from '../../../features/product/productApi';
import { IProduct } from '../../../types';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
	const { data, error, isError, isLoading } = useGetProductsQuery({});
	const products = data?.data;

	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={2}
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 3000 }} // Set the autoplay delay in milliseconds
			className='p-10 mb-5'>
			{products?.map((product: IProduct) => (
				<SwiperSlide key={product._id}>
					<div className='bg-white p-4 rounded-lg shadow-lg'>
						<img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
						<h3 className='mt-2 font-medium text-gray-900'>{product.name}</h3>
						<p className='mt-1 text-gray-700'>{product.price}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
