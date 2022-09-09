import Caller from "common/base";

export class Hospitalization {
  private _caller;

  constructor(baseUrl: string, apiToken: string) {
    this._caller = new Caller(baseUrl, apiToken);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace`
   */
  public async getHospitalization({
    queryParams,
    options,
    resource = "/api/v3/hospitalizace",
  }: {
    queryParams?: Record<string, string>;
    options?: RequestInit;
    resource?: string;
  }) {
    return await this._caller.request(resource, queryParams, options);
  }

  /**
   * @see https://onemocneni-aktualne.mzcr.cz/api/v3/docs
   * `/api/v3/hospitalizace/{id}`
   */
  public async getHospitalizationOfId(
    id: string,
    {
      queryParams,
      options,
      resource = "/api/v3/hospitalizace",
    }: { queryParams?: Record<string, string>; options?: RequestInit; resource?: string }
  ) {
    const fullUrl = `${resource}/${id}`;
    return await this._caller.request(fullUrl, queryParams, options);
  }
}
