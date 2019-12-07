import _Vue from "vue";
import axios from "axios";

export function HttpPlugin<HttpPuginOptions>(
  Vue: typeof _Vue,
  options?: HttpPuginOptions
): void {
  Vue.prototype.$http = axios.create({
    baseURL: "/api"
  });
}

export class HttpPuginOptions {}
