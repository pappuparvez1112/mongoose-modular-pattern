import { Router } from "express";
import { getAllProductS, getAllProductSById } from "./product.contoller";

const router:Router=Router();

router.get("/allProducts",getAllProductS);
router.get("/details/:id",getAllProductSById);

export default router;