import React from 'react';
import Header from './app/Header';
import Todo from './features/todo/Todo';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Todo />
		</React.Fragment>
	);
}

export default App;
