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
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getHospitalization({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("status code is 200", function () {
      expect(api.response.status).to.be.equal(200);
    });

    it("returned body is reasonably OK - status 'true', length '100', element has 'id' and 'datum'", function () {
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id", "datum"]);
    });
  });
});