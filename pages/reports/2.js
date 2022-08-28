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

const reportNumber = 2;
const startDate = '2022-08-08';
const endDate = '2022-08-028';
const submissionDate = '2022-08-28';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3433',
  name: 'CallSIGn for Gundark',
  ends: '2022-08-31',
  units: 'Sigma Squadron',
  notes: 'Sigma Squadron\'s beloved pet Gundark is nameless! Your job is to come up with one that is suitable.',
  highlight:true
}, {
  id: '3431',
  name: 'Sigma Squadrons Vacation BINGO',
  ends: '2022-08-31',
  units: 'Sigma Squadron',
  notes: 'Sigma\'s pilots will be tasked with completing a bingo card on a set of planets from the Star Wars universe as they take a well earned break, on vacation!',
  highlight:true
}, {
  id: '3413',
  name: 'Warrior\'s Ace Pilot',
  ends: '2022-08-31',
  units: 'ISDII Warrior',
  notes: 'Achieve the highest score in a Star Wars Squadrons Dogfight.',
}, {
  id: '3389',
  name: 'Signal Scramble Infection',
  ends: '2022-08-27',
  units: 'ISDII Warrior',
  notes: 'Warrior Commodore has tasked the Warrior to make up phrases for the letter combinations and polling the fleet to determine which is the most likely.',
}, {
  id: '3418',
  name: 'TIE Fighter Mineracing!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Pilots will enter the TIE Fighter game combat chamber and load TIE campaign Battle 5, Mission 1 mineclearing. Upon arrival in the combat area, the pilot will immediately activate their in-flight video recorder and destroy 18 space mines and four containers ',
}, {
  id: '3417',
  name: 'Deal me in!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Play as many games of Pazaak as you want, but you may only submit your top 15 screenshots to VA Marenta at marenta@gmail.com.',
}, {
  id: '3422',
  name: 'Rho Squadron Banner',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Rho Squadron is in need of a new banner for their squadron profile and reports!',
}, {
  id: '3398',
  name: 'Squadrons Feats of Strength I',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Complete as many levels objectives as you can in Star Wars Squadorns. There are EIGHT feats of strength with increasing difficulty. Settings: Squadrons, Fly Solo FB vs AI (with AI pilots ON) Duration: 30 mins Map: Yavin',
}];

// TODO confirm
const ACTIVITY = {
  // Wreckage
  55962: {
    communication: 'Email, Discord',
    flightActivity: 'SC, SWS',
    otherActivity: 'Signal Scramble Infection',
    notes: 'Working on my TCiB mission currently',
  },
  // Ayre
  56266: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Hope you had a great vacation. Time to get back to blowing up Rebels!',
  },
  // Flax Rogers
  56344: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Lets get you promoted to LT soon',
  },

  // Chorok Kim
  56383: {
    communication: 'Discord',
    flightActivity: '',
    notes: 'We hope to see you in the skies soon',
  },

  // JetMech
  55761: {
    communication: 'Email, Discord',
    flightActivity: 'BF2, SWS, TC Battles ',
    otherActivity: '',
    notes: 'Glad to have you be my side',
  },


  // Killnobi McGee
  56365: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: 'Have not heard from you. please reach out.',
  },



  // Billy Lee
  56358: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: 'Have not heard from you. please reach out.',
  },


    // Flik Metis
    56378: {
      communication: 'Discord',
      flightActivity: 'SWS',
      otherActivity: '',
      notes: 'Great job getting promoted',
    },



  // randyrumrnr
  55758: {
    communication: 'Discord',
    flightActivity: 'TC Battles, PvE Flying',
    otherActivity: 'Signal Scramble Infection, Runng 2 competitions.',
    notes: 'Thank you for running those comps!',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'There are some TCIB orders with your name on it',
  },
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

        <center><h4><span style={{ color: "#401562" }}>Squadron Commander's Speech</span></h4></center>
        <p>
        Hey Sigma, hope all is well. I know this month has been kind of a crazy month with the whole squad getting situated. We are off 
        and running and even had a SL get promoted recently. Congrats to our very own now LT Flik Metis. Get Flik a drink the next to you fly with him.
        </p>
		    <p>We also have some Sigma Comps going on. Check out the competitions section down below and get a submission in.</p>
        <p>August is almost over so get those last minute MSE points in so you can get yourself a nice shiny medal. </p>
        <p>Prepare yourselves,  RTF is coming.</p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Conrats to LT Flik Metis on promotion</li><br></br>
                <li>Get you comp submissions in  </li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>TCiB is live, fly you fools</li><br></br>
                <li>Congrats to Warriors own Westric Davalorn and SkyShadow on their well deserved promotions  </li><br></br>
                <li>RTF will be here very soon  </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      In closing, there are a few of you we have been trying to reach. We understand that real 
      life gets busy, especially right now with school starting back up and everyone being tied up in work. All we 
      ask is that you communicate with us.  Remember to reach out to myself or your flight leader if you have any questions or concerns.  
  
      <p>MAJ Wreckage</p>
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
