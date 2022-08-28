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

const reportNumber = 18;
const startDate = '2021-10-25';
const endDate = '2021-10-31';
const submissionDate = '2021-10-31';

const citations = [
  'XvT-TC 10',
  'XvT-TC 14',
  'XvT-TC 31',
  'XvT-TC 41',
  'XvT-TC 70',
  'XWA-TC 1',
  'XWA-TC 2', 
];

const citationsChange ='+0';

const orders = [{
  name: 'TIE-TC 3',
  id: 3,
  title: 'New Dimensions',
}, {
  name: 'TIE-TC 10',
  id: 10,
  title: 'Battle for the Death Star',
}, {
  name: 'TIE-TC 16',
  id: 16,
  title: 'Dacian Downfall',
}, {
  name: 'TIE-TC 19',
  id: 19,
  title: 'The Tethys Honeymoon',
}, {
  name: 'TIE-TC 30',
  id: 30,
  title: 'Save the Emperors Archives',
}, {
  name: 'TIE-TC 153',
  id: 390,
  title: 'Koph Supremacy Project',
}];

const competitions = [{
  id: '3321',
  name: 'Sinfantry Training',
  ends: '2022-02-05',
  units: 'Sin Squadron',
  notes: 'Every first Saturday of the month, Sin Squadron will assemble for PvP matches in Star Wars Squadrons, Battlefront, and Star Conflict.',
  highlight: true,
}, {
  id: '3323',
  name: 'SINGO!',
  ends: '2021-11-01',
  units: 'Sin Squadron',
  notes: 'Pilots will all receive a card similar to BINGO aka SINGO. Each square will consist of tasks from updating their Wiki page and INPR to earning an LoC with a fellow TC pilot or getting 10 kills in a match. ',
  highlight: true,
}, {
  id: '3310',
  name: 'Trivia Grand Tour: Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most LoCs or LoSs in Squadrons.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoSs earned.',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most single player missions played.',
}];

// TODO confirm
const ACTIVITY = {
  // Wreckage
  55962: {
    communication: 'Email, Discord',
    flightActivity: 'Battlefront PvP and PvE, Star Conflict PvE',
    otherActivity: 'Sinfantry Training',
    notes: '',
  },
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'XVT Battles',
    otherActivity: '',
    notes: 'Way to knock out those battles, IAR in the mail.',
  },

  // Earnim Branet
  11276: {
    communication: 'None',
    flightActivity: '',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },



  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and PvP, Battlefront 2 PvE',
    otherActivity: 'IOA Duties, Trivia Grand Tour, Sinfantry Training ',
    notes: 'Thanks for running Sinfantry Training when I had to leave early.',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Robert Hogan
  55859: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Graphics',
    notes: 'Graphics are looking nice, let me know if there are any submissions you did not get RTF points for',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Sinfantry Training',
    notes: 'Thanks for showing up to Sinfantry Training',
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

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Commander's Speech</span></h4></center>
        <p>
        Happy Halloween to all those that celebrate. I hope you all get plenty of candy today and have a great day. RTF is down to the last hours and currently Sin is still one of 
        the top 5 squadrons on the leaderboard, number 5 to be exact. Make sure to get any legions, pilot files, graphics, or fiction submitted before the deadline. I will be away again next
        week, going to a football and hockey game. SkyShadow will be in command while I am away.
        </p>
		    <p>Sinfantry Training had another solid turnout yesterday. I am sorry to those that were in attendance that I had to leave earlier than expected. Mrs. Wreckage was a little 
        too excited to go to the pumpkin patch and corn maze and wanted to head out sooner than I had expected. I'm glad that you all kept playing once I left. </p>
        <p>Tomorrow marks the last day to submit any SINGO screenshots that you may have left. So please make sure to get those to me as soon as you can. </p>
        <p>Lastly, with the month coming to a close that means MSEs will be completed soon. With the crazy month that it's been, and all the activity you all have pushed out, looks 
        like I am going to be busy. I will try to knock those out as soon as I can. I'm expecting a lot of Merit awards this month for you all. Great job!</p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>Hours left in RTF and we are holding strong as a top 5 squadron</li><br></br>
                <li>Thanks to those that showed up for Sinfantry Training. Next Sinfantry Training will be December 1st. </li><br></br>
                <li>SINGO closes tomorrow . Make sure to get those screenshots to me.</li><br></br>
                <li>Easy way to knock out squares on SINGO and get RTF points. Go fly Robert Hogans TIE-Free mission and don't forget to leave a review. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>The Warrior remains in 3rd place for RtF.</li><br></br>
                <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
                <li>RTF Bonus Competitions #8, #9, and #10 submission deadlines have been extended to 23:59 GMT on Sunday the 31st.   </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      RTF was a blast. Sin Squadron had a solid showing for the event. Last I checked we were 1 of only 2 squadrons to have 100% participation from all of our pilots. 
      I appreciate all of your efforts and services to the empire. Enjoy your time with me gone next week, and feel free to throw a party while I am gone. You all deserve 
      it, just charge it to my tab.  
      <p>For Sin!</p>
      <p>CPT Wreckage</p>
      <i><span style={{ color: "#bb0a1e" }}>"The old ones say we Sinners are descended from the Emperor himself. From the time a Sinner could fly, they were baptized in the fire of combat. 
        Taught never to retreat, never to surrender. Taught that death on the battlefield in service to the Empire was the greatest glory they could achieve."</span></i>
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
