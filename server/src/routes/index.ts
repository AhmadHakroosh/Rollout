import { Request, Response, Router  } from "express";

const router = Router();

// Users retreival end-point
router.get("/users", (request: Request, response: Response) => {

});

// User creation end-point
router.post("/users", (request: Request, response: Response) => {

});

// User update end-point
router.put("/users/:id", (request: Request, response: Response) => {

});

// User delete end-point
router.delete("/users/:id", (request: Request, response: Response) => {

});

export default router;
