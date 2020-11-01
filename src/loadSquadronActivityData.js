import axios from 'axios';

export default async function loadSquadronActivityData(squadronId, startDate, endDate) {
  const { data: squadronData } = await axios.get(`https://gonk.vercel.app/api/squadron?squadronId=${squadronId}`);

  const pilotData = await Promise.all(squadronData.map(async ({ pin }) => {
    const { data: pilotInfo } = await axios.get(`http://gonk.vercel.app/api/activity?pilotId=${pin}&startDate=${startDate}&endDate=${endDate}`)
    return pilotInfo;
  }));

  return pilotData.map((data, i) => ({
    ...squadronData[i],
    ...data,
  }));
}
