import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'a70f14f1a0f84d2bbc31e2a23866c234',
	},
});
