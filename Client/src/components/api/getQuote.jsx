import axios from 'axios'

const getQuote = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/quotes');
        return response.data
    } catch(err) {
        console.log('get request err\n', err.message);
        return null;
    }
}

export default getQuote;
