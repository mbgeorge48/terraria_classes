export class APIError extends Error {
  public status: number;
  public text: string;
  public body: string | null;

  constructor(status: number, statusText: string, content: string) {
    super(status + " " + statusText);
    this.status = status;
    this.text = content;

    try {
      this.body = JSON.parse(content);
    } catch (e) {
      this.body = null;
    }
  }
}
export const fetcher = (url: string) =>
  fetch(url).then((response) => response.json());
