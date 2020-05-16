import { Client } from "https://deno.land/x/postgres/mod.ts";
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } from "../config.js";
let config;

config = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
};

const client = new Client(config);

await client.connect();
export default client;