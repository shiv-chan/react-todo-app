import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	add,
	toggleCheckbox,
	remove,
	clearCompleted,
	changeOrder,
} from './todoSlice';
import { BsCircle } from 'react-icons/all';
import iconCross from '../../images/icon-cross.svg';
import { useMediaQuery } from 'react-responsive';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Todo() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [allTodos, setAllTodos] = useState([]);
	const [todoTitle, setTodoTitle] = useState('');
	const [checked, setChecked] = useState([]);
	const [showActive, setShowActive] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);

	const isDesktop = useMediaQuery({
		query: '(min-width: 1440px)',
	});

	// re-render when the global state changes
	useEffect(() => {
		setAllTodos(todos);
		setChecked(todos);
		if (showActive) {
			showActiveTodos();
		} else if (showCompleted) {
			showCompletedTodos();
		}
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

	// sort todos
	const showAllTodos = () => {
		setAllTodos(todos);
		setShowActive(false);
		setShowCompleted(false);
	};

	const showActiveTodos = () => {
		const activeTodos = todos.filter((todo) => todo.isDone === false);
		setAllTodos(activeTodos);
		setShowActive(true);
		setShowCompleted(false);
	};

	const showCompletedTodos = () => {
		const completedTodos = todos.filter((todo) => todo.isDone === true);
		setAllTodos(completedTodos);
		setShowActive(false);
		setShowCompleted(true);
	};

	// count active todos
	const countActiveTodos = () => {
		const activeTodos = todos.filter((todo) => todo.isDone === false);
		return activeTodos.length;
	};

	const onDragEndHandler = (result) => {
		if (!result.destination) return;
		const prevIndex = result.source.index;
		const newIndex = result.destination.index;
		dispatch(changeOrder({ prevIndex, newIndex }));
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
				<DragDropContext onDragEnd={onDragEndHandler}>
					<Droppable droppableId="todos">
						{(provided) => (
							<div
								className="drag-n-drop-area"
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{allTodos.map((todo, index) => (
									<Draggable key={todo.id} draggableId={todo.id} index={index}>
										{(provided) => (
											<div
												key={todo.id}
												data-todo-id={todo.id}
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												onMouseOver={(e) =>
													e.currentTarget.children[3].classList.add('show')
												}
												onMouseLeave={(e) =>
													e.currentTarget.children[3].classList.remove('show')
												}
												onTouchStart={(e) =>
													e.currentTarget.children[3].classList.toggle('show')
												}
												onTouchCancel={(e) =>
													e.currentTarget.children[3].classList.remove('show')
												}
											>
												<input
													type="checkbox"
													name="todo-check"
													id={todo.id}
													checked={todo.isDone}
													onChange={checkboxHandler}
													onClick={(e) => {
														dispatch(
															toggleCheckbox({
																id: e.currentTarget.getAttribute('id'),
															})
														);
													}}
												/>
												<span
													className={`checkmark ${
														todo.isDone ? 'checked' : ''
													}`}
												></span>
												<label
													htmlFor={todo.id}
													className={`${todo.isDone ? 'strike-through' : ''}`}
												>
													{todo.title}
												</label>
												<img
													src={iconCross}
													alt="cross-icon"
													onClick={(e) =>
														dispatch(
															remove({
																id: e.currentTarget.parentElement.dataset
																	.todoId,
															})
														)
													}
												/>
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
				{isDesktop ? (
					<div className="todos-footer">
						<p className="number-of-todos">
							<span>{countActiveTodos()}</span> items left
						</p>
						<section className="todo-items-sort">
							<button
								onClick={showAllTodos}
								className={`${!showActive && !showCompleted ? 'active' : ''}`}
							>
								All
							</button>
							<button
								onClick={showActiveTodos}
								className={`${showActive ? 'active' : ''}`}
							>
								Active
							</button>
							<button
								onClick={showCompletedTodos}
								className={`${showCompleted ? 'active' : ''}`}
							>
								Completed
							</button>
						</section>
						<button onClick={() => dispatch(clearCompleted())}>
							Clear Completed
						</button>
					</div>
				) : (
					<div className="todos-footer">
						<p className="number-of-todos">
							<span>{countActiveTodos()}</span> items left
						</p>
						<button onClick={() => dispatch(clearCompleted())}>
							Clear Completed
						</button>
					</div>
				)}
			</section>
			<section className="todo-items-sort">
				<button
					onClick={showAllTodos}
					className={`${!showActive && !showCompleted ? 'active' : ''}`}
				>
					All
				</button>
				<button
					onClick={showActiveTodos}
					className={`${showActive ? 'active' : ''}`}
				>
					Active
				</button>
				<button
					onClick={showCompletedTodos}
					className={`${showCompleted ? 'active' : ''}`}
				>
					Completed
				</button>
			</section>
			<p>Drag and drop to reorder list</p>
		</main>
	);
}
