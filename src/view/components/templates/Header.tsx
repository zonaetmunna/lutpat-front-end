import { useState } from 'react';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/attachment_109048124.png';
import { RootState } from '../../../app/store';
import { logOut } from '../../../features/auth/authSlice';

const Header = () => {
	const [showLinks, setShowLinks] = useState(false);

	// user from redux
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	console.log(user);
	console.log(user?._id);
	const { cart } = useSelector((state: RootState) => state.cart);
	const { wishlist } = useSelector((state: RootState) => state.wishlist);

	const handleButtonClick = () => {
		setShowLinks(!showLinks); // Toggle the visibility of links
	};

	const handleLogOut = () => {
		dispatch(logOut());
	};

	return (
		<div className='py-3 px-3 bg-stone-50 border-b border-white-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16 items-center'>
					{/* Logo */}
					<div className='flex-shrink-0 flex items-center'>
						<Link to='/'>
							<img src={logo} alt='' className='h-8 w-auto' />
						</Link>
					</div>
					{/* Search Input and Navigation Links */}
					<div className='hidden sm:ml-6 sm:flex sm:items-center'>
						<Link to='/shop' className='mx-2 font-bold text-yellow-500'>
							Shop
						</Link>
						<Link to='/offer' className='mx-2 font-bold text-yellow-500'>
							Offer
						</Link>
						<Link to='/faq' className='mx-2 font-bold text-yellow-500'>
							Faq
						</Link>
						<Link to='/contact' className='mx-2 font-bold text-yellow-500'>
							Contact
						</Link>
					</div>
					{/* User Actions */}
					<div className='flex justify-around items-center'>
						<Link to='/wishlist' className='mx-2'>
							<div className='relative'>
								<BsHeart size={20} className='text-yellow-500' />
								{wishlist.length > 0 && (
									<span className='absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center'>
										{wishlist.length}
									</span>
								)}
							</div>
						</Link>
						<Link to='/cart' className='mx-2'>
							<div className='relative'>
								<BsCart3 size={20} className='text-yellow-500' />
								{cart.length > 0 && (
									<span className='absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center'>
										{cart.length}
									</span>
								)}
							</div>
						</Link>
						{user?.role === 'admin' && (
							<Link to='/admin-dashboard' className='mx-2'>
								Admin Dashboard
							</Link>
						)}

						{user?.role === 'seller' && (
							<Link to='/seller-dashboard' className='mx-2'>
								Seller Dashboard
							</Link>
						)}

						{user?.role === 'user' && (
							<div className='relative'>
								<button
									onClick={handleButtonClick}
									className='mx-2 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none'>
									<VscAccount size={20} />
									{showLinks && (
										<div className='absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg'>
											<Link
												to='/profile'
												className='block px-4 py-2 text-gray-600 hover:text-gray-800'>
												Profile
											</Link>
											<Link
												to='/settings'
												className='block px-4 py-2 text-gray-600 hover:text-gray-800'>
												Settings
											</Link>
											<button
												className='block px-4 py-2 text-gray-600 hover:text-gray-800'
												onClick={handleLogOut}>
												Logout
											</button>
										</div>
									)}
								</button>
							</div>
						)}

						{!user?.email && (
							<Link to='/login' className='mx-2'>
								Login
							</Link>
						)}

						{(!user || (user.role !== 'admin' && user.role !== 'seller')) && (
							<Link
								to='/seller-registration'
								className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
								Become a Seller
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
