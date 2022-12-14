const User = require("../models/user");
const Item =require("../models/items");
const start = async(req,res) => {


    try{
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if(Date.now()<Date.parse("2022-10-16T19:00:00") || Date.now()>Date.parse("2022-10-16T21:00:00")){
            return res.status(400).send({msg:"You may only start in the given time slot"});
        }
        if(user.status!=0){
            return res.status(400).send({ msg: "You can only start once" });
        }
        user.status=1;
        user.startedAt=Date.now();
        user.endsAt=Date.parse(user.startedAt)+305*1000;
        await user.save();
        return res.status(200).json({user});
    }catch(e){
        return res.status(400).send({ msg: "Server Error" });
    }
}

const submit = async(req,res) => {
    try{
        const userId = req.user.userId;
        const checkUser = await User.findById(userId);
        const userBody = req.body;
        if(userBody.status==2 || checkUser.status==2){
            return res.status(400).send({ msg: "You can only submit once" });
        }
        await User.updateOne({
            _id: userId,
        },{
            $set: {
                items: userBody.items,
                amount: userBody.amount,
                points: userBody.points,
                status: 2
            }
        });
        const user = await User.findById(userId);
       // console.log(user)
        return res.status(200).json({user});
    }catch(e){
        return res.status(400).send({ msg: "Server Error" });
    }
}
const addItem = async(req,res) => {
    try{
        const item = req.body;
        const newItem= Item.create(item);
        return res.status(200).send({ msg: "Item Added"});
    }catch(e){
        return res.status(400).send({ msg: "Server Error" });
    }
}

const fetchItem = async(req,res) => {
    try {
        const items = await Item.find({});
        return res.status(200).json({items : items.map(item => {

            return {
                id: item._id.toString(),
                name: item.name,
                parent: item.parent,
                cost: item.cost,
                points: item.points
            }
           
        })});
        
    } catch (error) {
        return res.status(400).send({ msg: "Server Error" });
    }
}
module.exports = {start, submit , addItem, fetchItem};