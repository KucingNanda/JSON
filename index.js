import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"

getJSON(target_url,null,null,responseFunction)

function responseFunction(response) {
  console.log('HTTP Status:', response.status);
  console.log('Response Data:', response.data);
}
