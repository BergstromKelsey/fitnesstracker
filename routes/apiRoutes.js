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



app.put("/api/workouts/:id",({body,params}, res) =>{
    const workoutID = params.id;
    let savedExercise = [];
    db.Workout.find({_id: workoutID})
    .then(dbWorkout => {
    
        savedExercise = dbworkout[0].exercises;
        res.json(dbworkout[0].exercises);
        let allExercises = [...savedExercise, body]
        console.log(allExercises)
        updateWorkout(allExercises)
    })


    .catch (err => {
        res.json(err);

    });
    

    function updateWorkout(exercises){
        db.workout.findByIdAndUpdate(workoutId, {excersises:excercises},function(err,doc){
            if (err){
                console.log(err)
            }
        })
    }
})
app.get("/api/workouts/range", (req,res)=>{

    db.workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err =>{
        res.json(err);
        });
    });}