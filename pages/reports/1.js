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

const reportNumber = 1;
const startDate = '2021-06-26';
const endDate = '2021-07-04';
const submissionDate = '2021-07-04';

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
  id: '3231',
  name: 'Sin Citation Bonanza',
  ends: '2021-06-12',
  units: 'Sin Squadron',
  notes: 'I talked to Robert Hogan about this competition and he informed me that interest had been lost. So it was deleted. I will try to see if I can come up with something similar in the future that will spark more interest.',
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
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Thanks for filling out my questionnaire',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'PvE Flying',
    otherActivity: '',
    notes: 'Nice job on the IU courses',
  },

  // Earnim Branet
  11276: {
    communication: 'None',
    flightActivity: 'PvE Flying',
    notes: '',
  },

  // Mordechi Wolfe
  481: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Thanks for filling out my questionnaire',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivty: '',
    notes: 'Good job on the TCCORE, you will make Lieutenant Commander in no time.',
  },

  // Favdaukar
  11336: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Congrats on your Order of the Vanguard. Good luck on your final exams. We will keep your TIE/SIN ready to go once you finish up.',
  },

  // Caleb Watson
  56041: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: 'Are you around?',
  },

  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Congrats on the new assignment, and keep killin it in Star Conflict. You are an LoS machine',
  },








  // Robert Hogan
  55859: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: 'Leading The Warrior in Imperial Storm',
    notes: 'Thanks for all your help, you have made my transition to CMDR much easier',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: '',
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
      <center><h4>Prologue</h4></center>

        <p>
          <em>         
          Wreckage fell back in his chair after pouring himself a glass of Sinfire. 
          A half-drunk bottle had been left on his desk by Zekk Terrik to congratulate 
          him on becoming the new Sin Squadron Commander. As he took a sip, he thought 
          about all the events that had just occurred. He enjoyed a lot of success with 
          Tempest Squadron, but with success comes change. One minute he was toasting to 
          another triumphant mission on the ISD Challenge, and the next he was stepping off 
          a shuttle onto the ISD Warrior. He recalled the recent memory of walking down the 
          new hangar bay and catching a glimpse of his new fearsome-looking TIE Sinister. He 
          was looking forward to the drink holder and air conditioning that it came with. 
          Wreckage snapped out of his trance, as he noticed the portraits on the wall of all 
          the previous Sin Commanders. A lot of great history here. Plif... Earnim... Robert... 
          He cackled as he came across Zekk Terrik's portrait “Man, does he ever not have a glass 
          of ale in his hand?” It's going to take a lot of work to live up to all these great 
          leaders, he thought to himself. But first, I’ll head over to the cantina to buy the 
          new squad a few rounds. Wreckage downed what was left in his glass, stood up, and reached 
          into his pocket. He pulled out his previous Commander Silwar Naiilo’s payment card. 
          Wreckage had swiped it from Silwar when he wasn’t looking while saying his final goodbyes. 
          Let’s see how many rounds I can buy for the squad before it gets disabled. He smirks, 
          opens the door of his new office, and makes his way towards the cantina.
          </em>
        </p>
        <center><h4>Squadron Commander's Speech</h4></center>
        <p>
        Welcome pilots to my first ever report as CMDR of Sin. The legacy of Sin Squadron runs deep, 
        and I look forward to etching my name in the history books along with the previous legendary 
        Sin Commanders. Speaking of legendary Sin Commanders, I want to thank Robert Hogan for 
        the remarkable job he has done with Sin and all the help he has given. I am happy that 
        he won't be leaving us and decided to transition to Sin 3-3 as a Flight Member. He will have 
        an important role for us in the future, which includes being Team Captain of The Warrior for 
        Imperial Storm.
        </p>

        <p>
        I am honored and looking forward to getting to know and fly next to you all in battle. 
        We have a fearsome squad here that is primed to leave their mark in competitions to come. 
        I have a few ideas running through my head already, but mostly I want to hear from you. If 
        you have any ideas, questions, or concerns feel free to let me know. I want everyone to take 
        pride in being part of Sin Squadron, not dread it. This all starts with me pushing out enjoyable 
        activities that you want to complete.
        </p>
        <p>One of my first duties as your new squadron commander was looking for a new FL/XO. 
          After some consideration, I have chosen CM SkyShadow as our squadron's new FL/XO. Make sure
          you buy him a beer to congratulate him the next time you run into  him
        </p>

      </Intro>

      <Orders missions={orders}>

                <center><h3>Squadron News</h3></center>
      <ul>
                <li>Congratulations to CM SkyShadow on his new assignment as XO/FL</li><br></br>
                <li>My first competition for Sin has been submitted. More info to come once it's approved</li><br></br>
                <li>A new Sin patch is in the works. I took your feedback on the initial version, and hope to have it 
                  finalized in the coming weeks. It will continue the legacy of Sin having the best patch in the fleet.</li><br></br>
                <li>Sin Trivia will be returning next month after Trivia Grand Tour: Season Six wraps up</li><br></br>
                  </ul>
                <center><h3>Fleet News</h3></center>
        <ul>
            	<li>Imperial Storm has begun! Let us help lead the Warrior to victory!</li><br></br>
				      <li>Season 2 of WoW is in full effect. Organizations from all over the galaxy are facing off in dogfights on Star Wars Squadrons.
				      If you have not done so yet, you will need to create a pilot profile (use the same name as your EH pilot name) on <a href="https://www.battlestats.com/"><strong>battle stats </strong></a>
				      and join the EH group. COO is also running an internal competition for WoW, you can find more information on that <a href="https://tc.emperorshammer.org/combat.php?id=162"><strong>here</strong> </a></li><br></br>
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
      You all have made my first week enjoyable and have been very welcoming. 
      I look forward to serving as your squadron commander. Happy Independence Day 
      to all those celebrating. Remember if you need anything feel free to DM me 
      on discord or email me at ehtc.wreckage@gmail.com.


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
