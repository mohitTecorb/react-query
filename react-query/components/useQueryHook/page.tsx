'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const CustomeQueryParamsHook = (queryId: any) => {

    const fetchSuperheroes = async () => {
        const response = await axios.get(`http://localhost:4000/superheroes/${queryId}`);
        return response.data;
    };
    const customeHook = useQuery({
        queryKey: ['super-heroes-details'],
        queryFn: fetchSuperheroes,
    })
    return customeHook;
}

export default CustomeQueryParamsHook