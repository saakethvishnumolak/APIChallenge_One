
document.getElementById("getSchedule").addEventListener("click", fetchResults)
let raceTable = document.querySelector("#table");


let headers = ["Season", "Round", "Information", "Race Name", "Country", "Date", "Time"];

function fetchResults() 
{

    let raceInfo = fetch("http://ergast.com/api/f1/current.json")
        .then((response) => response.json())
        .then((data) => {

            let table = document.createElement("table");
            let headerRow = document.createElement("tr");
        
            headers.forEach(headerText => {
                let header = document.createElement("th");
                let textNode = document.createTextNode(headerText);
                header.appendChild(textNode);
                headerRow.appendChild(header);
            });
        
            table.appendChild(headerRow);
            
            //console.log(data.MRData.RaceTable.Races);

            data.MRData.RaceTable.Races.forEach(race => {
                let row = document.createElement("tr");

                //console.log(race.Circuit.Location.country);
        
                Object.values(race).forEach(text => {

                    if(text !== "Circuit")
                    {
                        let cell = document.createElement("td");
                        let textNode = document.createTextNode(text);
                        cell.appendChild(textNode);
                        row.appendChild(cell);
                    } else {
                        let cell = document.createElement("td");
                        let textNode = document.createTextNode(text);
                        cell.appendChild(textNode);
                        row.appendChild(cell);
                    }
                    
                })
        
                table.appendChild(row);
        
            });
        
            raceTable.appendChild(table);
        })

}





    
