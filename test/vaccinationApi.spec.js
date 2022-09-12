import { expect } from "chai";
import apiConfig from "./data/apiConfig.json" assert { type: "json" };

import { Vaccination } from "../dist/api/vaccination.js";

describe("vaccination api v3", function () {
  const api = new Vaccination(apiConfig.apiToken);

  context("GET /api/v3/ockovani", function () {
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

  context("GET /api/v3/ockovani-demografie", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getDemographicData({
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

  context("GET /api/v3/ockovani-distribuce", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getDistributionData({
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

  context("GET /api/v3/ockovani-distribuce-sklad", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getDistributionStockpileData({
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

  context("GET /api/v3/ockovani-geografie", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getGeographyData({
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

  context("GET /api/v3/ockovani-hospitalizace", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getHospitalizationData({
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

  context("GET /api/v3/ockovani-hospitalizace-tyden", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getWeeklyHospitalizationData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("response is OK", function () {
      expect(api.response.status).to.be.equal(200);
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id"]);
    });
  });

  context("GET /api/v3/ockovani-jip", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getERData({
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

  context("GET /api/v3/ockovani-jip-tyden", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getWeeklyERData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("response is OK", function () {
      expect(api.response.status).to.be.equal(200);
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id"]);
    });
  });

  context("GET /api/v3/ockovani-orp", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getORPData({
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

  context("GET /api/v3/ockovani-pozitivni", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getPositiveData({
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

  context("GET /api/v3/ockovani-pozitivni-hospitalizovani", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getPositiveInHospitalsData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("response is OK", function () {
      expect(api.response.status).to.be.equal(200);
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id"]);
    });
  });

  context("GET /api/v3/ockovani-pozitivni-tyden", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getWeeklyPositiveData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("response is OK", function () {
      expect(api.response.status).to.be.equal(200);
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id"]);
    });
  });

  context("GET /api/v3/ockovani-pozitivni65", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getPositive65Data({
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

  context("GET /api/v3/ockovani-profese", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getProfessionsData({
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

  context("GET /api/v3/ockovani-registrace", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getRegistrationData({
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

  context("GET /api/v3/ockovani-rezervace", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getReservationsData({
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

  context("GET /api/v3/ockovani-spotreba", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getConsumptionData({
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

  context("GET /api/v3/ockovani-umrti", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getDeathsData({
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

  context("GET /api/v3/ockovani-zakladni-prehled", function () {
    let check, body;
    this.beforeAll(async function () {
      [check, body] = await api.getOverviewData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });
    });

    it("response is OK", function () {
      expect(api.response.status).to.be.equal(200);
      expect(check).to.be.true;
      expect(body).to.have.length(100);
      expect(body[0]).to.contain.keys(["id"]);
    });
  });
});
