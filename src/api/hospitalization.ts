import { Response } from "node-fetch";
import Caller from "../common/base.js";

export class Hospitalization {
  private _caller;
  public response?: Response;

  constructor(baseUrl: string, apiToken: string) {
    this._caller = new Caller(baseUrl, apiToken);
    this.response = this._caller.response;
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace`
   */
  public async getData({
    queryParams,
    options,
    resource = "/api/v3/hospitalizace",
  }: {
    queryParams?: Record<string, string>;
    options?: RequestInit;
    resource?: string;
  }) {
    const responseBody = await this._caller.request(resource, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace/{id}`
   */
  public async getDataOf(
    id: string,
    {
      queryParams,
      options,
      resource = "/api/v3/hospitalizace",
    }: { queryParams?: Record<string, string>; options?: RequestInit; resource?: string }
  ) {
    const fullUrl = `${resource}/${id}`;
    const responseBody = await this._caller.request(fullUrl, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }
}
