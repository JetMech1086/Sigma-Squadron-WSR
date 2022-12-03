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

const reportNumber = 6;
const startDate = '2022-11-16';
const endDate = '2022-11-30';
const submissionDate = '2022-12-03';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3490',
  name: 'Operation Christmas Seal',
  ends: '2022-12-31',
  units: 'TIE Corps',
  notes: 'Competition for getting assists in Star Wars Squadrons.  Email your screenshots to vapinganman@gmail.com.  For the assists to count you must have won the match.',
  highlight:false
}, {
  id: '3480',
  name: 'Holos for the Holidays: TIE Corps Edition',
  ends: '2022-12-31',
  units: 'TIE Corps',
  notes: 'Write a brief holo-message intended for your Pilot\'s friends or family back home.  Word count must remain under 1000 words.  Email or DM all submissions to Westric Davalorn (davalorn@gmail.com)',
  highlight:false
}, {
  id: '3487',
  name: 'TIE Corps Jigsaw Puzzle Part 2',
  ends: '2023-03-31',
  units: 'TIE Corps',
  notes: 'Each month a new jigsaw puzzle will be announced and pilots should compete for the best time to solve it.  Screenshots need to show the number of pieces from the bottom left corner of the screen, time shown in the middle and the completed puzzle.  Email screenshots to vapinvanman@gmail.com.  One entry per pilot, multiple submissions will not be counted, only the first.',
}, {
  id: '3441',
  name: 'Signal Scramble Infection',
  ends: '2022-12-31',
  units: 'ISDII Warrior',
  notes: 'Warrior Commodore has tasked the Warrior to make up phrases for the letter combinations and polling the fleet to determine which is the most likely.',
},  {
  id: '3442',
  name: 'TIE Corps in Battle Season 5',
  ends: '2022-12-15',
  units: 'Entire TC',
  notes: 'Current assignments are TIE-TC 163, XvT-TC 62, and XWA-TC 14',
}, {
  id: '3440',
  name: 'The Challenge with Words',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Solve the monthly word search puzzles posted by VA Marenta.',
}, {
  id: '3458',
  name: 'X-Wing Alliance Fast Flights',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Fly the Crazy Eight challenge in the X-Wing Alliance Proving Grounds in an A-Wing and record your fastest time.  Submit screenshots to CPT Cupcake.  All pilots with a time of 7 minutes or less qualify for an ORA!',

}
];

// TODO confirm
const ACTIVITY = {
  // JetMech
  55761: {
    communication: 'Email, Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: 'SSI, Fleetwide Maintenance Among Us',
    notes: 'IS-BR, IAW awarded, Sigma Report submitted',
  },
  // Ayre
  56266: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Let\'s see if we can\'t get some games in!',
  },
  // Pmoneydaman
  56416: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // Mochila
  56444: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Let\'s see if we can get some games in and get you those Lieutenant bars!',
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
    otherActivity: 'None',
    notes: 'Welcome to Sigma!',
  },



  // Hector Von Ricmore
  56410: {
    communication: 'Discord',
    flightActivity: 'LoC\'s, LoS\'s',
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
    flightActivity: 'LoS\'s',
    otherActivity: '',
    notes: 'Great job closing out the month of November!',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // Mernir Floris
  56446:  {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Let\'s see if we can get some games in and get you those Lieutenant bars!',
  },

  //Konar Auryus-Saas
  56417:  {
    communication: 'Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: 'New Flight Certification obtained - 3rd Echelon!',
    notes: 'Great job closing out November!',
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
        Hello Pilots!  As we all muscle through the post-RtF hangover, I'm excited to continue working on growing our squadron.

        </p>
		    <p>Let's have a warm welcome for our newest squad mate, SL Mauro Wynter!  They have already gotten their INPR done as well as submitted their first Uniform and completed TCCORE.  Great work!</p>
        <p>We also bid adieu to some of our former squad mates as they head for the reserves.  Let's wish LT Rion Spencer and LCM Flik Metis well and a safe and speedy return.  </p>
        <p>The month of November is traditionally where we regroup after the exhaustion of RtF.  Now that we've had a chance to recuperate I'm excited to get out and get flying.  </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Welcome SL Mauro Wynter! </li><br></br>
                <li>We are currently looking for our next Squadron Executive Officer.  If you are interested or have any questions please reach out.  This is a good opportunity to start getting your feet wet in a leadership role within the TIE Corps.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>There is quite a bit of movement around the fleet with several CMDR spots that have opened.  If that's something that interests you please reach out and we'll see about getting you there!</li><br></br>
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
      As we close out the month of November I want to thank everyone for their participation during the month.  We have some medals in the works for some of you, but not everyone.  I'd love to get some more shinies to pin on those uniforms and get some of the newe off.  
      Thanks for everything and I look forward to another month of fun and frivolity with all of you.  Long live the Empire!
  
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
