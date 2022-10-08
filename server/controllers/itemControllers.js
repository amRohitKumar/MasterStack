const User = require("../models/user");

const start = async(req,res) => {


    try{
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if(user.status!=0){
            return res.status(400).send({ msg: "You can only start once" });
        }
        user.status=1;
        user.startedAt=Date.now();
        user.endsAt=Date.parse(user.startedAt)+1*60*1000;
        await user.save();
        return res.status(200).json({user});
    }catch(e){
        return res.status(400).send({ msg: "Server Error" });
    }
}

const submit = async(req,res) => {
    try{
        const userId = req.user.userId;
        

        const userBody = req.body;
        if(userBody.status==2){
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
        return res.status(200).json({user});
    }catch(e){
        return res.status(400).send({ msg: "Server Error" });
    }
}

module.exports = {start, submit};