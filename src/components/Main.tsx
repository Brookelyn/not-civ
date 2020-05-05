import * as React from 'react';
import Game from './Game';
import Log from './Log';

const Main: React.FunctionComponent = (): JSX.Element => {
	const [view, changeView] = React.useState('game');
	const newView = view === 'game' ? 'log' : 'game';

	return (
		<div>
			<button onClick={() => changeView(newView)}>
				Change view
			</button>

			{view === 'game' && <Game />}
			{view === 'log' && <Log />}
			
		</div>
	);
}

export default Main;
