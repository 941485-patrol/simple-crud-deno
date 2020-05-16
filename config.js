import { config } from "https://deno.land/x/dotenv/mod.ts";

export const APP_PORT = config().APP_PORT;
export const APP_HOST = config().APP_HOST;
export const DB_HOST = config().DB_HOST;
export const DB_USER = config().DB_USER;
export const DB_PORT = parseInt(config().DB_PORT);
export const DB_PASS = config().DB_PASS;
export const DB_NAME = config().DB_NAME;