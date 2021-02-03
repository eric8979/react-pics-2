import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID PDG1Duf6AQdRQVoKi9HJjtVRkLJMhEt3-W5isSRBUTo'
	}
});
