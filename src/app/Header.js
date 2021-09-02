import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import iconMoon from '../images/icon-moon.svg';
import iconSun from '../images/icon-sun.svg';
import { toggleMode } from '../features/mode/modeSlice';

export default function Header() {
	const isLightMode = useSelector((state) => state.isLightMode);
	const dispatch = useDispatch();

	return (
		<header>
			<h1>TODO</h1>
			{isLightMode ? (
				<img
					src={iconMoon}
					alt="mode-icon"
					onClick={() => dispatch(toggleMode())}
				/>
			) : (
				<img
					src={iconSun}
					alt="mode-icon"
					onClick={() => dispatch(toggleMode())}
				/>
			)}
		</header>
	);
}
