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

const reportNumber = 8;
const startDate = '2023-01-01';
const endDate = '2023-01-31';
const submissionDate = '2023-02-02';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3513',
  name: 'Commodity Rush Time',
  ends: '2023-02-08',
  units: 'TIE Corps',
  notes: 'Find the best trade routes or mining hot spots in Elite Dangerous and send your positive profit screenshots to MAJ LegionX',
  highlight:false
}, {
  id: '3497',
  name: 'It\'s Them! Blast Them!',
  ends: '2023-05-31',
  units: 'TIE Corps',
  notes: 'Take screenshots of your bounty vouchers in Elite Dangerous and send them to COL Miles Prower at tc-itsthem0blasthem@googlegroups.com',
  highlight:false
}, {
  id: '3512',
  name: 'Scouting New Star Systems',
  ends: '2023-02-08',
  units: 'TIE Corps',
  notes: 'Collect exploration data in Elite Dangerous and send your data turn-in screens to MAJ LegionX',
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
  id: '3511',
  name: 'Thunder\'s Assassin Invitational',
  ends: '2023-02-08',
  units: 'TIE Corps',
  notes: 'Complete Assassination missions in Elite Dangerous and submit your screenshots to MAJ LegionX',
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
    otherActivity: 'SSI, Thunder Assassin Invitational, Commodity Rush Time, Squadron Report, Flight Certification 15th Echelon reached',
    notes: 'IS-SR',
  },
  // Solace
  56485: {
    communication: 'Discord',
    flightActivity: 'LoC\'s',
    otherActivity: 'Promoted to Lieutenant, congratulations! New PvP rating achieved, Trainee',
    notes: 'Welcome to Sigma!',
  },
  // Pmoneydaman
  56416: {
    communication: 'None',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: 'Flight Certification 2nd Echelon Achieved',
    notes: 'Love to see that flight time!',
  },

  // Mochila
  56444: {
    communication: 'None',
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


  // Mauro Wynter
  56453: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'ISM and ORA',
    notes: 'Please reach out, we\'d love to hear from you!',
  },



  // Hector Von Ricmore
  56410: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Let\'s see if we can\'t get you back in the cockpit soon!',
  },


    // Drake Sundree
    56493: {
      communication: 'Discord',
      flightActivity: 'None',
      otherActivity: 'None',
      notes: 'Welcome to Sigma!  Let\'s see if we can get your first activity under your belt and get those Lieutenant bars!',
    },



  // randyrumrnr
  55758: {
    communication: 'Discord',
    flightActivity: 'LoS\'s, SP XvT-TC 37',
    otherActivity: 'Reviewed XvT-TC 37, New PvE Rating, Campaigner 3rd!',
    notes: 'Nice work!  I love seeing some BSF\'s come across!',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: 'SP TIE-TC 139, TIE-TC 128, TIE-TC 130, TIE-F 1',
    otherActivity: 'None',
    notes: 'Nice work in January!  I love seeing the SP compendium get a workout!',
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
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: 'New PvE and PvP Ratings, Qualified and Marksman 3rd respectively',
    notes: 'Good work getting out there flying!',
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
		    <p>We had some more staffing changes in the month of January, let's give a warm welcome to LT Solace and SL Drake Sundree as they join us in Sigma.</p>
        <p>2023 promises to bring with it a lot of fun as we look forward to the next big fleetwide events.  Imperial Storm is going to be here next month, more details to follow. </p>
        <p> I can't wait to get into the mix in another fleetwide comp with everyone, let's show them what Sigma can do! </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Welcome LT Solace and SL Drake Sundree </li><br></br>
                <li>We are currently looking for our next Squadron Executive Officer.  If you are interested or have any questions please reach out.  This is a good opportunity to start getting your feet wet in a leadership role within the TIE Corps.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>Eagle Squadron bids adieu to their former CMDR and is looking for someone to lead them into the new year.  If you're interested please reach out and we'll have a conversation about it. </li><br></br>
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
      We're off to a great start in 2023 and I'm super thrilled to see everyone getting engaged.  I encourage each of you to try something new this month.  If you're typically a Squadrons only pilot, branch out and give one of our other platforms a try.  If you don't typically write fiction, jot down some thoughts on paper.  You'd be surprised at your creativity.  As always, I couldn't be more proud of the team we have here and I'm excited to have the opportunity to be a part of it. Long live the Empire!
  
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
