// prosject scripts
import { Competition } from "./components/competitions.js";
import { useCompetitions } from "./api/api.js";
import { timeJumpDays } from "./utils/utils.js";

// referencing html containers 
var navigation = document.getElementById("nav-tab");
var content = document.getElementById("nav-tabContent");
var dateDisplay = document.getElementById("date-display")

// what timeframe the website is searching
dateDisplay.innerText = `${timeJumpDays(-2).toDateString()} - ${timeJumpDays(7).toDateString()}`

// using competitions data
var competitions = useCompetitions();

competitions.map((competitionData, i) => {
  const competition = new Competition(
    competitionData.id,
    competitionData.name,
    competitionData.logo
  );
  navigation.appendChild(competition.navigationElement);
  content.appendChild(competition.contentElement);
});

// enable tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
