import { useMatches } from "../api/api.js";

export class Competition {
  /*
  An object that represent a competition.
  */
  constructor(id, name, logo) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.data = [];
    this.navigationElement = this.#createNavigationElement();
    this.contentElement = this.#createInitTabElement()
  }

  #createNavigationElement = () => {
    let btn = document.createElement("button");
    btn.id = `nav-${this.name.replace(/ /g, "-")}-tab`;
    btn.className = "row nav-link";
    btn.setAttribute("data-bs-toggle", "tab");
    btn.setAttribute("data-bs-target", `#nav-${this.name.replace(/ /g, "-")}`);
    btn.setAttribute("aria-controls", `nav-${this.name.replace(/ /g, "-")}`);
    btn.setAttribute("role", "tab");
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-selected", true);

    btn.innerText = this.name;

    btn.onclick = async () => {
      this.data = await useMatches(this.id)
      if (this.data.length !== 0){
        this.#createContentElement()
      } else {
        this.#createNoContentElemement()
      }
    };
    
    return btn;
  };

  #createInitTabElement = () => {
    let elm = document.createElement("div");
    elm.id = `nav-${this.name.replace(/ /g, "-")}`;
    elm.className = "tab-pane fade";
    elm.setAttribute("role", "tabpanel");
    elm.setAttribute(
      "aria-labelledby",
      `nav-${this.name.replace(/ /g, "-")}-tab`
    );

    return elm
  }

  #createNoContentElemement = () => {
    this.contentElement.innerHTML = ""

    let flexContainer = document.createElement("div")
    flexContainer.className = "d-flex justify-content-center"

    let flexItem = document.createElement("div")
    flexItem.className ="text-center"

    let image = document.createElement("img")
    image.src = "https://tihlde.org/static/media/empty.23b3a35d.svg"
    image.className = "p-3 img-fluid"
    image.style.maxWidth = "300px"

    let text = document.createElement("p")
    text.innerText = "Sorry. Looks like there are no matches in this league for now."
    text.className = "m-3"

    flexItem.appendChild(image)
    flexItem.appendChild(text)
    flexContainer.appendChild(flexItem)

    this.contentElement.appendChild(flexContainer)
  }

  #createContentElement = () => {
    this.contentElement.innerHTML = ""
    let table = document.createElement("table");
    table.className = "table table-striped";

    let tableHeader = document.createElement("thead")
    let trHead = document.createElement("tr")

    let timeHead = document.createElement("th")
    timeHead.innerText = "⏰ Date"
    trHead.appendChild(timeHead)

    let homeTeamHead = document.createElement("th")
    homeTeamHead.innerHTML = "🏠 Home Team"
    trHead.appendChild(homeTeamHead)

    let awayTeamHead = document.createElement("th")
    awayTeamHead.innerText = "🛫 Away Team"
    trHead.appendChild(awayTeamHead)

    tableHeader.appendChild(trHead)

    let tableBody = document.createElement("tbody");
    this.data.map((match, i) => {
      let tr = document.createElement("tr");
      
      let time = document.createElement("td")
      time.innerText = `${match.dateOfMatch.substring(0, 10)}`
      tr.appendChild(time)

      let homeTeam = document.createElement("td")
      homeTeam.innerText = `${match.homeTeam.name}`
      tr.appendChild(homeTeam)

      let awayTeam = document.createElement("td")
      awayTeam.innerHTML = `${match.awayTeam.name}`
      tr.appendChild(awayTeam)

      tableBody.appendChild(tr)
    });

    table.appendChild(tableHeader)
    table.appendChild(tableBody)
    this.contentElement.appendChild(table)

  };
}
