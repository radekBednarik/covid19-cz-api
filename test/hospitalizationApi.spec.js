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

    it("status code is 200", function () {
      expect(api.response.status).to.be.equal(200);
    });

    it("returned body is reasonably OK - status 'true', length '100', element has 'id' and 'datum'", function () {
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id", "datum"]);
    });
  });

  context("GET /api/v3/hospitalizace/{id}", function () {
    let check, body;
    const id = "a81c8efe-8a97-4b33-8728-4acdcb8152d4";
    this.beforeAll(async function () {
      [check, body] = await api.getDataOf(id, {
        options: { headers: { accept: "application/json" } },
      });
    });

    it("status code is 200", function () {
      expect(api.response.status).to.be.equal(200);
    });

    it("returned body is reasonably OK - status 'true', object has 'id', 'datum' properties", function () {
      expect(check).to.be.true;
      expect(body).to.contain.keys(["id", "datum"]);
    });
  });
});
