import { Response } from "node-fetch";
import Caller from "../common/base.js";
import api from "../config/api.json" assert { type: "json" };
import { CollectionArgs, SpecificIdArgs } from "./types.js";

export class Hospitalization {
  private _caller;
  public response?: Response;

  constructor(apiToken: string, baseUrl: string = api.baseUrl) {
    this._caller = new Caller(apiToken, baseUrl);
    this.response = this._caller.response;
  }

  private async _request(
    resource: string,
    queryParams?: Record<string, string>,
    id?: string,
    options?: RequestInit
  ) {
    let responseBody;
    if (typeof id === "undefined") {
      responseBody = await this._caller.request(resource, queryParams, options);
    } else {
      const fullUrl = `${resource}/${id}`;
      responseBody = await this._caller.request(fullUrl, undefined, options);
    }
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
    return await this._request(resource, queryParams, undefined, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace/{id}`
   */
  public async getDataOf(
    id: string,
    { options, resource = api.resources.hospitalization.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }
}
