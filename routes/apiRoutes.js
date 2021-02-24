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

app.post("/api/workouts", async(req,res)=> {
try{ 
    const response= await db.workout.create({type:"workouts"})
    res.json(response);
}
catch(err){
     console.log("error")
    }
           
    });


app.get("/api/workouts/range", (req,res)=>{

    db.workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err =>{
        res.json(err);
        });
    });


}