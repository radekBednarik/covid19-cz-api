import { Response } from "node-fetch";
import Caller from "../common/base.js";
import { CollectionArgs, SpecificIdArgs } from "../types/api.js";

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
  public async getData({ queryParams, options, resource = "/api/v3/hospitalizace" }: CollectionArgs) {
    const responseBody = await this._caller.request(resource, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace/{id}`
   */
  public async getDataOf(id: string, { options, resource = "/api/v3/hospitalizace" }: SpecificIdArgs) {
    const fullUrl = `${resource}/${id}`;
    const responseBody = await this._caller.request(fullUrl, undefined, options);
    this.response = this._caller.response;
    return responseBody;
  }
}
