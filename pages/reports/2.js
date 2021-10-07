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
const startDate = '2021-07-05';
const endDate = '2021-07-11';
const submissionDate = '2021-07-11';

const citations = [
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
  id: '330',
  name: 'What\'s Your PoiSIN?',
  ends: '2021-08-04',
  units: 'Sin Squadron',
  notes: 'Create a drink after yourself or Sin Squadron, and provide the ingredients and possibly even a photo or graphic of the drink.',
  highlight: true,
}, {
  id: '3286',
  name: 'Riddles of the Jawa',
  ends: '2022-12-31',
  units: 'ISD-II Warrior',
  notes: 'Every week, RA Zekk will include a new puzzle designed by LT WarperJawa in the Warrior report. The first pilot of Wing II to return a fully correct puzzle to me will receive 5 points, the second will receive 4 points, and the third will receive 3 points.',
}, {
  id: '3266',
  name: 'Trivia Grand Tour: Season Six',
  ends: '2021-07-26',
  units: 'Entire TC',
}, {
  id: '3297',
  name: 'Guess the Pilot!',
  ends: '2021-08-30',
  units: 'Entire TC',
  notes: 'Every week you will be presented with five uniforms. You have to guess to which pilot that uniform belongs to.'
}, {
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'Every month a new crossword puzzle will be created with a specific theme. Complete the crossword puzzle and email a screenshot to Solohan50@gmail.com.'
}, {
  id: '3258',
  name: 'TIE Corps in Battle Season Three',
  ends: '2021-06-30',
  units: 'Entire TC',
  notes: 'Complete the monthly battles to win as pilot, squadron, and ship.',
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
    flightActivity: 'Star Conflict PvE, Cadet Cup League, Starcross Fighter League.',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour.',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'PvE Flying',
    otherActivity: '',
    notes: 'Thank you for helping out in Imperial Storm',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'PvE Flying',
    otherActivity: '',
    notes: 'Hope you got a chance to grab a beer while out of town.',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: 'Star Conflict PvE',
    notes: '',
  },

  // Mordechi Wolfe
  481: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Way to help out in Imperial Storm',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Journal Entry',
    notes: '',
  },

  // Favdaukar
  11336: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Keep powering through those exams',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour, Crossword Challenge, TTT3 Debugging, Writing a new script for quickly uploading single player PvE/PvP screenshots with a kill count.  ',
    notes: 'Thanks for all the time and dedication you put into this last battle, you even inspired me to get out there and fly more.',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Good job earning several Legion of Skirmishes. Your promotion to full Lieutenat should be approved any day now. ',
  },

  // Robert Hogan
  55859: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: 'IS2 Team Captain duties',
    notes: 'Ready for your next move in Imperial Storm, Major.',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'It was great seeing you out there flying again, you still got it General. ',
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

        <center><h4>Squadron Commander's Speech</h4></center>
        <p>
        Good Morning, Good Afternoon, or Good Evening Sinners... Wherever you are. This last week has 
        been crazy, especially the previous three days. As you all know we had entered our first battle 
        of Imperial Storm with The Hammer. The Battle of Bunduki will go down as one of the bloodiest 
        battles of history. The Warrior fleet was outnumbered but that did not stop us from putting up 
        one helluva fight.  While we may end up losing the battle due to having a smaller fleet, we caused 
        a lot of damage to the Hammer, and the war is far from over. The Warrior also made a statement that 
        we will not be defeated easily, no matter the disadvantage. I really need to emphasis how happy I am 
        from the performance that our Squadron did in this battle. Over 830 Legions came from our squad alone, 
        that is awesome. Thank you again to everyone who contributed to our efforts. 
        </p>

        <p>Today is CM SkyShadows birthday, so make sure to wish him a very Happy Birthday and buy him a beer 
          while you are at it.
        </p>

        <p>
        SL Caleb Watson was recently sent to the reserves due to non comunication and inactivity. However as you may 
        all already know we have a new member in our squad, Sub-Lieutenant AlexanderK9. He has wasted no time flying with a few of us in Star Conflict, 
        and has earned several Legion of Skirmishes. His paperwork for his promotion to Full Lieutenant is in the mail. If you need a wingman, hes your guy. 
        </p>

        <p>Just a reminder, my first Sin competitioin "What's your PoiSIN?" is live.
        </p>

        <i>	"Sinfire Cantina has just opened up on the ISD Warrior and it needs some new drink ideas. It can’t just serve Zekks 
          on the Beach and Sinfire shots all day, we need some variety. Create a drink after yourself or Sin Squadron, and provide 
          the ingredients and possibly even a photo or graphic of the drink. Zekk and I will judge based on creativity, details, 
          and graphics provided. IS-SR for 1st place, IS-BR for 2nd place and IS-CR for all other pilots who provide a drink name, 
          ingredients, and a graphic."</i>



      </Intro>

      <Orders missions={orders}>

                <center><h3>Squadron News</h3></center>
      <ul>
                <li>Welcome to the squad SL(soon to be LT) AlexanderK9</li><br></br>
                <li>Happy Birthday SkyShadow!</li><br></br>
                <li>New compititon "What's your PoiSIN?" is live. DM me on Discord or email submissions to ehtc.wreckage@gmail.com by August 4th.</li><br></br>
                <li>A new Sin patch is in the works. I took your feedback on the initial version, and hope to have it 
                  finalized in the coming weeks. It will continue the legacy of Sin having the best patch in the fleet.</li><br></br>
                <li>Sin Trivia will be returning next month after Trivia Grand Tour: Season Six wraps up</li><br></br>
                  </ul>
                <center><h3>Fleet News</h3></center>
        <ul>
            	<li>Imperial Storm has begun! Our first battle was a blood bath,but we put up a fight.</li><br></br>
				      <li>Check out LC Genie's  <a href="https://tc.emperorshammer.org/competitions.php?id=3297"><strong>Guess the Pilot by their Uniform Competition.</strong></a>
				       Link to Week 1  <a href="https://tc.emperorshammer.org/timetest.php?testid=554990"><strong>here.</strong> </a></li><br></br>
         	  	<li>The sixth edition of the Trivia Grand Tour competition, run by the TCCOM, wraps up this month.</li>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      One of the benifits of taking over the squadron right when Imperial Storm started was that I got the chance 
      to fly with many of you and other Warrior pilots for the first time. This week was crazy, but still I had alot fun. 
      Thanks for all the games, I look forward to going into battle with you all again.


      <p>For Sin!</p>
      <p>CM Wreckage</p>
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
