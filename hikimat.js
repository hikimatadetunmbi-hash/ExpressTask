//const express = require ("express");

//const app = express();

//app.get ("/" , (req,res) => {
   // res.send ("Welcome to my first server");
//});

//app.listen (3000, () => {
  //  console.log("server is running on http://localhost:3000");

//});

const express = require("express");
const app = express();

const profile = {
    fullName: "Hikimat Adetunmbi",
    nickName: "Hikky",
    age: 23,
    gender:  "Female",
    stateofOrigin: "Oyo State",
    hometown: "Ibadan",
    school: "University of Ilorin",
    department: "Chemisty Department",
    course: "Pure and Appllied Chemistry",
    level: 400,
    hobbies: ["Cooking", "Learning new skills", "Exploring new ideas", "Watching movies"],
    skills: ["Laboratory techniques", "Communication", "JavaScript", " Node.js" , "Express.js"],
    favouriteFood: "Yam and egg sauce",
    favouriteColor: "White",
    careerGoal: "TO build a successful and financially rewarding career where i can keep learning , work in a supportive environment, and use my strengths in both science and technology",
    shortBiography: "I am a passionate and dedicated backend developer with a strong interest in building efficient and pratical solutions.i enjoy learning, exploring new ideas, and  continuously developing my technical skills.",
    picture: "images/profile.jpg",
    socialMedia:{
        instagram:
        "https: //instagram.com/hikimatadetunmbi",
        facebook:
        "https: // facebook,com/adetunmbihikimat"
    },
email: "hikimatadetunmbi@gmail.com",
};

app.use(express.static(process.cwd()));

app.get("/", (req, res) =>{
    res.sendFile(process.cwd() + "/index.html");
});

app.get("/api/profile", (req,res)=>{
   res.json(profile); 
});

app.get("/api/skills", (req,res)=>{
  res.json(profile.skills); 
});

app.get("/api/hobbies", (req,res)=>{
    res.json(profile.hobbies);
});

app.listen (3000, () => {
   console.log("server is running on http://localhost:3000");

});
