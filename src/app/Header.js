import React from 'react';
import iconMoon from '../images/icon-moon.svg';
import iconSun from '../images/icon-sun.svg';

export default function Header() {
	return (
		<header>
			<h1>TODO</h1>
			<img src={iconMoon} alt="mode-icon" />
		</header>
	);
}
