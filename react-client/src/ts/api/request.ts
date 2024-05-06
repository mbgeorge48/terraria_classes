import useSWR from "swr";

async function fetcher(url: string) {
    const response = await fetch(url);
    return await response.json();
}

export function useRequest(params: string) {
    return useSWR("http://0.0.0.0:8080/" + params, fetcher);
}
