// prosject scripts
import { Competition } from "./components/competitions.js";
import { useCompetitions } from "./api/api.js";
import { Clock } from "./components/clock.js";

// referencing html containers
var navigation = document.getElementById("nav-tab");
var content = document.getElementById("nav-tabContent");
var dateDisplay = document.getElementById("date-display");

// what timeframe the website is searching
dateDisplay.appendChild(new Clock(-2, 7).lable);

// using competitions data
var competitions = await useCompetitions();

competitions.map((competitionData, i) => {
  const competition = new Competition(
    competitionData.id,
    competitionData.name,
    competitionData.logo
  );
  navigation.appendChild(competition.navigationElement);
  content.appendChild(competition.contentElement);
});
