import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Live from './live/live';

function Main() {
	return (
		<div className="root">
			<Header />
			<Intro />
            <Live />
		</div>
	);
}
export default Main;