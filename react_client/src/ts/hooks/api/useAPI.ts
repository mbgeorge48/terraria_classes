import useSWR, { SWRConfiguration } from "swr";

import { useAPIRequest } from "./useAPIRequest";

export const useAPI = <Data extends unknown>(
    path: string | null,
    options?: SWRConfiguration
) => {
    const request = useAPIRequest();

    const url = path;

    return useSWR<Data>(url, request, options);
};
