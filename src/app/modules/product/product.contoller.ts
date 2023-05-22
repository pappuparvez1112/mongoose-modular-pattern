import { Request,Response,NextFunction } from "express";
import { getAllProductFromDB,getAllProductByIdFromDB} from "./product.service";
import { sendApiResponse } from "../../utils/responseHandaler";

export const getAllProductS=async(req:Request,res:Response,next:NextFunction)=>{
    const products=await getAllProductFromDB();
    sendApiResponse(res,200,true,products);
}

export const getAllProductSById=async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params;
    const product=await getAllProductByIdFromDB(id);
    res.send(product);
}