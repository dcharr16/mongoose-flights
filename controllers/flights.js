// import res from 'express/lib/response.js'
import { Flight } from '../models/flight.js'
function newFlight (req, res){
  res.render("flights/new")
}
function create(req, res) {
  for (let key in req.body)
    if (req.body[key]=== "Blank") delete req.body[key]
    

  const flight = new Flight(req.body) 
  console.log(flight)
  flight.save(function(err){
    console.log(err);
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}
function index(req, res){
  Flight.find({}, function(error, flights){
  res.render('flights/index',{
    flights: flights,
    error: error,
  })
  })
}
function show (req, res){
  Flight.findById(req.params.id, function (err, flight){
    res.render("flights/show",{
    flight: flight,
  })
})
}
function addMeal(req, res){
  Flight.findById(req.params.id, function (err,flight){
    flight.meal.push(req.body.mealId)
    flight.save(function(err){
      res.redirect(`flights/${flight._id}`)
    })
  })
}
export {
  newFlight as new,
  create,
  index,
  show,
}