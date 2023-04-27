import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '9c51225da4a4d6d08713b965e2d989ff12a2cc42', queries });
export default client;
  