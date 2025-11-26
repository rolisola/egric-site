import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import AppRoutes from './routes/routes';
import Footer from './components/footer/footer';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<AppRoutes />
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App
