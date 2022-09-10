/**
 * Very early - run against live API.
 * Set up mockserver, so this will not eat up API hourly quota.
 */
import { expect } from "chai";
import apiConfig from "./data/apiConfig.json" assert { type: "json" };

import { Hospitalization } from "../dist/api/hospitalization.js";

describe("hospitalization api v3", function () {
  const api = new Hospitalization(apiConfig.baseUrl, apiConfig.apiToken);

  context("GET /api/v3/hospitalizace", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("response is OK", function () {
      expect(api.response.status).to.be.equal(200);
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id", "datum"]);
    });
  });
});
