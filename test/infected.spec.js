import { expect } from "chai";
import apiConfig from "./data/apiConfig.json" assert { type: "json" };

import { Infected } from "../dist/api/infected.js";

describe("infected api v3", function () {
  const api = new Infected(apiConfig.baseUrl, apiConfig.apiToken);

  context("GET /api/v3/nakazeni-hospitalizace-testy", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getTestsDataOfHospitalized({
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

  context("GET /api/v3/nakazeni-reinfekce", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getReinfectedData({
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

  context("GET /api/v3/nakazeni-vyleceni-umrti-testy", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getCuredDeadTestsData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("response is OK", function () {
      expect(api.response.status).to.be.equal(200);
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["datum"]);
    });
  });
});
