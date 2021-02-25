import { store } from './stateManagement/store';
import { Provider } from 'react-redux';
import { Dashboard } from './components/views/Dashboard';

function App() {
	return (
		<Provider store={store}>
			<Dashboard />
		</Provider>
	);
}

export default App;
