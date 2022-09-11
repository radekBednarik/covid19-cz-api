import { Response } from "node-fetch";
import Caller from "../common/base.js";
import api from "../config/api.json" assert { type: "json" };

import { CollectionArgs, SpecificIdArgs } from "./types.js";

export class Infected {
  private _caller;
  public response?: Response;

  constructor(baseUrl: string, apiToken: string) {
    this._caller = new Caller(baseUrl, apiToken);
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
   * `/api/v3/nakazeni-hospitalizace-testy
   */
  public async getTestsDataOfHospitalized({
    queryParams,
    options,
    resource = api.resources.infected["hospitalized-tests"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/nakazeni-hospitalizace-testy/{id}
   */
  public async getTestsDataOfHospitalizedOf(
    id: string,
    { options, resource = api.resources.infected["hospitalized-tests"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/nakazeni-reinfekce
   */
  public async getReinfectedData({
    queryParams,
    options,
    resource = api.resources.infected.reinfected.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/nakazeni-reinfekce/{id}
   */
  public async getReinfectedDataOf(
    id: string,
    { options, resource = api.resources.infected.reinfected.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/nakazeni-vyleceni-umrti-testy
   */
  public async getCuredDeadTestsData({
    queryParams,
    options,
    resource = api.resources.infected["cured-dead-tests"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/nakazeni-vyleceni-umrti-testy/{date}`
   *
   * `{date}` in format `yyyy-mm-dd`
   */
  public async getCuredDeadTestsDataAtDate(
    date: string,
    { options, resource = api.resources.infected["cured-dead-tests"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, date, options);
  }
}
