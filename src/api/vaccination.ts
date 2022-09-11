import { Response } from "node-fetch";
import Caller from "../common/base.js";
import api from "../config/api.json" assert { type: "json" };

import { CollectionArgs, SpecificIdArgs } from "./types.js";

export class Vaccination {
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

  public async getData({
    queryParams,
    options,
    resource = api.resources.vaccination._.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getDataOf(
    id: string,
    { options, resource = api.resources.vaccination._.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getDemographicData({
    queryParams,
    options,
    resource = api.resources.vaccination.demography.collection,
  }: CollectionArgs) {
    return this._request(resource, queryParams, undefined, options);
  }

  public async getDemographicDataOf(
    id: string,
    { options, resource = api.resources.vaccination.demography.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getDistributionData({
    queryParams,
    options,
    resource = api.resources.vaccination.distribution.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getDistributionDataOf(
    id: string,
    { options, resource = api.resources.vaccination.distribution.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getDistributionStockpileData({
    queryParams,
    options,
    resource = api.resources.vaccination["distribution-stockpile"].collection,
  }: CollectionArgs) {
    return this._request(resource, queryParams, undefined, options);
  }

  public async getDistributionStockpileDataOf(
    id: string,
    { options, resource = api.resources.vaccination["distribution-stockpile"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getGeographyData({
    queryParams,
    options,
    resource = api.resources.vaccination.geography.collection,
  }: CollectionArgs) {
    return this._request(resource, queryParams, undefined, options);
  }

  public async getGeographyDataOf(
    id: string,
    { options, resource = api.resources.vaccination.geography.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getHospitalizationData({
    queryParams,
    options,
    resource = api.resources.vaccination.hospitalization.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getHospitalizationDataOf(
    id: string,
    { options, resource = api.resources.vaccination.hospitalization.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getWeeklyHospitalizationData({
    queryParams,
    options,
    resource = api.resources.vaccination["hospitalization-week"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getWeeklyHospitalizationDataOf(
    id: string,
    { options, resource = api.resources.vaccination["hospitalization-week"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getERData({
    queryParams,
    options,
    resource = api.resources.vaccination["hospitalization-er"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getERDataOf(
    id: string,
    { options, resource = api.resources.vaccination["hospitalization-er"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getWeeklyERData({
    queryParams,
    options,
    resource = api.resources.vaccination["hospitalization-er-week"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getWeeklyERDataOf(
    id: string,
    { options, resource = api.resources.vaccination["hospitalization-er-week"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getORPData({
    queryParams,
    options,
    resource = api.resources.vaccination.orp.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getORPDataOf(
    id: string,
    { options, resource = api.resources.vaccination.orp.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getPositiveData({
    queryParams,
    options,
    resource = api.resources.vaccination.positive.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getPositiveDataOf(
    id: string,
    { options, resource = api.resources.vaccination.positive.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getPositiveInHospitalsData({
    queryParams,
    options,
    resource = api.resources.vaccination["positive-in-hospital"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getPositiveInHospitalsDataOf(
    id: string,
    { options, resource = api.resources.vaccination["positive-in-hospital"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getWeeklyPositiveData({
    queryParams,
    options,
    resource = api.resources.vaccination["positive-week"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getWeeklyPositiveDataOf(
    id: string,
    { options, resource = api.resources.vaccination["positive-week"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getPositive65Data({
    queryParams,
    options,
    resource = api.resources.vaccination["positive-65"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getPositive65DataOf(
    id: string,
    { options, resource = api.resources.vaccination["positive-65"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getProfessionsData({
    queryParams,
    options,
    resource = api.resources.vaccination.professions.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getProfessionsDataOf(
    id: string,
    { options, resource = api.resources.vaccination.professions.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getRegistrationData({
    queryParams,
    options,
    resource = api.resources.vaccination.registration.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getRegistrationDataOf(
    id: string,
    { options, resource = api.resources.vaccination.registration.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getReservationsData({
    queryParams,
    options,
    resource = api.resources.vaccination.reservations.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getReservationsDataOf(
    id: string,
    { options, resource = api.resources.vaccination.reservations.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getConsumptionData({
    queryParams,
    options,
    resource = api.resources.vaccination.consumption.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getConsumptionDataOf(
    id: string,
    { options, resource = api.resources.vaccination.consumption.collection }: CollectionArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getDeathsData({
    queryParams,
    options,
    resource = api.resources.vaccination.deaths.collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getDeathsDataOf(
    id: string,
    { options, resource = api.resources.vaccination.deaths.collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }

  public async getOverviewData({
    queryParams,
    options,
    resource = api.resources.vaccination["basic-overview"].collection,
  }: CollectionArgs) {
    return await this._request(resource, queryParams, undefined, options);
  }

  public async getOverviewDataOf(
    id: string,
    { options, resource = api.resources.vaccination["basic-overview"].collection }: SpecificIdArgs
  ) {
    return await this._request(resource, undefined, id, options);
  }
}
