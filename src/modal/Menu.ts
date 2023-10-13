import { Schema,model,InferSchemaType } from "mongoose";

const MenuSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        
    },
},{timestamps:true})

type menutype = InferSchemaType<typeof MenuSchema>

export default model<menutype>("Menu",MenuSchema)