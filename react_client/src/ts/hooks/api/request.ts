export const request = async <Response extends unknown | undefined>(
    url: string
) => {
    const response = await fetch(url, {
        credentials: "same-origin",
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    const text = await response.text();
    let body: unknown;

    try {
        body = JSON.parse(text);
    } catch (e) {
        console.error("Unable to parse API response", {
            cause: e,
        });
    }

    if (!response.ok) {
        console.error(response.status, response.statusText, body);
    }

    return body as Response;
};
