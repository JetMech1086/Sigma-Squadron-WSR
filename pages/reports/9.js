/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 9;
const startDate = '2023-02-01';
const endDate = '2023-02-28';
const submissionDate = '2023-03-01';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3532',
  name: 'Impperial Storm 5',
  ends: '2023-03-31',
  units: 'TIE Corps',
  notes: 'Turn based cooperative wargame with the entirety of the TIE Corps facing off against the Ishtari!',
  highlight:true
}, {
  id: '3497',
  name: 'It\'s Them! Blast Them!',
  ends: '2023-05-31',
  units: 'TIE Corps',
  notes: 'Take screenshots of your bounty vouchers in Elite Dangerous and send them to COL Miles Prower at tc-itsthem0blasthem@googlegroups.com',
  highlight:false
}, {
  id: '3531',
  name: 'Sigma Squadron Shootout - Season 2',
  ends: '2023-04-01',
  units: 'Sigma Squadron',
  notes: 'Work together as a squadron to wrack up 5000 kills during the month of March! Send your screenshots from your won games to your respective Flight Leader',
  highlight:true
}, {
  id: '3501',
  name: 'Signal Scramble Infection',
  ends: '2023-04-30',
  units: 'ISDII Warrior',
  notes: 'Warrior Commodore has tasked the Warrior to make up phrases for the letter combinations and polling the fleet to determine which is the most likely.',
},  {
  id: '3502',
  name: 'The Challenge with Words',
  ends: '2023-04-30',
  units: 'TIE Corps',
  notes: 'At the beginning of each month VA Marenta will generate a word search and post the link alon gwith announcing the previous month\'s entries.  The fastest pilots will place for awards.',
}, {
  id: '3494',
  name: 'Analyzing the Ishtari Tactics',
  ends: '2023-03-31',
  units: 'TIE Corps',
  notes: 'Teams of 2 compete in an Empire at War league during the first quarter of the year, accruing points for wins, losses, and fast wins.',
}, {
  id: '3487',
  name: 'TIE Corps Jigsaw Puzzle Part 2',
  ends: '2023-03-31',
  units: 'TIE Corps',
  notes: 'Each month a new puzzle will be posted and pilots will compete for the best time with medals up for grabs to the four fastst pilots.  Screenshots need to show the number of pieces form the bottom left corner of the screen, the time in the middle and the completed puzzle. ',

}, {
  id: '3533',
  name: 'Imperial Storm 5 - Fiction Bonus',
  ends: '2023-03-14',
  units: 'TIE Corps',
  notes: 'During the inital 14 days of Imperial Storm a bonus fiction competition will be run. We are looking for 500 words minimum, the prompt will be in the Discord from the SIMS',
  highlight:true
}, {
  id: '3517',
  name: 'SWTOR Conquest Points Challenge',
  ends: '2023-03-28',
  units: 'TIE Corps',
  notes: 'A weekly event to earn as many conquest points as possible in SWTOR.  Points to be self reported to a GoogleDoc located on the competition page.',
}
];

// TODO confirm
const ACTIVITY = {
  // JetMech
  55761: {
    communication: 'Email, Discord',
    flightActivity: 'LoS\'s, LoC\'s',
    otherActivity: 'SSI, INPR Updated, Report Submitted, In work revising MP/2',
    notes: '',
  },
  // Solace
  56485: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Let\'s see if we can\'t get you some time in the cockpit this month!',
  },
  // Pmoneydaman
  56416: {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Please reach out, we\'d love to hear from you!',
  },

  // Vacant
  12345: {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // Matthew Steel
  56456: {
    communication: 'Email, Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: '18 IU Courses Passed, including SM/5, New Uniform Submitted, Reached 5th echelon of Flight Certification, Marksman 2nd and Private 4th. Nice work!',
    notes: 'Welcome to Sigma!',
  },


  // Mauro Wynter
  56453: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: '',
    notes: 'Please reach out, we\'d love to hear from you!',
  },



  // Hector Von Ricmore
  56410: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },


    // Vacant
    12345: {
      communication: '',
      flightActivity: '',
      otherActivity: '',
      notes: '',
    },



  // randyrumrnr
  55758: {
    communication: 'Discord',
    flightActivity: 'LoS\'s, LoC\'s, SP XvT-TC 125',
    otherActivity: 'Reviewed XvT-TC 125, New PvP Rating - Marksman 1st, Achieved 14th Echelon of Flight Certification, Sigma Shootout Comp Approved, Distinguished Flying Cross Awarded, nicely done!',
    notes: 'Excellent work this month, looking forward to the second season of the Sigma Shootout!',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: 'SP Missions TIE-TC 188, 182, 180, 174, 155, 144, 143, 141 and TIC-BHG 3',
    otherActivity: 'None',
    notes: 'Very commendable work in the month of February! Nice flying!',
  },

  // Tony Girthman
  56466:  {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Please reach out! We\'d love to hear from you!',
  },

  //Konar Auryus-Saas
  56417:  {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: '4th Echelon Flight Certification Earned',
    notes: 'Looking forward to seeing you get some flight time in March!',
  }
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.PIN]) {
      return { ...ad, ...additionalActivityData[ad.PIN] };
    }

    return ad;
  });
}

export default function Report({ activityData }) {
  if (activityData === null) {
    return 'Loading...';
  }

  const activity = appendActivityData(activityData, ACTIVITY);

  return (
    <>
      <Heading reportNumber={reportNumber} />

      <ReportDates
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro showUniform>

        <center><h4><span style={{ color: "#401562" }}>Squadron CMDR's Speech</span></h4></center>
        <p>
        Hello Pilots!

        </p>
		    <p>We had some more staffing changes in the month of February, please welcome our new SQXO Lieutenant Matthew Steel! We also have bid farewell to Sub-Lieutenant Drake Sundree and we wish him well wherever his path takes him next.</p>
        <p>Imperial Storm 5 is on! We've only seen the first couple of moves so far, and we haven't run into our opponent just yet, but it's only a matter of time. I'm looking forward to getting some flight time with all of you in the coming month as we do our best to route the Ishtari scourge! </p>
        <p> We've also got a comp that just started called the Sigma Shootout. A very special thanks to Lieutenant Colonel randyrumrnr for running this one again. This is a kill counting comp where we track our kills across the various platforms for the month. Let's go out there and give 'em heck!' </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Welcome LT Matthew Steel, our new Squadron Executive Officer! </li><br></br>
                <br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>Imperial Storm is on and will be the bulk of the headlines for the month of March. There is also some news expected on the Elite Dangerous front as the COO's office continues their evaluation of the proposal to make it a new primary game. Thanks to all who have spent some time working the bugs out of that. </li><br></br>
                <li>  </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      Imperial Storm marks our first fleetwide competition for the year. I'm super excited to get the privilege of being a part of the greatest squadron on the greatest flagship in the Emperor's Hammer TIE Corps. Let's go out there and show them what Sigma and the Warrior are made of! Long live the Empire!
  
      <p>CPT JetMech</p>
      <i><span style={{ color: "#bb0a1e" }}>"Let the sky fall"</span></i>
      </Closing>

      <Footer />
    </>
  );
}

/* eslint react/forbid-prop-types: 0 */
Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadActivityData(config.squadronId, startDate, endDate);

  return {
    props: { activityData }, // will be passed to the page component as props
  };
}
