import { Outlet } from 'react-router-dom';
import Footer from '../components/templates/Footer';
import Header from '../components/templates/Header';

const Main = () => {
	return (
		<div>
			<Header />
			<div>
				<Outlet />
			</div>
			{/* <div>
        <Chatbot />
      </div> */}

			<Footer />
		</div>
	);
};

export default Main;
