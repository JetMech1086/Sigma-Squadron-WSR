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

const reportNumber = 7;
const startDate = '2022-12-01';
const endDate = '2022-12-31';
const submissionDate = '2023-01-02';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3498',
  name: 'Pimp my Ride: Elite Dangerous Edition',
  ends: '2023-01-30',
  units: 'TIE Corps',
  notes: 'Send photos of your most pimped out ride in Elite Dangerous to LC Honsou at eh.honsou@gmail.com or in a discord DM',
  highlight:false
}, {
  id: '3497',
  name: 'It\'s Them! Blast Them!',
  ends: '2023-05-31',
  units: 'TIE Corps',
  notes: 'Take screenshots of your bounty vouchers in Elite Dangerous and send them to COL Miles Prower at tc-itsthem0blasthem@googlegroups.com',
  highlight:false
}, {
  id: '3505',
  name: 'Show Me What You(Tube) Got',
  ends: '2023-01-06',
  units: 'TIE Corps',
  notes: 'Submit the URL of a Star Wars-related YouTube video with a duration of 5 minutes or less with the goal being to submit a video that has mass appeal by being funny, well-made, telling a good story, etc. Content must have a PG-13 level of content or below. Submissions will be played to everyone that shows up for a Saturday VC where we\'ll use the new watch together feature to watch them.',
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

}
];

// TODO confirm
const ACTIVITY = {
  // JetMech
  55761: {
    communication: 'Email, Discord',
    flightActivity: 'LoS\'s',
    otherActivity: 'SSI, Holos for the Holidays',
    notes: 'ORA x3, BS, ISM x2, MoC-soc, IAR, IS-SR awarded',
  },
  // Vacant
  12345: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  // Pmoneydaman
  56416: {
    communication: 'None',
    flightActivity: 'LoC\'s',
    otherActivity: 'None',
    notes: 'Let\'s see if we can get you some more flight time!',
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
    communication: 'Discord, Email',
    flightActivity: 'LoS\'s',
    otherActivity: 'Passed TCCORE, SM/5(Aced it!) and Unit Leadership. Promoted to LT. Updated INPR and Uniform image. New Combat Ratings awarded of Qualified and Beginner along with the 1st Echelon of Flight Certification Wings! Nice job!',
    notes: 'Great work in your first month, very nice! Glad to have you aboard!',
  },



  // Hector Von Ricmore
  56410: {
    communication: 'Discord',
    flightActivity: 'LoC\'s',
    otherActivity: 'None',
    notes: 'Nice job getting some cockpit time!',
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
    flightActivity: 'LoS\'s and LoC\'s',
    otherActivity: '',
    notes: 'Solid performance in December!',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // Tony Girthman
  56466:  {
    communication: 'Email',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Let\'s get you in the Discord so we can organize some games! Welcome to Sigma!',
  },

  //Konar Auryus-Saas
  56417:  {
    communication: 'Discord',
    flightActivity: 'LoC\'s',
    otherActivity: '',
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
        Hello Pilots!  As we bring 2022 to a close I want to thank each of you for what you've contributed to make this a great organization!

        </p>
		    <p>Our new LT Mauro Wynter has come in swinging, completing several IU courses and putting up a healthy LoS count for the month as well.  Nice work Pilot!  We also welcome aboard SL Tony Girthman, welcome to Sigma!</p>
        <p>We also bid adieu to a couple of our former Squad Mates this month.  We say goodbye to LT Ayre and SL Mernir Floris as they head for the reserves.  Good luck and a speedy return. </p>
        <p> As we look forward to 2023 and all the fun it holds, I'm looking forward to seeing what Sigma continues to evolve into as the year progresses.    </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Welcome SL Tony Girthman! </li><br></br>
                <li>We are currently looking for our next Squadron Executive Officer.  If you are interested or have any questions please reach out.  This is a good opportunity to start getting your feet wet in a leadership role within the TIE Corps.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>We welcome the new leaders who will lead the TIE Corps into the future.  Congratulations to AD Silwar Nailo and RA TheBlackxRanger as they assume the roles of COO and RO respectively. </li><br></br>
                <li>We have seen two more games come to the forefront, with Star Wars the Old Republic as a primary game and Elite Dangerous gaining some serious traction.  If you have any questions about these reach out and we'll get you the answers you need.  </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      With 2022 in the rearview mirror we look to the future of 2023 and all the good it has to offer.  I'm excited to be facing a new chapter of the EH TIE Corps with all of you.  With the anniversary of the Emperor's Hammer coming up it's exciting to see the organization continue to evolve as we see new faces join us.  Happy New Year!  Long Live the Empire!
  
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
