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

const reportNumber = 19;
const startDate = '2021-11-01';
const endDate = '2021-11-07';
const submissionDate = '2021-11-07';

const citations = [
  'XvT-TC 1',
  'XvT-TC 10',
  'XvT-TC 14',
  'XvT-TC 31',
  'XvT-TC 41',
  'XvT-TC 70',
  'XvT-DB 1',
  'XWA-TC 1',
  'XWA-TC 2', 
];
const citationsChange ='+2';

// These don't seem to change anything. Use: citations.js 
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
    flightActivity: 'Battlefront PvP and PvE, Star Conflict PvP',
    otherActivity: 'Sinfantry Training',
    notes: 'Enjoy the football and hockey bossman!',
  },
  // Leone123
  56159: {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },
  // Kazraran
  56002: {
    communication: 'None',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'None',
    flightActivity: 'None',
	otherActivity: 'None',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and PvP',
    otherActivity: 'IOA Duties, Trivia Grand Tour, Challenge With Words!, Crossword Challenge',
    notes: 'Back up and running after my new graphics card exploded and now covering the squadron and this report while CPT Wreckage is away.',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
    notes: '',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'IU Course Design',
    notes: 'Fantastic work so far with your course design!',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'None',
    otherActivity: 'None',
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
		
        <p>Greetings Pilots! Well, here we are, Raise the Flag 2021 has drawn to a close and the final results are in. After a courageous fight, 
		the ISD-II Warrior came in at 3rd place. However, I’m immensely proud to announce that not only did Sin Squadron finish as the top 
		squadron on board the Warrior, but we also achieved our goal of placing within the top 5 best squadrons overall, achieving 5th place. 
		Admirably, we also managed 100% participation across all of our pilots. We achieved each and every one of the goals that we set out to 
		achieve in RtF and I'm immensely proud to serve with you all.</p>
		<p>A special mention to CPT Wreckage is also well deserved as he achieved 3rd place in the Top Six MP Pilots for RtF. A very well done 
		to you sir! </p>
		<p>Another special mention goes out to MAJ Robert Hogan for achieving 2nd place in the graphics category during Raise the Flag 2021. 
		Congratulations!</p>
		<p>With RtF behind us, we also see the end of our own SINGO! competition. Well done to MAJ Robert Hogan for achieving to most completed 
		squares as well as to myself and CM Kazraran for achieving medals in the competition. </p>
		<p>After a couple of months of hard competition and with the holiday season fast approaching, we’ll naturally see a period of well-deserved 
		rest, you’ve all earnt it. This presents an ideal time to try other games and activities that the TIE Corps has to offer and stay 
		engaged with our fantastic community.</p>
		<p>Finally, the Monthly Squadron Evaluations for October have been submitted for review and shouldn’t take much longer to be 
		approved. I look forward to seeing all of the Merit Awards that you have all earned over the last busy month.</p>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>RtF has ended and Sin achieved 5th best squadron.</li><br></br>
				<li>CPT Wreckage achieved 3rd place in the Top Six MP Pilots for RtF.</li><br></br>
				<li>MAJ Robert Hogan achieved 2nd place in the graphics category for RtF.</li><br></br>
                <li>SINGO has also drawn to a close with MAJ Robert Hogan, CPT SkyShadow and CM Kazraran earning medals.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>The ISD-II Warrior earned 3rd place in RtF.</li><br></br>
                <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.</li><br></br>
                <li>The TIE Corps has signed up for <a href="https://www.battlestats.com/events/index.php?5420">Week of War IV</a>.
				The Combat Event is listed on the TC site: <a href="https://tc.emperorshammer.org/combat.php?id=169">Here</a></li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      I really just wanted to reiterate what I have already expressed in our squadron Discord channel: 
	  <p>Now that the dust has settled after RtF and calmer days are ahead of us, the technicians are busy in the hangar bay fixing our bruised 
	  and battered fighters. I just wanted to express my sincere thanks to each and every one of you. It was such a delight to see 100% 
	  participation across the squadron, and to reach 5th place as a squadron overall is no small feat! 
	  You have done Sin, the Warrior and us all proud!
	  The competition was fierce across the TC, but the points kept on rolling in. Most importantly of all, I hope that you all had fun participating.
	  Thanks to everyone again.</p>
	  <p>Now that the competition season is done for the year, we can all enjoy a little breathing space and some relaxation. Keep the great activity
	  up, but now is the time you can enjoy the other activities and games that the TC has to offer. Be active in Discord, and as always, 
	  if you're playing online, please give the squad a shout out, I’m sure anyone who is free would be eager to join you and enjoy some gaming.</p> 
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
