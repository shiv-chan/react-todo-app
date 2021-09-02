import React from 'react';
import { useSelector } from 'react-redux';
import Header from './app/Header';
import Todo from './features/todo/Todo';

function App() {
	const isLightMode = useSelector((state) => state.isLightMode);

	return (
		<div className={`container${isLightMode ? '' : ' dark'}`}>
			<section className="todo-wrapper">
				<Header />
				<Todo />
			</section>
		</div>
	);
}

export default App;
