import useSWR, { SWRConfiguration } from "swr";

export function useApi<Data = any, Error = any>(
    url: string | null,
    config?: SWRConfiguration,
) {
    const { data, error, mutate, isValidating } = useSWR<Data, Error>(
        url,
        config,
    );

    return {
        data,
        isLoading: !error && !data,
        isError: error,
        mutate,
        isValidating,
    };
}
