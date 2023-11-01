'use client'
import { UseQueryResult, hydrate, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
interface Superhero {
    id: number;
    name: string;
    alterEgo: string;
}

const fetchSuperheroes = async () => {
    const response = await axios.get('http://localhost:4000/superheroes');
    return response.data;
};
const Superheroes = () => {

    const queryClient = useQueryClient();
    hydrate(queryClient, fetchSuperheroes);

    const { isLoading, error, data, isError, isFetching, refetch } = useQuery<Superhero[], Error>({ // refetch is used to fetch the data when onClick fuction call
        queryKey: ['super-heroes'],
        queryFn: fetchSuperheroes,
        // staleTime:5000, //  this option specifies how long data can remain in the cache before it's considered stale.
        // refetchOnMount:true, // it is used for fetch the again when you come back from any other page you can use ( true , false and "always").
        // refetchOnWindowFocus:true, // it is used to update the data of the DOM if UI/ data change 
        // refetchInterval:2000, // it's used to fetch the data from the API at given interval
        // refetchIntervalInBackground: true, //  by this key you can fetch the data in the given interval with window focus.   
        // enabled: false, // it is very useful for fetch the data onMount by give the value ( true, false),

        //onSuccess: This callback runs when the query successfully fetches data. In the onSuccess callback, you can perform actions such as updating local state, dispatching events, or showing notifications based on the received data.

        // onError: This callback runs when the query encounters an error. You can use the onError callback to handle error-specific behavior, like displaying error messages or logging errors.
        // onSuccess: (data: any) => {
        //     console.log('Query succeeded!', data);
        // },
        // onError: (error: any) => {  
        //     console.error('Query failed!', error);
        // },


        //********* You can use select to modify or filter the data comming from API by select  *********************** */
        // select: (data) => {
        //     const modifyDataArray = data?.map((hero: Superhero) => hero.name)
        //     return modifyDataArray;
        // }

        
    })

    if (isLoading || isFetching) { // isFetching is used when "refetch" is called on onClick function.
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <ol>
                {/* {data?.map((items: any) => {
                    return (
                        <li key={items.name}>{items?.name}</li>
                    )
                })} */}

                {data?.map((item: any) => {
                    return <div key={item}>{item}</div>
                })}
            </ol>
            {/* <button onClick={()=>{refetch()}}>Fetch data while click on function </button> */}
            <h1>Super Heroes</h1>
            <h1>hello this is </h1>
        </div>
    )
}
export default Superheroes