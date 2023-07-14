import mongoose, {Schema, model, models} from "mongoose";

const TopicShema = Schema({
    title:{
        type: String,
        require:true
    },
    description :{
        type:String,
        require:true
    }
}, {timestamps: true})

const Topic = models.Topic||model("Topic", TopicShema)
export default Topic