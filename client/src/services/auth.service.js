import axios from './api';

const AuthService = {
	userRegister: async body => {
		const responce = await axios.post('/register', body);
		return responce.data;
	},
};

export default AuthService;
