import useSWR, { type SWRResponse } from "swr";

import { fetcher } from "./fetcher";

export function useApi<T>(params: string | null): SWRResponse<T, Error> {
    return useSWR<T>(
        params ? `http://localhost:8000/${params}` : null,
        fetcher,
    );
}
