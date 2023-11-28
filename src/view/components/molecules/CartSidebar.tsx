import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import CardShow from './CardShow';

interface CartSidebarProps {
	isOpen: boolean;
	onClose: () => void;
	handleCartOpen: () => void;
	ref: React.RefObject<HTMLDivElement>;
}
const CartSidebar = ({ isOpen, onClose, handleCartOpen, ref }: CartSidebarProps) => {
	const { cart, subtotal } = useSelector((state: RootState) => state.cart);

	const handleCardShow = () => {
		handleCartOpen();
	};
	return (
		<div className={`flex justify-end`}>
			<div className='fixed top-0 right-0 flex bg-gray-100 p-4 rounded-md shadow-lg'>
				<div className='flex flex-col items-end space-y-4'>
					<div>
						<p>{cart.length}</p>
						<p>{subtotal}</p>
					</div>
					<button
						onClick={handleCardShow}
						className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium'>
						Show Cart
					</button>
					<CardShow isOpen={isOpen} cart={cart} onClose={onClose} ref={ref} />
				</div>
			</div>
		</div>
	);
};

export default CartSidebar;
