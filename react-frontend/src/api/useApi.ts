import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useApi<T>(params: string | null) {
    return useSWR(
        params ? `http://localhost:8000/${params}` : null,
        fetcher as (url: string) => Promise<T>,
    );
}
