import { useForm } from 'react-hook-form';
import { IProduct } from '../../../types';

interface EditProductModalProps {
	onClose: () => void;
	onUpdateProduct: (product: IProduct) => void;
	product: IProduct;
}

const UpdateProduct = ({ onClose, onUpdateProduct, product }: EditProductModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProduct>({
		defaultValues: {
			name: product?.name || '',
			description: product?.description || '',
			price: product?.price || 0,
			image: product?.image || '',
			category: product?.category || '',
		},
	});

	const onSubmit = (data: IProduct) => {
		onUpdateProduct(data);
		// onClose();
	};
	return (
		<div
			className='fixed z-10 inset-0 overflow-y-auto'
			aria-labelledby='modal-title'
			role='dialog'
			aria-modal='true'>
			<div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
				<div
					className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
					aria-hidden='true'></div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
						<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
							<h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
								Edit Product
							</h3>
							<div className='mt-4'>
								<div className='mb-4'>
									<label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
										Name
									</label>
									<input
										type='text'
										{...register('name', {
											required: 'This field is required',
										})}
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
											errors.name ? 'border-red-500' : ''
										}`}
									/>
									{errors.name && (
										<p className='text-red-500 text-xs italic'>{errors.name.message}</p>
									)}
								</div>
								<div className='mb-4'>
									<label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
										Description
									</label>
									<input
										type='text'
										{...register('description', {
											required: 'This field is required',
										})}
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
											errors.description ? 'border-red-500' : ''
										}`}
									/>
									{errors.description && (
										<p className='text-red-500 text-xs italic'>{errors.description.message}</p>
									)}
								</div>
								<div className='mb-4'>
									<label htmlFor='price' className='block text-gray-700 font-bold mb-2'>
										price
									</label>
									<input
										type='number'
										{...register('price', {
											required: 'This field is required',
										})}
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
											errors.price ? 'border-red-500' : ''
										}`}
									/>
									{errors.price && (
										<p className='text-red-500 text-xs italic'>{errors.price.message}</p>
									)}
								</div>
								<div className='mb-4'>
									<label htmlFor='image' className='block text-gray-700 font-bold mb-2'>
										image
									</label>
									<input
										type='text'
										{...register('image')}
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
											errors.image ? 'border-red-500' : ''
										}`}
									/>
									{errors.image && (
										<p className='text-red-500 text-xs italic'>{errors.image.message}</p>
									)}
								</div>
								<div className='mb-4'>
									<label htmlFor='category' className='block text-gray-700 font-bold mb-2'>
										category
									</label>
									<input
										type='text'
										{...register('category', {
											required: 'This field is required',
										})}
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
											errors.category ? 'border-red-500' : ''
										}`}
									/>
									{errors.category && (
										<p className='text-red-500 text-xs italic'>{errors.category.message}</p>
									)}
								</div>
							</div>
						</div>
						<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
							<button
								type='submit'
								className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'>
								Update
							</button>
							<button
								type='button'
								onClick={() => onClose()}
								className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>
								Cancel
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateProduct;
