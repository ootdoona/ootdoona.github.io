import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Live from './live/live';
import Misc from './misc/misc';

export function MainKo() {
	return (
		<div className="root">
			<Header lang="ko" />
			<Intro lang="ko" />
            <Live lang="ko" />
            <Misc lang="ko" />
		</div>
	);
}

export function MainEn() {
	return (
		<div className="root">
			<Header lang="en"/>
			<Intro lang="en" />
            <Live lang="en" />
            <Misc lang="en" />
		</div>
	);
}