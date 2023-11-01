'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios';
const fetchSuperheroes = async () => {
    const response = await axios.get('http://localhost:4000/superheroes');
    return response.data;
};

const CustomeQueryHook = () => {

    const customeHook = useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperheroes,
    })
    return customeHook;
}

export default CustomeQueryHook