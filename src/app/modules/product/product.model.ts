import mongoose,{Schema} from "mongoose";
import {IProduct} from './product.interface'

const productScema=new Schema<IProduct>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
        max_length:2000
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    sku:{
        type:String,
        required:true,
        unique:true,
    },
},
{
    timestamps:true,
}
);

export const Product=mongoose.model<IProduct>('Product',productScema);
