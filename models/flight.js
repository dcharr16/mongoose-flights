import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type:String, enum: ["American", "Southwest", "United"]},
  airport: {type: String, enum: ["Blank","AUS", "BOS", "DFW", "DEN", "LAX", "SAN"], default: "DEN"},
  flightNo: { 
    type: Number, 
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date, 
    default: function(){ Date().getFullYear()
    }
  },
})

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: { type: Number, minimum: 0},

})
const Flight = mongoose.model("Flight", flightSchema)

const mealSchema =  new Schema({
  name: {type: String,}
})

export{ 
  Flight
}
