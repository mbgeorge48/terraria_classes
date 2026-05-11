import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useApi<T>(params: string) {
    return useSWR(
        "http://localhost:8000/" + params,
        fetcher as (url: string) => Promise<T>,
    );
}
