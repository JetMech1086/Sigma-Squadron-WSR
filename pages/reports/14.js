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

const reportNumber = 14;
const startDate = '2021-09-27';
const endDate = '2021-10-03';
const submissionDate = '2021-10-03';

const citations = [
  'XvT-TC 10',
  'XvT-TC 14',
  'XvT-TC 31',
  'XvT-TC 41',
  'XvT-TC 70',
  
];

const citationsChange ='+0';

const orders = [{
  name: 'TIE-TC 1',
  id: 1,
  title: 'Capture of Zaarin',
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
  id: '3307',
  name: 'Find The Difference',
  ends: '2021-10-01',
  units: 'Entire TC',
  notes: 'Every week you will be presented with two photos. They are the same exact photo except for 5 differences. You have to answer what those 5 differences are.',
}, {
  id: '3310',
  name: 'Trivia Grand Tour: Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
}, {
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'Every month a new crossword puzzle will be created with a specific theme. Complete the crossword puzzle and email a screenshot to Solohan50@gmail.com.'
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
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}];

// TODO confirm
const ACTIVITY = {
  // Wreckage
  55962: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict, Battlefront 2, Star Wars Squadrons',
    otherActivity: 'Trivia Grand Tour',
    notes: '',
  },
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: 'Star Wars Squadrons',
    otherActivity: '',
    notes: 'Glad to have you flying with us pilot.',
  },
  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'PvE flying',
    otherActivity: 'Find The Difference, Trivia Grand Tour',
    notes: 'Nice work getting all those legions this week.',
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
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Trivia Grand Tour',
    notes: '',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Time to shine, start submitting fiction for RTF.',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvP and PvE, Star Wars Squadrons',
    otherActivity: 'IOA Duties, Find The Difference, Trivia Grand Tour',
    notes: 'Keep up the good work Cap',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'We missed you in Sinfantry Training.',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP',
    otherActivity: '',
    notes: 'When you going to teach the rest of us how to be good at Battlefront? ',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Wars Squadrons',
    otherActivity: '',
    notes: 'Great work this week General',
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
        If you haven't noticed RTF is underway and in full effect. Activity has been off the charts all through the TIE Corps. Just look at the EH Discord server and you will see pilots gathered together the Voice Channels. So if you have not yet come join in on the fun. It's easy to participate and earn points for your ship. Whether it's flying MP matches, single-player missions, writing fiction, or even just making memes. It's all is worth points. Currently, the Warrior
         is sitting in 2nd place, if you want to win this even we will need all hands on deck. Please let me know if you have any questions about the point system 
        </p>
        <p>Please don't forget to upload your SINGO card screenshots to the discord or email them directly to me. A few of you have already joined in, but I am hoping more will join in with RTF going on.
        </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>Only a few days in to RTF and so far Sin is in 6th place.</li><br></br>
                <li>Sinfantry Training was yesterday and we had a solid turnout, thank you to those that showed up.</li><br></br>
                <li>I have received some SINGO screenshots already so keep them coming.</li><br></br>
                <li>Go fly Robert Hogans TIE-Free mission. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>RTF has started and currently The Warrior is in 2nd place.</li><br></br>
              <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
              <li>Congrats to the winners of Find The Difference: Week 9. Kazraran earned an IS-SR and TheBlackxRanger earned an IS-BR.  </li><br></br>
         	  	<li>Pickled Yoda takes 1st place in the final standings of Find The Difference. In 2nd place was Aardvark and in 3rd is TheBlackxRanger. Thank you to everyone that participated.  </li><br></br>

        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      We are off to a solid start in RTF. Half of the squad has already participated in the event and earned points for the squad. I hope the other half 
      can jump in on the action as well soon. Like I always have said, you don't need to go crazy spamming trying to get 1000s of points. Just contribute what you can to 
      the squad. Every point counts and helps out in the end. I would love to finish the month with our squad having no pilots with a 0 next to their name for points. 100% participation is what I am hoping for. 
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
