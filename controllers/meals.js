function addMeal(req, res){
  Flight.findById(req.params.id, function (err,flight){
    flight.meal.push(req.body.mealId)
    flight.save(function(err){
      res.redirect(`flights/${flight._id}`)
    })
  })
}

export {
  addMeal
}