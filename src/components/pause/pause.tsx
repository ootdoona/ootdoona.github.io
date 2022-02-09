import React from 'react';
import './pause.css';
import { title, titleEn } from '../../contents';

interface PauseProps {
}

function Pause(props: PauseProps) {
  return (
		<section className="section-pause">
				<div className="wrapper">
          <div>
            {title.text}
          </div>
          <div>
            {titleEn.text}
          </div>
				</div>
		</section>
	);
}
export default Pause;