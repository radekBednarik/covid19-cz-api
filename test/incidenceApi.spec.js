import { expect } from "chai";
import apiConfig from "./data/apiConfig.json" assert { type: "json" };

import { Incidence } from "../dist/api/incidence.js";

describe("incidence api v3", function () {
  const api = new Incidence(apiConfig.apiToken);

  context("GET /api/v3/incidence-7-14-cr", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getStateData({
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

  context("GET /api/v3/incidence-7-14-kraje", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getRegionData({
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

  context("GET /api/v3/incidence-7-14-okresy", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getDistrictData({
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
