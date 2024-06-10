import axios from 'axios';

export default async function getFlights() {
    try {
        const response = await axios.get('http://localhost:8080/vuelos')
        console.log(response.data);
        return response.data;
    } catch (error){
        console.error(error);   
    }
}