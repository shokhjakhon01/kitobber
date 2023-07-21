import { Route, Routes } from 'react-router-dom';

import { Admin, BookDetail, Home, Login, Personal, Register } from './pages';
import ProfilSettings from './pages/profil-settings';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} index />
				<Route path='/admin/almashaman' element={<Admin />} />
				<Route path='/book-detail/:id' element={<BookDetail />} />
				<Route path='/personal-books' element={<Personal />} />
				<Route path='/admin/profile-settings' element={<ProfilSettings />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
