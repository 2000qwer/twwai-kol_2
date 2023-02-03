import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";



 
const paramSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    extraParam: {type: Number, required: false, default: 0},
    date: {type: String}
}, {
    collection: 'params'
});
paramSchema.plugin(uniqueValidator);


async function getLast() {
    return await ParamModel.findOne().sort({'_id':-1}).limit(1).then(function(result) {
        if (result) {
            return mongoConverter(result);
        }
    })
 }
 

async function query() {
    const result = await ParamModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
 }

 async function get(id) {
    return ParamModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
 }

 async function getAll(){ 
    /*const cursor = User.find().cursor();

    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    }
    */
        return ParamModel.find({}).then(function (storedDataArray) {
            return storedDataArray;
    }).catch(function(err){
        if (err) {
            throw new Error(err.message);
        }
    })
};
async function Add() {
        return ParamModel.find({}).then(function (storedDataArray) {
            return storedDataArray;
        }).catch(function(err){
            if (err) {
                throw new Error(err.message);
            }
        });

}
  

const ParamModel = mongoose.model('paramsMM', paramSchema);



export default {

    query : query,
    get : get,
    getLast : getLast,
    getAll : getAll,
    Add : Add,

    model: ParamModel
};
