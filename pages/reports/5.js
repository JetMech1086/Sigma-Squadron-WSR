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

const reportNumber = 5;
const startDate = '2022-11-01';
const endDate = '2022-11-15';
const submissionDate = '2022-11-19';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3469',
  name: 'Logo for Airlock Podcast',
  ends: '2022-11-29',
  units: 'TIE Corps',
  notes: 'Design a logo for EH\s own Airlock Podcast, hosted by MAJ LegionX.  The logo needs to be square between 1400x1400 and 3000x3000 pixels. I talso needs to be recognizable when displayed as a smaller icon in a podcast directory',
  highlight:false
}, {
  id: '3461',
  name: 'A Banner for the Challenge Battlegroup',
  ends: '2022-11-30',
  units: 'TIE Corps',
  notes: 'The Challenge Battlegroup needs an updated banner now tha tit has activated Raven Squadron.  Feel free to include the MC-40 Roost, any ships from the OOB, or anything else from teh Challenge\'s history!',
  highlight:false
}, {
  id: '3462',
  name: 'A Patch for the Challenge Battlegroup',
  ends: '2022-11-30',
  units: 'TIE Coprs',
  notes: 'The current patch used when posting Challenge announcements is oudated - it only shows the Challenge, a beauty though she is, and was created by Silwar in a competition from years past.  Develop a new patch to represent the new and evolved Challenge!',
}, {
  id: '3441',
  name: 'Signal Scramble Infection',
  ends: '2022-12-31',
  units: 'ISDII Warrior',
  notes: 'Warrior Commodore has tasked the Warrior to make up phrases for the letter combinations and polling the fleet to determine which is the most likely.',
}, 
 {
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
}, {
  id: '3470',
  name: 'Fleetwide Maintenance',
  ends: '2022-12-02',
  units: 'Entire TC',
  notes: 'Play as many games of Among Us as possible.  While playing as a Crewmate on any map with at least one other TC pilot, complete as many tasks as possible while remaining alive',
  
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
    otherActivity: 'SSI, Fleetwide Maintenance Among Us, X-Wing Alliance Fast Flights',
    notes: 'SS, IS-BW, IAR, IS-BR, IS-CR, IS-SR Awarded',
  },
  // Ayre
  56266: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'MoC-goc Awarded',
  },
  // Pmoneydaman
  56416: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'ISM, MoC-boc awarded. Congratulations on your promotion to LCM! Let\'s see if we can\'t get you out flying!',
  },

  // Mochila
  56444: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Welcome to Sigma!',
  },

  // Vacant
  12345: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },


  // Rion Spencer
  56408: {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Please reach out to us soon, we\'d love to hear from you!',
  },



  // Hector Von Ricmore
  56410: {
    communication: 'Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: 'None',
    notes: 'MoC-boc',
  },


    // Flik Metis
    56378: {
      communication: 'Discord',
      flightActivity: 'None',
      otherActivity: 'None',
      notes: 'ISM Awarded for October, MoC-boc',
    },



  // randyrumrnr
  55758: {
    communication: 'Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: 'New PvP Combat Rating Achieved - Marksman 2nd!',
    notes: 'MoC-boc, PC awarded for October, ORA',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'PC awarded for October, MoC-boc',
  },

  // Mernir Floris
  56446:  {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: 'Welcome to Sigma!',
  },

  //Konar Auryus-Saas
  56417:  {
    communication: 'Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: '',
    notes: 'MoC-boc, ISM for October.  Congratulation on your promotion to LCM!',
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
        Hello Pilots!  With another Raise the Flag in our rear view mirror we look to the future of our squadron.  I'm excited to have the opportunity to work with all of you!

        </p>
		    <p>It's an exciting time with a lot of new faces, let's make sure we're getting out there and making them feel welcome.  We welcome SL Mochila and SL Mernir FLoris to our ranks this month.</p>
        <p>We also bid adieu to some of our former squad mates as they head for the reserves.  Let's wish MAJ Wreckage, LT Chorok Kim and SL Mr_Babo the very best! </p>
        <p>The month of October brought with it a lot of activity, and with that a lot of medals to go around and a couple of promotions!  Congratulations to all who medaled and a special shoutout to LCM Konar Auryus-Saas and LCM Pmoneydaman for their new rank of Lieutenant Commander!  </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Congratulations to LCM's Pmoneydaman and Konar Auryus-Saas on your recent promotions! </li><br></br>
                <li>We are currently looking for our next Squadron Executive Officer.  If you are interested or have any questions please reach out.  This is a good opportunity to start getting your feet wet in a leadership role within the TIE Corps.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>TCiB is live, fly you fools</li><br></br>
                <li> RtF has wrapped up and we have seen some movement among the fleet.  We welcome our newest CMDR CPT andr3 to their new role as the CMDR of Sin Squadron!  </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      Halfway through the month of November and we're doing some good flying.  If you haven't had an opportunity to look at all the fun competitions that are out there please take a look!  We've been having an absolute blast playing Among Us, and the X-Wing Alliance speed-run comp being run by CPT Cupcake is a good time to fire up one of our classic titles.
      Let's get out there and fly and put Sigma on the map! Looking forward to flying with everyone.  Long live the Empire! 
  
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
