import React from 'react';
import { Header } from './layout/Header.jsx';
import { Main } from './layout/Main.jsx';
import { Footer } from './layout/Footer.jsx';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Main />
			<Footer />
		</React.Fragment>
	);
}

export default App;
