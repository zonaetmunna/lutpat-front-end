import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { store } from './app/store';
import { routes } from './routes/routes';
import Loading from './view/components/atoms/Loading';

function App() {
	return (
		<Provider store={store}>
			<Suspense fallback={<Loading />}>
				<Toaster />
				<RouterProvider router={routes} />
			</Suspense>
		</Provider>
	);
}

export default App;
