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

const reportNumber = 17;
const startDate = '2021-10-18';
const endDate = '2021-10-24';
const submissionDate = '2021-10-24';

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
    flightActivity: 'Battlefront PvP and PvE',
    otherActivity: '',
    notes: 'Good to be back',
  },
  // Leone123
  56159: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
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
    notes: 'Lets hope you get your PTO approved, you deserve some time off. ',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE and PvP, Battlefront 2 PvE',
    otherActivity: 'IOA Duties, Trivia Grand Tour, ',
    notes: 'You did an amazing job watching over the squadron. Could\'t ask for a better XO',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Ping me if you wanna squad up for some flying this week.',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP, Star Conflict PvE and PvP',
    otherActivity: '',
    notes: 'Keep up the great flying! You are getting super close to blackout in SINGO!',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Have fun in France, Don\'t stress it if you cant get internet going.',
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
        First and foremost I want to give a huge shout-out to  Executive Officer Captain SkyShadow. He did a fine job watching over the squad and all you Sinners. 
        I was able to enjoy my vacation knowing I left the squad in good hands. He will get the chance to watch over Sin again in a couple of weeks when I leave 
        for another mini-vacation from November 4th-8th. I am confident he will do a great job again.  
        </p>
		<p>One big thing that happened while I was gone. We accomplished one of my personal goals for RTF and the squadron and got 100% participation. This is a huge accomplishment 
      in itself, and I'm proud of you all for putting in the time to get involved. All our hard work still has us as a top 5 Squadron and the top squadron on the Warrior. </p>
   


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>1 week left in RTF and we are holding strong as a top 5 squadron</li><br></br>
				        <li>SkyShadow did a great job watching over the squad last week.</li><br></br>
                <li>I will be gone during the next Sinfantry Training. Please go to Discord to vote on whether we should move training up a week, back a week, or keep it the same. </li><br></br>
                <li>SINGO is coming to a close and many of you have already qualified for a medal. Make sure to get those screenshots to me.</li><br></br>
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
      Sin Squadron has put up a great fight all month. You all have not let up and have participated in any way you could. 
      I can't ask for more than that. There is only 1 week left, so let's finish strong. I would like to hold on to that top 5 
      spot and finish as the top squadron on the Warrior. We already accomplished 1 of our goals for RTF, lets complete the other 2 this week. 
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
