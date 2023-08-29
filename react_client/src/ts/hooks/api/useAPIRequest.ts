import { request } from "./request";

export const useAPIRequest = () => {
    return async <Response extends unknown>(path: string) => {
        const url = ["http://localhost:5000", path].join("");

        return request<Response>(url);
    };
};
