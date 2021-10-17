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

const reportNumber = 16;
const startDate = '2021-10-11';
const endDate = '2021-10-17';
const submissionDate = '2021-10-17';

const citations = [
  'XvT-TC 10',
  'XvT-TC 14',
  'XvT-TC 31',
  'XvT-TC 41',
  'XvT-TC 70',
  'XWA-TC 1',
  'XWA-TC 2', 
];

const citationsChange ='+2';

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
  id: '3332',
  name: 'Raise the Flag Bonus Competition #6: SWS PvP',
  ends: '2022-10-22',
  units: 'TIE Corps',
  notes: 'The goal will be to submit via email to plif346@gmail.com your SWS PvP screenshot with the highest score from a winning match.',
  highlight: false,
}, {
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
    flightActivity: 'XWA SP, Star Conflict PvP, Battlefront 2 PvP',
    otherActivity: 'SP Reviews',
    notes: 'Hope that you\'re having a great vacation!',
  },
  // Leone123
  56159: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: 'Don\'t forget to check in regularly on Discord.',
  },
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'Conflict PvE',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'None',
    flightActivity: 'Conflict PvE',
    notes: 'Nice flying this week!',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'Conflict PvE',
    otherActivity: '',
    notes: '',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'RTF Fiction Bonus Comp',
    notes: 'Keep going with the great fiction.',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE and PvP, Battlefront 2 PvE',
    otherActivity: 'IOA Duties, Trivia Grand Tour, Raise the Flag Bonus Competition #4: Puzzle.',
    notes: 'Trying not to burn the place down while CPT Wreckage is gone...',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and PvP',
    otherActivity: '',
    notes: '',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP, Star Conflict PvE and PvP',
    otherActivity: '',
    notes: 'Brilliant flying this week! Keep it up!',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Battlefront 2 PvP',
    otherActivity: '',
    notes: '',
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

        <center><h4><span style={{ color: "#1F51FF" }}>Executive Officer's Speech</span></h4></center>
        <p>
        We are now over half way through RtF 2021 and all is still to play for. It’s always a pleasure to see our community spring to life 
		and compete and enjoy some Star Wars gaming. We are still fighting for 4th place on the top squadrons board so let's keep up the 
		fantastic work and keep the pressure on. As always, remember that pretty much anything you do can get you points so if you haven't 
		yet, come join in on the fun. If you see any of the squad online, please don’t hesitate to ask to join and enjoy this competition together. 
        </p>
		<p>September's MSE medals have been approved and should have arrived in your inboxes. Congrats to all who earned a medal for last month’s 
		activities.</p>
        <p>CPT Wreckage is on a mini-vacation at Yosemite National Park and will return Monday. Hopefully just in time to enjoy this report. </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>17 days into RtF and Sin keeps bouncing back and forth between 4th and 5th place in the top squadrons listings.</li><br></br>
				<li>September's MSE medals have been approved and sent out to all recipients.</li><br></br>
                <li>Don't forget to submit your SINGO screenshots whenever you complete a qualifying task.</li><br></br>
                <li>Easy way to knock out squares on SINGO and get RTF points. Go fly Robert Hogans TIE-Free mission and don't forget to leave a review. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>The Warrior remains 3rd place in RtF.</li><br></br>
                <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
				<li>RtF Bonus Comp #6: SWS PvP is live!<br></br><br></br>
					The Star Wars Squadrons PvP Bonus Comp will run from 0600 GMT on October 15th to 0600 GMT on October 22nd.<br></br><br></br>
					The goal will be to submit via email to plif346@gmail.com your SWS PvP screenshot with the highest score from a winning match. Ties will be broken by the timestamps on the submissions, earlier submission wins so the clock's ticking! Screenshots must be from matches played through matchmaking, custom matches are not eligible.<br></br><br></br>
					Please don't send the TCCOM your screenshot until you've made your final attempt. It gets very difficult to keep everything straight when I have multiple submissions from individual participants.<br></br><br></br>
					The top ten places will be awarded 100, 85, 70, 60, 50, 40, 35, 30, 25, or 20 bonus points respectively for their ships and squadrons. The top six places will earn an IS-GW, IS-SW, IS-SW, IS-BW, IS-BW, or IS-BW respectively.</li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      Well done to all who have received merit medals for September's MSE and to those who have been awarded IARs!
	  As always, thank you all for your continued activity and efforts.<br></br> 
	  CPT Wreckage's welcome home party will commence in the mess hall on C deck, Monday at 0800. Buy some drinks from project Sovereign (And scratch of a SINGO! square to!). 
      <p>For Sin!</p>
      <p>CPT SkyShadow</p>
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
