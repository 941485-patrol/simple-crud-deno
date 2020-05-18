import { Router } from "https://deno.land/x/oak/mod.ts";

import getEmployees from "./controllers/Employee/getEmployees.js";
import getEmployee from "./controllers/Employee/getEmployee.js";
import createEmployee from "./controllers/Employee/createEmployee.js";
import updateEmployee from "./controllers/Employee/updateEmployee.js";
import deleteEmployee from "./controllers/Employee/deleteEmployee.js";
import getJob from "./controllers/Occupation/getJob.js";
import getJobs from "./controllers/Occupation/getJobs.js";
import createJob from "./controllers/Occupation/createJob.js";
import deleteJob from "./controllers/Occupation/deleteJob.js";
import updateJob from "./controllers/Occupation/updateJob.js";

const router = new Router();

router
    .get("/api/employees", getEmployees)
    .get("/api/employees/:id", getEmployee)
    .post("/api/employees", createEmployee)
    .put("/api/employees/:id", updateEmployee)
    .delete("/api/employees/:id", deleteEmployee)
    .get("/api/jobs", getJobs)
    .get("/api/jobs/:id", getJob)
    .post("/api/jobs",createJob)
    .put("/api/jobs/:id", updateJob)
    .delete("/api/jobs/:id", deleteJob)
export default router;