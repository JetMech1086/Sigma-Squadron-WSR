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

const reportNumber = 3;
const startDate = '2022-08-28';
const endDate = '2022-09-24';
const submissionDate = '2022-09-25';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3433',
  name: 'CallSIGn for Gundark',
  ends: '2022-10-01',
  units: 'Sigma Squadron',
  notes: 'Sigma Squadron\'s beloved pet Gundark is nameless! Your job is to come up with one that is suitable.',
  highlight:true
}, {
  id: '3431',
  name: 'Sigma Squadrons Vacation BINGO',
  ends: '2022-10-01',
  units: 'Sigma Squadron',
  notes: 'Sigma\'s pilots will be tasked with completing a bingo card on a set of planets from the Star Wars universe as they take a well earned break, on vacation!',
  highlight:true
}, {
  id: '3435',
  name: 'Protect the COM!',
  ends: '2022-09-30',
  units: 'ISDII Warrior',
  notes: 'Earn LoC\'s and LoS\'s with VA Marenta!',
}, {
  id: '3441',
  name: 'Signal Scramble Infection',
  ends: '2022-12-31',
  units: 'ISDII Warrior',
  notes: 'Warrior Commodore has tasked the Warrior to make up phrases for the letter combinations and polling the fleet to determine which is the most likely.',
}, {
  id: '3416',
  name: 'Emperor\'s Hammer at War!',
  ends: '2022-09-30',
  units: 'Entire TC',
  notes: 'Complete a 2v2 against 2 Hard level AI in Empire at War for the fastest time!',
}, {
  id: '3436',
  name: 'Design the Ship and Squadron Mascots',
  ends: '2022-11-30',
  units: 'Entire TC',
  notes: 'Create a graphic for a squadron which must include its patch and mascot in some capacity.',
}, {
  id: '3442',
  name: 'TIE Corps in Battle Season 5',
  ends: '2022-12-15',
  units: 'Entire TC',
  notes: 'Current assignments are TIE-TC 171, XvT-TC 25, and XWA-TC 43',
}, {
  id: '3440',
  name: 'The Challenge with Words',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Solve the monthly word search puzzles posted by VA Marenta.',
}];

// TODO confirm
const ACTIVITY = {
  // Wreckage
  55962: {
    communication: 'Email, Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: '',
    notes: 'ISM, IS-BR, IAR, MoC-boc Awarded',
  },
  // Ayre
  56266: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'MoC-boc Awarded',
  },
  // Pmoneydaman
  56416: {
    communication: 'Discord',
    flightActivity: 'LoC\'s',
    otherActivity: '',
    notes: 'Nice job putting up some points for RtF! MoC-boc Awarded, ISM Awarded',
  },

  // Chorok Kim
  56383: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'MoC-boc awarded - Stop in and say "hi!", we\d love to hear from you!',
  },

  // JetMech
  55761: {
    communication: 'Email, Discord',
    flightActivity: 'LoS\s',
    otherActivity: 'Sigma Vacation Bingo, CallSIGn for Gundark, Signal Scramble Infection',
    notes: 'New PvE Combat Ratings(Ranger 4th, Ranger 3rd) Promoted to CPT',
  },


  // Rion Spencer
  56408: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'MoC-boc Awareded, Stop in and say "hi!", we\'d love to hear from you!',
  },



  // Hector Von Ricmore
  56410: {
    communication: 'Discord',
    flightActivity: 'LoC\'s',
    otherActivity: '',
    notes: 'MoC-boc, PC, CoB Awarded, nice work!',
  },


    // Flik Metis
    56378: {
      communication: 'Discord',
      flightActivity: 'LoC\'s, LoS\'s',
      otherActivity: '',
      notes: 'MoC-boc, MoC-soc, PC, IS-SR, CoB Awarded, nice work during RtF!',
    },



  // randyrumrnr
  55758: {
    communication: 'Discord',
    flightActivity: 'LoC\'s, LoS\'s, SP Battles completed',
    otherActivity: 'Review submitted for XvT-16, New Co-Op Rating Campaigner 4th',
    notes: 'MoC-boc, MoC-doc, PC Awarded, Nice work on putting up some points during RtF',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: 'SP Battles!',
    otherActivity: 'Review submitted for TIC-TC 126',
    notes: 'Nice work on the SP front during RtF!',
  },

  // Mr_Babo
  56395:  {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Have not heard from you, please reach out',
  },

  //Konar Auryus-Saas
  56417:  {
    communication: 'Discord',
    flightActivity: 'LoC\'s',
    otherActivity: '',
    notes: 'MoC-boc, CoB, PC Awarded, nice job during RtF',
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

        <center><h4><span style={{ color: "#401562" }}>Squadron XO's Speech</span></h4></center>
        <p>
        Greetings Pilots!  We've had a busy month or so since our last report.  We welcome Pmoneydaman, Rion Spencer, Hector Von Ricmore, Mr_Babo and Konar Auryus-Saas to Sigma Squadron.
        In the same breath we congratulate Pmoneydaman, Chorok Kim, Rion Spencer, Hector Von Ricmore and Konar Auryus-Saas on their promotions to LT, way to go!
        </p>
		    <p>We also have some Sigma Comps wrapping up soon, so get your submissions in ASAP!</p>
        <p>September is coming to a close, so lets make sure we get all the MSE point to which we're entitled.  Let's get some medals pinned on some of those fresh uniforms! </p>
        <p>RTF begins in just shy of a week.  This is our biggest fleet-wide competition of the year and I know that Sigma is going to crush it!  </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Conrats to Pmoneydaman, Chorok Kim, Rion Spencer, Hector Von Ricmore, and Konar Auryus-Saas.</li><br></br>
                <li>Get your comp submissions in  </li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>TCiB is live, fly you fools</li><br></br>
                <li>Congratulations to LC Talon Jade on his promotion to CMDR of Sin Squadron!  </li><br></br>
                <li>RTF starts 10/1, lets get pumped! </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      I can't tell everyone how excited I am that we've got a full house heading into Raise the Flag!  It's going to be an intense month long competition, so don't
      forget to pace yourselves and hydrate.  It's a marathon not a sprint!  Long live the Empire!  
  
      <p>CM JetMech</p>
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
