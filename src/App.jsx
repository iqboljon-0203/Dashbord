import './App.scss';
import {Switch,Route} from 'react-router-dom';
///Pages
import Home from './pages/Home/Home';
////Components
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
 	<div className='app'>
		<Sidebar />
		<div className='app__content'>
			<Switch>
				<Route path="/">
					<Home/>
				</Route>
				<Route path="/discount" exact>
					/Discount
				</Route>
				<Route path="/graph" exact>
					/Graph
				</Route>
				<Route path="/order" exact>
					/Order
				</Route>
				<Route path="/notification" exact>
					/Notification
				</Route>
				<Route path="/settings" exact>
					/Settings
				</Route>
			</Switch>
		</div>
  	</div>
  )
}

export default App;
