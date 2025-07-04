export default async function getConstructorsStanding(season) {
  return fetch(
    `https://api.jolpi.ca/ergast/f1/${season}/constructorStandings.json?limit=1000`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const constructorsStanding = data.MRData.StandingsTable.StandingsLists;
      return constructorsStanding;
    });
}
