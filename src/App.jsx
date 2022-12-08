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
				<Route path="/" exact>
					<Home/>
				</Route>
				<Route path="/discount">
					/Discount
				</Route>
				<Route path="/graph">
					/Graph
				</Route>
				<Route path="/order">
					/Order
				</Route>
				<Route path="/notification">
					/Notification
				</Route>
				<Route path="/settings">
					/Settings
				</Route>
			</Switch>
		</div>
  	</div>
  )
}

export default App;
