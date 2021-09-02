import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, toggleCheckbox, remove, clearCompleted } from './todoSlice';
import { BsCircle } from 'react-icons/all';
import iconCross from '../../images/icon-cross.svg';

export default function Todo() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [allTodos, setAllTodos] = useState([]);
	const [todoTitle, setTodoTitle] = useState('');
	const [checked, setChecked] = useState([]);

	// re-render when the global state changes
	useEffect(() => {
		setAllTodos(todos);
		setChecked(todos);
	}, [todos]);

	// add a new todo when hitting the enter key
	const addTodoHandler = (e) => {
		if (e.code === 'Enter') {
			dispatch(add(todoTitle));
			setTodoTitle('');
		}
	};

	// checkbox - form control
	const checkboxHandler = (e) => {
		const targetId = e.currentTarget.getAttribute('id');
		const updatedCheckedState = checked.map((item) =>
			item.id === targetId
				? {
						id: item.id,
						title: item.title,
						isDone: !item.isDone,
				  }
				: item
		);
		setChecked(updatedCheckedState);
	};

	return (
		<main>
			<section className="todo-input">
				<input
					type="text"
					name="title"
					id="title"
					placeholder="Create a new todo..."
					value={todoTitle}
					onChange={(e) => setTodoTitle(e.currentTarget.value)}
					onKeyUp={addTodoHandler}
				/>
				<BsCircle />
			</section>
			<section className="todo-items-list">
				{allTodos.map((todo) => (
					<div key={todo.id} data-todo-id={todo.id}>
						<input
							type="checkbox"
							name="todo-check"
							id={todo.id}
							checked={todo.isDone ? true : false}
							onChange={checkboxHandler}
							onClick={(e) => {
								dispatch(
									toggleCheckbox({ id: e.currentTarget.getAttribute('id') })
								);
							}}
						/>
						<label htmlFor={todo.id}>{todo.title}</label>
						<img
							src={iconCross}
							alt="cross-icon"
							onClick={(e) =>
								dispatch(
									remove({ id: e.currentTarget.parentElement.dataset.todoId })
								)
							}
						/>
					</div>
				))}
				<div className="todos-footer">
					<p className="number-of-todos">
						<span>{allTodos.length}</span> items left
					</p>
					<button onClick={() => dispatch(clearCompleted())}>
						Clear Completed
					</button>
				</div>
			</section>
			<section className="todo-items-sort">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</section>
			<p>Drag and drop to reorder list</p>
		</main>
	);
}
