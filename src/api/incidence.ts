import { Response } from "node-fetch";
import Caller from "../common/base.js";
import api from "../config/api.json" assert { type: "json" };

import { CollectionArgs, SpecificIdArgs } from "./api.js";

export class Incidence {
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
   * `/api/v3/incidence-7-14-cr
   */
  public async getStateData({
    queryParams,
    options,
    resource = api.resources.incidence.state.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/incidence-7-14-cr/{id}
   */
  public async getStateDataOf(
    id: string,
    { options, resource = api.resources.incidence.state.collection }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    return await this._request(fullUrl, undefined, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/incidence-7-14-kraje
   */
  public async getRegionData({
    queryParams,
    options,
    resource = api.resources.incidence.region.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/incidence-7-14-kraje/{id}
   */
  public async getRegionDataOf(
    id: string,
    { options, resource = api.resources.incidence.region.collection }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    return await this._request(fullUrl, undefined, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/incidence-7-14-okresy
   */
  public async getDistrictData({
    queryParams,
    options,
    resource = api.resources.incidence.district.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/incidence-7-14-okresy/{id}
   */
  public async getDistricDataOf(
    id: string,
    { options, resource = api.resources.incidence.district.collection }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    return await this._request(fullUrl, undefined, options);
  }
}
