import { expect } from "chai";
import apiConfig from "./data/apiConfig.json" assert { type: "json" };

import { Incidence } from "../dist/api/incidence.js";

describe("incidence api v3", function () {
  const api = new Incidence(apiConfig.baseUrl, apiConfig.apiToken);

  context("GET /api/v3/incidence-7-14-cr", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getState({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("status code is 200", function () {
      expect(api.response.status).to.be.equal(200);
    });

    it("returned body is reasonably ok - status 'true', length '100', element has 'id', 'datum'", function () {
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id", "datum"]);
    });
  });

  context("GET /api/v3/incidence-7-14-cr/{id}", function () {
    let check, body;
    const id = "07f1e4fe-db89-4382-91cf-dede746ede9e";
    this.beforeAll(async function () {
      [check, body] = await api.getStateId(id, {
        options: { headers: { accept: "application/json" } },
      });
    });

    it("status code is 200", function () {
      expect(api.response.status).to.be.equal(200);
    });

    it("returned body is reasonably ok - status 'true', has 'id', 'datum' props", function () {
      expect(check).to.be.true;
      expect(body).to.contain.keys(["id", "datum"]);
    });
  });
});
