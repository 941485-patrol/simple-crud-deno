import { Router } from "https://deno.land/x/oak/mod.ts";

import getEmployees from "./controllers/getEmployees.js";
import getEmployee from "./controllers/getEmployee.js";
import createEmployee from "./controllers/createEmployee.js";
import updateEmployee from "./controllers/updateEmployee.js";
import deleteEmployee from "./controllers/deleteEmployee.js";

const router = new Router();

router
    .get("/api/employees", getEmployees)
    .get("/api/employees/:id", getEmployee)
    .post("/api/employees", createEmployee)
    .put("/api/employees/:id", updateEmployee)
    .delete("/api/employees/:id", deleteEmployee)
export default router;