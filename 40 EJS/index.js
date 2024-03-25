import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var day = "";
var activity = "";

function setDay(req, res, next) {
    const d = new Date("22 March 2024");
    let dayIndex = d.getDay();
    day = days[dayIndex];
    if (dayIndex == 0 || dayIndex == 6) {
        activity = "have fun!"
    } else {
        activity = "work hard!"
    }
    next();
}

app.use(setDay);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",
  { day: day,
    activity: activity}
  );
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});