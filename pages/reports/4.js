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

const reportNumber = 4;
const startDate = '2022-09-25';
const endDate = '2022-10-29';
const submissionDate = '2022-10-29';

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
}];

// TODO confirm
const ACTIVITY = {
  // Wreckage
  55962: {
    communication: 'Email, Discord',
    flightActivity: 'LoC\'s, LoS\'s',
    otherActivity: '',
    notes: 'ISM, IS-BR, IAR, MoC-boc Awarded, nice work during RtF!',
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
    notes: 'MoC-boc, PC, CoB Awarded, nice work during RtF!',
  },


    // Flik Metis
    56378: {
      communication: 'Discord',
      flightActivity: 'LoC\'s, LoS\'s',
      otherActivity: 'Promoted to 3rd Flight Echelon!',
      notes: 'MoC-boc, MoC-soc, PC, IS-SR, CoB Awarded, Promoted to LCM!  Nice work during RtF!',
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
    notes: 'MoC-boc, CoB, PC Awarded, nice job during RtF!',
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
        Hello Pilots!  We've had a busy month with RtF in full swing.  Thank you to everyone who put up some numbers this year, we had a very respectable contribution from Sigma Squadron this year!

        </p>
		    <p>I'm looking forward to the next couple of months as we get to know each other in the post RtF landscape.</p>
        <p>October and RtF are coming to a close, so let's make sure we're getting some numbers up there for those who haven't yet had an opportunity! </p>
        <p>RTF wraps on Monday at 2359Z, so if you want to get any more activity in, this is the time to do it!  </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Congratulations to LCM Flik Metis on your recent promotion!</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>TCiB is live, fly you fools</li><br></br>
                <li> RtF is getting ready to come to a close!  If you still have some flying in you, go out there and put some points on the board! </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      As RtF comes to a close I find myself lucky enough to be the SQXO of Sigma.  I am so incredibly proud of the work that was done this month.  For those of you who haven't put any points on the board, we still have a day and a half or so, get out there and fly!
      I couldn't be more excited to see what the next few months bring as we find our footing as a new squadron.  Love live the Empire!  
  
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
