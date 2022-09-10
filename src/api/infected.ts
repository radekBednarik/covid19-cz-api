import { Response } from "node-fetch";
import Caller from "../common/base.js";
import api from "../config/api.json" assert { type: "json" };

import { CollectionArgs, SpecificIdArgs } from "../types/api.js";

export class Infected {
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

  public async getTestsDataOfHospitalized({
    queryParams,
    options,
    resource = api.resources.infected["hospitalized-tests"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, options);
  }

  public async getTestsDataOfHospitalizedOf(
    id: string,
    { options, resource = api.resources.infected["hospitalized-tests"].collection }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    return await this._request(fullUrl, undefined, options);
  }

  public async getReinfectedData({
    queryParams,
    options,
    resource = api.resources.infected.reinfected.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, options);
  }

  public async getReinfectedDataOf(
    id: string,
    { options, resource = api.resources.infected.reinfected.collection }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${id}`;
    return await this._request(fullUrl, undefined, options);
  }

  public async getCuredDeadTestsData({
    queryParams,
    options,
    resource = api.resources.infected["cured-dead-tests"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, options);
  }

  public async getCuredDeadTestsDataAtDate(
    date: string,
    { options, resource = api.resources.infected["cured-dead-tests"].collection }: SpecificIdArgs
  ) {
    const fullUrl = `${resource}/${date}`;
    return await this._request(fullUrl, undefined, options);
  }
}
