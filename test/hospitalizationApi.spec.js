/**
 * Very early - run against live API.
 * Set up mockserver, so this will not eat up API hourly quota.
 */
import { expect } from "chai";
import apiConfig from "./data/apiConfig.json" assert { type: "json" };

import { Hospitalization } from "../dist/api/api.js";

describe("hospitalization api v3", function () {
  const api = new Hospitalization(apiConfig.baseUrl, apiConfig.apiToken);

  context("GET /api/v3/hospitalizace", function () {
    let responseBody;
    this.beforeEach(async function () {
      responseBody = await api.getHospitalization({ queryParams: { page: "1", itemsPerPage: "100" } });
    });

    it("status code is 200", function () {
      expect(api.response.status).to.be.equal(200);
    });
  });
});
