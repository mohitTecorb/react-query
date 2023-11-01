'use client'

import { useSearchParams } from "next/navigation"
import CustomeQueryParamsHook from "../../components/useQueryHook/page"

const HeroDetails = () => {

    const searchParams = useSearchParams()

    const queryId = searchParams.get('id')
    const { isLoading, isError, data, error } = CustomeQueryParamsHook(queryId)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }
    return (
        <div>
            <h1> HeroDetails page</h1>
            <p>{data?.name + " == > " + data?.alterEgo}</p>
        </div>
    )
}

export default HeroDetails