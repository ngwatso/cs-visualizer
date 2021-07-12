/**
 * @prettier
 */

import './App.css';
import CodeInput from './components/CodeInput';
import Console from './components/Console';
import Visualizer from './components/Visualizer';

function App() {
	return (
		<div className="App">
			<h1>CS Visualizer</h1>
			<div className="main-body">
				<div className="code-input">
					<CodeInput />
				</div>
				<div className="visualizer-console">
					<div className="visualizer">
						<Visualizer />
					</div>
					<div className="console">
						<Console />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
