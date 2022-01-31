import { storeData, retriveData } from "./localstorage.js";
import { timeJumpDaysISO } from "../utils/utils.js";

async function getCompetitions() {
  await fetch("https://api.football-data.org/v2/competitions?plan=TIER_ONE", {
    headers: {
      "X-Auth-Token": "2d6f43482c8e40bbbc5d67828eb5c2e2",
    },
  })
    .then((response) => response.json())
    .then((body) =>
      body.competitions.map((competition) => {
        return {
          id: competition.id,
          name: competition.name,
          logo: competition.emblemUrl || competition.area.ensignUrl,
        };
      })
    )
    .then((data) =>
      storeData("competitions", {
        lastFetch: new Date().toISOString(),
        data: data,
      })
    )
    .catch((error) => console.log(error));
}

async function getMatches(id) {
  await fetch(
    `https://api.football-data.org/v2/competitions/${id}/matches?dateFrom=${timeJumpDaysISO(
      -2
    )}&dateTo=${timeJumpDaysISO(7)}`,
    {
      headers: {
        "X-Auth-Token": "2d6f43482c8e40bbbc5d67828eb5c2e2",
      },
    }
  )
    .then((response) => response.json())
    .then((body) =>
      body.matches.map((match) => {
        return {
          id: match.id,
          dateOfMatch: match.utcDate,
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
        };
      })
    )
    .then((data) =>
      storeData(`matches-${id}`, {
        lastFetch: new Date().toISOString(),
        data: data,
      })
    )
    .catch((error) => console.log(error));
}

export const useCompetitions = async () => {
  if (retriveData("competitions")) {
    let competitions = retriveData("competitions");
    if (
      new Date().toISOString().substring(0, 10) !==
      competitions.lastFetch.substring(0, 10)
    ) {
      await getCompetitions();
      return retriveData("competitions").data;
    }
      return competitions.data;
  } else {
    await getCompetitions();
    return retriveData("competitions").data;
  }
};

export const useMatches = async (id) => {
  if (retriveData(`matches-${id}`)) {
    let matches = retriveData(`matches-${id}`);
    if (
      new Date().toISOString().substring(0, 10) !==
      matches.lastFetch.substring(0, 10)
    ) {
      await getMatches(id);
      return retriveData(`matches-${id}`).data;
    }
    return matches.data;
  } else {
    await getMatches(id);
    return retriveData(`matches-${id}`).data;
  }
};
