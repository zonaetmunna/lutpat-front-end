import { useState } from 'react';
import {
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
	FaChevronLeft,
	FaChevronRight,
	FaEdit,
	FaEye,
	FaSearch,
	FaTrash,
} from 'react-icons/fa';
import {
	useAddStoreMutation,
	useDeleteStoreMutation,
	useGetStoreQuery,
	useUpdateStoreMutation,
} from '../../../../features/store/storeApi';
import { Store } from '../../../../types';
import DeleteModal from '../../../components/dashboard/shop/DeleteModal';
import SingleShop from '../../../components/dashboard/shop/SingleShop';
import UpdateModal from '../../../components/dashboard/shop/UpdateModal';
import AddStoreModal from '../../../components/organisms/AddStoreModal';

// types give store information for server

const ShopList = () => {
	const [searchText, setSearchText] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	// get query
	const { data, isLoading } = useGetStoreQuery({
		search: searchText,
		page: currentPage,
		limit: itemsPerPage,
	});
	console.log(data);
	const stores = data?.data;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const visibleStores = stores?.slice(startIndex, endIndex);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const totalPages = Math.ceil((stores?.length || 0) / itemsPerPage);

	// handle update, delete,view, add shop

	const [selectedShop, setSelectedShop] = useState<Store | null>(null);
	const [isAddShopModalOpen, setIsAddShopModalOpen] = useState<boolean>(false);
	const [isSingleShopModalOpen, setIsSingleShopModalOpen] = useState<boolean>(false);
	const [isUpdateShopModalOpen, setIsUpdateShopModalOpen] = useState<boolean>(false);
	const [isDeleteShopModalOpen, setIsDeleteShopModalOpen] = useState<boolean>(false);

	const [addStore] = useAddStoreMutation();
	const [deleteStore] = useDeleteStoreMutation();
	const [updateStore] = useUpdateStoreMutation();

	const handleAddShop = (store: Store) => {
		addStore(store);
	};

	const handleUpdateShop = (store: Store) => {
		updateStore(store);
	};

	const handleDeleteShop = (id: string) => {
		deleteStore(id);
	};

	const handleShopClick = (store: Store) => {
		setSelectedShop(store);
		setIsSingleShopModalOpen(true);
	};

	const handleUpdateClick = (store: Store) => {
		setSelectedShop(store);
		setIsUpdateShopModalOpen(true);
	};

	const handleDeleteClick = (store: Store) => {
		setSelectedShop(store);
		setIsDeleteShopModalOpen(true);
	};

	return (
		<div className='container mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>Shop List</h1>
			{/* input and button section */}
			<div className='flex justify-between items-center my-5'>
				{/* input field */}
				<div className='relative flex items-center bg-white'>
					<input
						type='text'
						placeholder='Search brands'
						className='py-2 pl-10 pr-4 block w-full rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none  focus:border-gray-500'
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<span className='absolute left-3 top-2'>
						<FaSearch className='text-gray-600 w-5 h-5' />
					</span>
				</div>
				{/* add brand */}
				<div className='w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex items-center '>
					<button
						className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => setIsAddShopModalOpen(true)}>
						Add Store
					</button>
				</div>
			</div>

			{/* table */}
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<table className='table-auto w-full'>
						<thead>
							<tr>
								<th className='px-4 py-2'>Name</th>
								<th className='px-4 py-2'>Email</th>

								<th className='px-4 py-2'>Location</th>
								<th className='px-4 py-2'>status</th>
								<th className='px-4 py-2'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{visibleStores?.map((store) => (
								<tr key={store._id}>
									<td className='border px-4 py-2'>{store.name}</td>
									<td className='border px-4 py-2'>{store.email}</td>

									<td className='border px-4 py-2'>{store.location}</td>
									<td className='border px-4 py-2'>{store.status}</td>
									<td className='border px-4 py-2'>
										<button
											className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
											onClick={() => handleShopClick(store)}>
											<FaEye />
										</button>
										<button
											className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2'
											onClick={() => handleUpdateClick(store)}>
											<FaEdit />
										</button>
										<button
											className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
											onClick={() => handleDeleteClick(store)}>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}

			{/* pagination */}
			<nav className='flex justify-center m-10' aria-label='Pagination'>
				<ul className='inline-flex'>
					<li>
						<button
							onClick={() => handlePageChange(1)}
							disabled={currentPage === 1}
							className={`${
								currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
							} py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}>
							<span className='sr-only'>First page</span>
							<FaAngleDoubleLeft className='h-5 w-5' aria-hidden='true' />
						</button>
					</li>
					<li>
						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className={`${
								currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
							} ml-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}>
							<span className='sr-only'>Previous page</span>
							<FaChevronLeft className='h-5 w-5' aria-hidden='true' />
						</button>
					</li>
					<li>
						<span className='mx-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700'>{`${currentPage} of ${totalPages}`}</span>
					</li>
					<li>
						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className={`${
								currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
							} mr-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}>
							<span className='sr-only'>Next page</span>
							<FaChevronRight className='h-5 w-5' aria-hidden='true' />
						</button>
					</li>
					<li>
						<button
							onClick={() => handlePageChange(totalPages)}
							disabled={currentPage === totalPages}
							className={`${
								currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
							} py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}>
							<span className='sr-only'>Last page</span>
							<FaAngleDoubleRight className='h-5 w-5' aria-hidden='true' />
						</button>
					</li>
				</ul>
			</nav>
			{/* view modal */}

			{isSingleShopModalOpen && (
				<SingleShop onClose={() => setIsSingleShopModalOpen(false)} shop={selectedShop} />
			)}
			{/* add brand modal */}
			{isAddShopModalOpen && (
				<AddStoreModal onClose={() => setIsAddShopModalOpen(false)} onAddShop={handleAddShop} />
			)}
			{/* update and delete modal */}
			{selectedShop && isUpdateShopModalOpen && (
				<UpdateModal
					onClose={() => setIsUpdateShopModalOpen(false)}
					onUpdateShop={handleUpdateShop}
					store={selectedShop}
				/>
			)}
			{selectedShop && isDeleteShopModalOpen && (
				<DeleteModal
					onClose={() => setIsDeleteShopModalOpen(false)}
					onDeleteShop={handleDeleteShop}
					store={selectedShop}
				/>
			)}
		</div>
	);
};

export default ShopList;
