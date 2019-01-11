import { ajax } from "rxjs/observable/dom/ajax";

type BaseHeaders = {
  authorization: string;
  "Content-Type": string;
};

const baseHeaders = (): BaseHeaders => ({
  authorization: "Basic bHVrYXNpa3A6aW1pZW5pbnkxNA==",
  "Content-Type": "application/json"
});

const get = (url: string, headers: any) =>
  ajax.get(url, Object.assign({}, baseHeaders(), headers));
const post = (url: string, body: any, headers: any) =>
  ajax.post(url, body, Object.assign({}, baseHeaders(), headers));

const put = (url: string, body: any, headers: any) =>
  ajax.put(url, body, Object.assign({}, baseHeaders(), headers));

const patch = (url: string, body: any, headers: any) =>
  ajax.patch(url, body, Object.assign({}, baseHeaders(), headers));
const remove = (url: string, headers: any) =>
  ajax.delete(url, Object.assign({}, baseHeaders(), headers));

export default {
  get,
  post,
  put,
  patch,
  remove
};
