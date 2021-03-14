import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Live from './live/live';
import Misc from './misc/misc';

import './main.css';

function Main() {
	return (
		<div className="root">
			<Header />
			<Intro />
            <Live />
            <Misc />
		</div>
	);
}
export default Main;