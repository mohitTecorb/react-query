import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const fetchSuperheroes = async () => {
  const response = await axios.get('http://localhost:4000/superheroes');
  return response.data;
};
const fetchVilen = async () => {
  const response = await axios.get('http://localhost:4000/vilen');
  return response.data;
};
const StaticParallerQuery = () => {

  const { isLoading:heroIsLoading, error:heroError, data:herosData, isError:heroIsError } = useQuery({ // refetch is used to fetch the data when onClick fuction call
    queryKey: ['super-heroes'],
    queryFn: fetchSuperheroes,
  })
  const { isLoading:vilenIsLoading, error:vilenError, data:vilensData, isError:vilenIsError } = useQuery({ // refetch is used to fetch the data when onClick fuction call
    queryKey: ['super-heroes'],
    queryFn: fetchVilen,
  })

  if (heroIsLoading) {
    return <div>Loading...</div>;
  }

  
  return (
    <div>StaticParallerQuery</div>
  )
}

export default StaticParallerQuery