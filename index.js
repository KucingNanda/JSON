import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

getJSON(
  "https://nomp.mofumofu.me/api/worker_stats?sugar1qkyetyz6uypmuqaxd8hs763ymv40uk4negh30yt",
  null,
  null,
  responseFunction
);

function responseFunction(response) {
  console.log("HTTP Status:", response.status);
  console.log("Response Data:", response.data);

  if (response.status === 200) {
    const data = response.data;
    const content = `
        <p>Miner: ${data.miner}</p>
        <p>Hashrate: ${data.totalHash} H/s</p>
      `;

    setInner("output", content);
  } else {
    setInner("output", `<p>Error: Unable to fetch data.</p>`);
  }
}
