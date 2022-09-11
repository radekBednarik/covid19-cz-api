# Czech Republic Covid 19 REST API wrapper

Node.js wrapper for official data provided by [Ministry of Health](https://onemocneni-aktualne.mzcr.cz/api/v3/docs). Documentation and data content are in czech language.

API is publicly accessible, you only need to get your personal token via [registration](https://onemocneni-aktualne.mzcr.cz/vytvorit-ucet). There is an hourly quota for calling the API, so be careful.

This package is lightweight wrapper around the REST api endpoints - what query parameters are available for given endpoint is stated in the documentation of the endpoint you want to call.

Endpoints are thematically grouped under classes. Usage is pretty much the same, so for example in case of getting overview data of vaccinations:

```ts
import {Vaccination} from "covid19-cz-api";

(async () => {
    const api = new Vaccination("apiBaseUrl", "yourApiToken");

    const [status, body] =  await api.getOverviewData({
        queryParams: { page: "1", itemsPerPage: "100" },
        options: { headers: { accept: "application/json" } },
      });

    if (status) {
        body.forEach((record) => {
            console.log(JSON.stringify(record, null, 2));
        })
    }
})();
```

`status` will be `true` if response has `statusCode` in interval `<200, 300>`. More precisely, if used package [node-fetch](https://www.npmjs.com/package/node-fetch) call has response with `status.ok`.

Otherwise returns `false` and in the `body` object there is either error message by the api server, or if error was caught, the error message.
