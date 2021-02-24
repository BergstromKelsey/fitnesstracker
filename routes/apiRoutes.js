var db =require("../models");
module.exports = function (app){

    app.get("/api/workouts",(req,res)=> {

db.workout.find({})
.then(workout => {
    res.json(workout);
})
.catch(err =>{
    res.json(err);
});


    });
}