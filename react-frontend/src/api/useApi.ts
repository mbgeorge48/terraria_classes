import useSWR, { type SWRResponse } from "swr";

import { fetcher } from "./fetcher";

const apiUrl = import.meta.env.VITE_API_URL;
export function useApi<T>(params: string | null): SWRResponse<T, Error> {
    return useSWR<T>(params ? `${apiUrl}/${params}` : null, fetcher);
}
