import React, { useState, useEffect } from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Archive from './archive/archive';
import Live from './live/live';
import Misc from './misc/misc';

export function MainKo() {
  const lang = "ko";
  const version = 3;
  const navPoint = "now";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Intro lang={lang} version={version}/>
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={5} whiteBg={false}/>
		</div>
	);
}

export function MainEn() {
  const lang = "en"
  const version = 3;
  const navPoint = "now";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Intro lang={lang} version={version}/>
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={5} whiteBg={false}/>
		</div>
	);
}

export function PreviousKo() {
  const lang = "ko";
  const version = 3;
  const navPoint = "previous";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Archive lang={lang} act={1} version={version} whiteBg={false}/>
      <Misc lang={lang} act={3} whiteBg={false}/>
      <Archive lang={lang} act={2} version={version} whiteBg={false}/>
      <Misc lang={lang} act={4} whiteBg={false}/>
		</div>
	);
}

export function PreviousEn() {
  const lang = "en"
  const version = 3;
  const navPoint = "previous";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Archive lang={lang} act={1} version={version} whiteBg={false}/>
      <Misc lang={lang} act={3} whiteBg={false}/>
      <Archive lang={lang} act={2} version={version} whiteBg={false}/>
      <Misc lang={lang} act={4} whiteBg={false}/>
		</div>
	);
}

export function DevKO1() {
  const lang = "ko"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "now";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Intro lang={lang} version={version}/>
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={5} whiteBg={false}/>
		</div>
	);
}
export function DevKO2() {
  const lang = "ko"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "previous";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Archive lang={lang} act={1} version={version} whiteBg={false}/>
      <Misc lang={lang} act={3} whiteBg={false}/>
      <Archive lang={lang} act={2} version={version} whiteBg={false}/>
      <Misc lang={lang} act={4} whiteBg={false}/>
		</div>
	);
}
export function DevEN1() {
  const lang = "en"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "now";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Intro lang={lang} version={version}/>
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={5} whiteBg={false}/>
		</div>
	);
}
export function DevEN2() {
  const lang = "en"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "previous";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Archive lang={lang} act={1} version={version} whiteBg={false}/>
      <Misc lang={lang} act={3} whiteBg={false}/>
      <Archive lang={lang} act={2} version={version} whiteBg={false}/>
      <Misc lang={lang} act={4} whiteBg={false}/>
		</div>
	);
}