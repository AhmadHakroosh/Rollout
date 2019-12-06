import { Request, Response, Router  } from "express";
import { People } from "../controllers/people.controller";

const router = Router();

// Users retreival end-point
router.get("/people", People.getAll);

// User creation end-point
router.post("/people", (request: Request, response: Response) => {
    response.send("Hello world!");
});

// User update end-point
router.put("/people/:id", (request: Request, response: Response) => {
    response.send("Hello world!");
});

// User delete end-point
router.delete("/people/:id", (request: Request, response: Response) => {
    response.send("Hello world!");
});

export default router;
