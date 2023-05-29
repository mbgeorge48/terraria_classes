import useSWR, { SWRResponse } from "swr";

import { APIError, fetcher } from "./fetcher";

export const useAPI = <Data>(
    url: string
): SWRResponse<Data, APIError | Error> => {
    return useSWR<Data, APIError | Error>(url, fetcher, {
        revalidateOnFocus: false,
    });
};
