import { Response } from "node-fetch";
import Caller from "../common/base.js";
import api from "../config/api.json" assert { type: "json" };
import { CollectionArgs, SpecificIdArgs } from "./api.js";

export class Hospitalization {
  private _caller;
  public response?: Response;

  constructor(baseUrl: string, apiToken: string) {
    this._caller = new Caller(baseUrl, apiToken);
    this.response = this._caller.response;
  }

  private async _request(resource: string, queryParams?: Record<string, string>, options?: RequestInit) {
    const responseBody = await this._caller.request(resource, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace`
   */
  public async getData({
    queryParams,
    options,
    resource = api.resources.hospitalization.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace/{id}`
   */
  public async getDataOf(
    id: string,
    { options, resource = api.resources.hospitalization.collection }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    return await this._request(fullUrl, undefined, options);
  }
}
