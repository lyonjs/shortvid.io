import React from 'react';

import {Balloon1} from './balloons/Balloon1';
import {Balloon2} from './balloons/Balloon2';
import {Balloon3} from './balloons/Balloon3';
import {Balloon4} from './balloons/Balloon4';
import {Balloon5} from './balloons/Balloon5';

export const Balloons: React.FC = () => {
	return (
		<>
			<Balloon5 />
			<Balloon1 />
			<Balloon2 />
			<Balloon4 />
			<Balloon3 />
		</>
	);
};

export default Balloons;
