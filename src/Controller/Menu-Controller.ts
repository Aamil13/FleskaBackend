import Menu from "../modal/Menu";
import express from "express";

export const getMenu = async(req:express.Request,res:express.Response)=>{
    let menu;
    const page = Number(req.query.page) || 1
    const limit = 10;
    const startIndex = (page - 1)*limit;
    let count = await Menu.countDocuments();
    try {
        menu = await Menu.find().skip(startIndex).limit(limit)
        // count = await Post.length
    } catch (error) {
       return console.log(error);
    }

    if(!menu){
      return  res.status(500).json({message:"Unexpected Error Occured"})
    }

    return res.status(200).json({menu,count})

}

export const getSinglemenu = async(req:express.Request,res:express.Response)=>{
    const id = req.params.id;

    let menu;
    try {
        menu = await Menu.findById(id)
    } catch (error) {
        return console.log(error);
    }
    if(!menu){
        return res.status(404).json({message:"No menu Found"})
    }

    return res.status(200).json({menu})
}

export const CreateMenu =(req:express.Request,res:express.Response)=>{


    const {title,description,price,image} = req.body

    if(!title || title.trim() === '' || !description || description.trim() === '' || !price ){
        return res.status(422).json({message:"All Fields Required except Image"})
    }

    let menu;
    try {
        menu = new Menu({title,description,price,image})
        menu.save()
    } catch (error) {
        return console.log("Unable to create menu",error)
    }

    if(!menu){
      return  res.status(500).json({message:"Internal Server Error"})
    }

    return res.status(201).json({menu})
}

export const deleteMenu =async(req:express.Request, res:express.Response)=>{
    const id = req.params.id;

    let menu;
    try {
        
        menu = await Menu.findByIdAndRemove(id)
        
    } catch (error) {
        return console.log(error);
    }

    if(!menu){
        return res.status(500).json({message: "Failed to Delete"})
    }

        return res.status(200).json({message:"Successfully Deleted"})
}

export const updateMenu= async(req:express.Request, res:express.Response)=>{
    const id = req.params.id;
    console.log(id);
    
    const {title,description,price,image}= req.body;

    if(!title || title.trim() === '' || !description || description.trim() === '' || !price){
        return res.status(422).json({message:"All Fields Required except Image"})
    }

    let menu;
    try {
        menu = await Menu.findByIdAndUpdate(id,{
            title,description,price,image
        })
    } catch (error) {
       return console.log(error);
    }

    if(!menu){
      return  res.status(500).json({message:"Unable to Update"})
    }

    return res.status(200).json({message:"Updated Successfully"})
}