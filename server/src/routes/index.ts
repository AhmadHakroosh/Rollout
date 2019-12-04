import { Request, Response, Router  } from "express";

const router = Router();

// Users retreival end-point
router.get("/people", (request: Request, response: Response) => {

});

// User creation end-point
router.post("/people", (request: Request, response: Response) => {

});

// User update end-point
router.put("/people/:id", (request: Request, response: Response) => {

});

// User delete end-point
router.delete("/people/:id", (request: Request, response: Response) => {

});

export default router;
