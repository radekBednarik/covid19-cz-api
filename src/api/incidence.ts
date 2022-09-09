import { Response } from "node-fetch";
import Caller from "../common/base.js";

export class Incidence {
  private _caller;
  public response?: Response;

  constructor(baseUrl: string, apiToken: string) {
    this._caller = new Caller(baseUrl, apiToken);
    this.response = this._caller.response;
  }

  public async getState({
    queryParams,
    options,
    resource = "/api/v3/incidence-7-14-cr",
  }: {
    queryParams?: Record<string, string>;
    options?: RequestInit;
    resource?: string;
  }) {
    const responseBody = await this._caller.request(resource, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }

  public async getStateId(
    id: string,
    {
      queryParams,
      options,
      resource = "/api/v3/incidence-7-14-cr",
    }: { queryParams?: Record<string, string>; options?: RequestInit; resource?: string }
  ) {
    const fullUrl = `${resource}/${id}`;
    const responseBody = await this._caller.request(fullUrl, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }
}
