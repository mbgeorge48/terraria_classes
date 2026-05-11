// export const fetcher = async (url: string) => {
//     const res = await fetch(url);

//     if (!res.ok) {
//         const error = new Error("An error occurred while fetching the data.");
//         // Attach extra info to the error object.
//         (error as any).info = await res.json();
//         (error as any).status = res.status;
//         throw error;
//     }

//     return res.json();
// };

// import useSWR from "swr";

export async function fetcher<T>(url: string) {
    const response = await fetch(url);
    return (await response.json()) as T;
}

// export function useRequest(params: string) {
//     return useSWR("http://localhost:5000/" + params, fetcher);
// }
