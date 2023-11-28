import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { usePostOrderMutation } from '../../../features/order/orderApi';
import { PaymentOrder } from '../../../types';

interface StripePaymentProps {
	paymentMethod: string;
}

const StripePayment = ({ paymentMethod: paymentStripe }: StripePaymentProps) => {
	const stripe = useStripe();
	const elements = useElements();

	const { user } = useSelector((state: RootState) => state.auth);
	console.log(user?._id);
	const { cart, total, billingAddress } = useSelector((state: RootState) => state.cart);
	console.log();

	const [cardError, setCardError] = useState('');
	const [success, setSuccess] = useState('');
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');
	const [clientSecret, setClientSecret] = useState('');

	/*  const [postPayment, { data }] = usePostPaymentMutation();
  // postPayment(total.toFixed(0)); */
	// const clientSecret = data.client_secret;

	const [postOrder, { isError, error, isSuccess }] = usePostOrderMutation();

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch(`${process.env.REACT_APP_API_BASE_URL}/create-payment-intent`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ total }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setClientSecret(data.clientSecret);
			});
	}, [total]);

	const handlePayment = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log(error);
			setCardError(error.message || '');
		} else {
			setCardError('');
		}

		setSuccess('');
		setProcessing(true);

		const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					name: user?.name,
					email: user?.email,
				},
			},
		});

		if (confirmError) {
			console.log(confirmError);
			setCardError(confirmError.message ?? '');
			return;
		}

		if (paymentIntent.status === 'succeeded') {
			console.log('card info', card);
			// store payment info in the database
			const paymentOrder: PaymentOrder = {
				userId: user?._id,
				products: cart.map((c) => {
					if (!c._id || !c.quantity) {
						throw new Error('Invalid cart item');
					}
					return {
						productId: c._id,
						quantity: c.quantity,
					};
				}),
				totalAmount: total,
				paymentInfo: {
					method: paymentStripe,
					stripePayment: {
						transactionId: paymentIntent.id,
						status: success,
					},
					/* bkashPayment: {
            transactionId: "",
            status: "",
          }, */
				},
				billingAddress,
			};
			postOrder(paymentOrder);
			setSuccess('Congrats! your payment completed');
			setTransactionId(paymentIntent.id);
		}
		setProcessing(false);
	};

	/* order data making
  
  user._id
  product._id
  billingAddress
  status
  totalAmount
  paymentInfo{
    payment-method
    paymentIntentId
    status
  }
  */

	if (isError) {
		<p>database error</p>;
	}
	return (
		<div>
			<form onSubmit={handlePayment}>
				<div className='mb-4'>
					<label htmlFor='cardElement' className='block text-gray-700 font-bold mb-2'>
						Card Details
					</label>
					<CardElement
						id='cardElement'
						options={{
							style: {
								base: {
									fontSize: '16px',
									color: '#424770',
									'::placeholder': {
										color: '#aab7c4',
									},
								},
								invalid: {
									color: '#9e2146',
								},
							},
						}}
					/>
				</div>
				<button
					className={`text-sm mt-4 px-4 py-2 rounded bg-blue-500 text-white ${
						!stripe || !clientSecret || processing || user?._id
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-blue-700'
					}`}
					type='submit'
					disabled={!stripe || !clientSecret || processing}>
					Pay
				</button>
			</form>
			<p className='text-red-500'>{cardError}</p>
			{success && (
				<div>
					<p className='text-green-500'>{success}</p>
					<p>
						Your transactionId: <span className='font-bold'>{transactionId}</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default StripePayment;
