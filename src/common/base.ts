import fetch, { RequestInit } from "node-fetch";

export default class Caller {
  private readonly _baseUrl;
  private readonly _apiToken;

  constructor(baseUrl: string, apiToken: string) {
    this._baseUrl = baseUrl;
    this._apiToken = apiToken;
  }

  private _createUrl(resource: string, queryParams?: Record<string, string>) {
    const url = new URL(resource, this._baseUrl).toString();
    const _queryParams = new URLSearchParams(queryParams).toString();
    const fullUrl = `${url}?${_queryParams}&apiToken=${this._apiToken}`;
    return fullUrl;
  }

  public async request(
    resource: string,
    queryParams?: Record<string, string>,
    options?: RequestInit
  ): Promise<[boolean, unknown]> {
    const fullUrl = this._createUrl(resource, queryParams);
    try {
      const response = await fetch(fullUrl, options);
      const body = await response.json();
      if (response.ok) {
        return [true, body];
      }
      return [false, body];
    } catch (error) {
      console.error(`[!] ERROR when calling ${fullUrl}: ${error}`);
      return [false, { status: "error", message: JSON.stringify(error) }];
    }
  }
}
