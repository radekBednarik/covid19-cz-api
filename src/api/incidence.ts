import { Response } from "node-fetch";
import Caller from "../common/base.js";

import { CollectionArgs, SpecificIdArgs } from "../types/api.js";

export class Incidence {
  private _caller;
  public response?: Response;

  constructor(baseUrl: string, apiToken: string) {
    this._caller = new Caller(baseUrl, apiToken);
    this.response = this._caller.response;
  }

  public async getStateData({
    queryParams,
    options,
    resource = "/api/v3/incidence-7-14-cr",
  }: CollectionArgs) {
    const responseBody = await this._caller.request(resource, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }

  public async getStateDataOf(
    id: string,
    { options, resource = "/api/v3/incidence-7-14-cr" }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    const responseBody = await this._caller.request(fullUrl, undefined, options);
    this.response = this._caller.response;
    return responseBody;
  }

  public async getRegionData({
    queryParams,
    options,
    resource = "/api/v3/incidence-7-14-kraje",
  }: CollectionArgs) {
    const responseBody = await this._caller.request(resource, queryParams, options);
    this.response = this._caller.response;
    return responseBody;
  }

  public async getRegionDataOf(
    id: string,
    { options, resource = "/api/v3/incidence-7-14-kraje" }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    const responseBody = await this._caller.request(fullUrl, undefined, options);
    this.response = this._caller.response;
    return responseBody;
  }
}
