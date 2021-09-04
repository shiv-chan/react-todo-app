import React from 'react';
import { useSelector } from 'react-redux';
import Header from './app/Header';
import Todo from './features/todo/Todo';
import Footer from './app/Footer';

function App() {
	const isLightMode = useSelector((state) => state.isLightMode);

	return (
		<div className={`container${isLightMode ? '' : ' dark'}`}>
			<section className="todo-wrapper">
				<Header />
				<Todo />
				<Footer />
			</section>
		</div>
	);
}

export default App;
