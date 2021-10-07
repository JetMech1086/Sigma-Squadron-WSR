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

const reportNumber = 7;
const startDate = '2021-08-09';
const endDate = '2021-08-15';
const submissionDate = '2021-08-15';

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
  id: '3306',
  name: 'Sin Squadron Trivia',
  ends: '2021-08-31',
  units: 'Sin Squadron',
  notes: 'Every week the CMDR will place a timed trivia in the report, 10 questions total. Pilots will have one week to answer.',
  highlight: true,
}, {
  id: '3286',
  name: 'Riddles of the Jawa',
  ends: '2021-12-31',
  units: 'ISD-II Warrior',
  notes: 'Every week, RA Zekk will include a new puzzle designed by LT WarperJawa in the Warrior report. The first pilot of Wing II to return a fully correct puzzle to me will receive 5 points, the second will receive 4 points, and the third will receive 3 points.',
}, {
  id: '3307',
  name: 'Spot The Difference',
  ends: '2021-10-01',
  units: 'Entire TC',
  notes: 'Every week you will be presented with two photos. They are the same exact photo except for 5 differences. You have to answer what those 5 differences are.',
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
    flightActivity: 'SQuadrons Premier League, Starcross Fighter League.',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour',
    notes: '',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'PvE Flying',
    otherActivity: 'Sin Squadron Trivia, Spot The 5 Differences, Trivia Grand Tour ',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: '',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Spot The Difference',
    notes: 'Congrats Major ',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: 'Star Wars Squadrons',
    otherActivity: 'Sin Squadron Trivia, Spot The Difference, Set up a Role play channel',
    notes: 'Thanks for getting that role play channel all set up.',
  },

  // Favdaukar
  11336: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: 'You out there?',
  },

    // Mordechi Wolfe
    481: {
      communication: 'Email, Discord',
      flightActivity: 'Star Conflict PvE',
      otherActivity: 'Sin Squadron Trivia, Spot The Difference, Trivia Grand Tour, Updated Warrior Wiki',
      notes: 'Thanks for updating the Wiki ',
    },

  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Guess the Pilot, IOA Duties, Sin Squadron Trivia, Spot The Difference, Trivia Grand Tour, WarCOM questionaire, Crossword Challenge ',
    notes: 'Another active week for the XO, even with being afk for half the week. ',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Squadron Sinterview',
    notes: 'Thanks for the Sinterview',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: ' Spot The 5 Differences, Trivia Grand Tour, Imperial Storm Team Captain duties',
    notes: 'Finishing strong in IS',
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

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Commander's Speech</span></h4></center>
        <p>
        The big news this week is that MSE medals have all been awarded. We had a whopping 10 Sin pilots earn one this last month, 
        and most of them were a BS and above. Good job everyone. 
        </p>

        <p>This week has been another relaxing week for all of us ( Except for our XO who still managed 200+ Legions even though he was away for half the week #beast). We are currently waiting for our moves in Imperial Storm. Currently IS is on turn 25 of 30, 
          so I expect that we will enter one final battle pretty soon to finish strong. 
        </p>

        <p>Other big news this week is that Sin has another Major in the squad. Congrats again to Coremy on the promotion, well deserved. He even bought a round of beers for the squad to celebrate. 
          Rumor has it that there is a Lieutenant who should be promoted very soon.</p>

        <p>Lastly, I have spoken with your Flight Leaders about updating the Flight's nicknames and motto. So you should be hearing from your FL, about a discussion to update it to something that more suits you guys. 

        </p>

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the fifth installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with LT AlexanderK9. </p>
        <b>Name: AlexanderK9</b><br></br>
        <b>Call Sign: Canine</b><br></br>
        <b>Join Date: 07/01/2021</b><br></br>
        <b>Rank: Lieutenant</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> I was actually born in Romania! I was, however, adopted before I was one, and have lived in Silver Spring, 
        Maryland (right by the US capital) for my entire life. </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> I found the TIE Corps through the Star Conflict corporation search function.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What are your future goals in the TIE Corps and what do you hope to accomplish?</p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> My future goals in the TIE Corps are many. I want to squad command relatively soon… but my aspirations don’t stop there! I really want to get involved and contribute deeply 
        and meaningfully, in many different ways, so I would really like to work my way up the ranks over time. </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> I often play games and roleplay. I am currently also studying for the A+ certification- which focuses on computer hardware and being a PC tech. My Bachelor’s of Science in Information Technology concentrating in Security has not landed me a job yet, 
        partially due to the fact that I don’t have any certs… So I am fixing that! </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Who is your favorite Star Wars character?</p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> My favorite Star Wars character is, most likely, Leia Organa-Solo.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What kind of Stormtrooper would you be? </p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> I would most like be a Special Command Advanced Recon (SCAR) trooper.  </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Who do you think was the most powerful Force user? </p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> I really don’t know! Out of the ones in the movies, it’d have to be either Yoda or Palpatine.  </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What's your opinion on Jar Jar Binks?</p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> Ahh… Jar Jar Binks. A comedic relief character that is unfailingly clumsy! He’s funny, but painfully and forcedly so.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span>  If you could change anything in the Star Wars films, what would it be?</p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span>  I would really like to have the Star Wars films have more of a grey area to the Force. The third (most recent) trilogy did that, to an extent, 
        which I really, really enjoyed!</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, In your opinion, Rank all 9 of the main Star Wars films, Rogue One, and Solo from best to worst.</p>

        <i><span style={{ color: "#fec701" }}>AlexanderK9:</span> Then would come Rogue One, and after that the third trilogy (7-9). Finally would come in Solo followed by the second trilogy (1-3). </i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
      <ul>
                <li>Coremy promoted to Major</li><br></br>
                <li>Project SOVEREIGN trial testing has started, go spend your credits.</li><br></br>
                <li>Talk to your FL if you have any ideas for your Flights nickname and motto.</li><br></br>
                <li>Congrats to the winner of Sin Squadron Trivia: Week 2. Mordechi Wolfe earned an IS-BR for winning this week. </li><br></br>
                <li>Sin Squadron Trivia: Week 3 is now up. Who will dethrone Mordechi? Here is the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=210769"><strong>Sin Squadron Trivia: Week 3</strong></a> It is a timed test, 
                so make sure youd dont click the link until you are ready to take it. More info here competition <a href="https://tc.emperorshammer.org/competitions.php?id=3306"><strong>here</strong></a></li><br></br>

                  </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM.  </li><br></br>
              <li>Congrats to the winners of Spot The Difference: Week 2. LCM Jaxx Nassin earned an IS-SR and COL Mordechi Wolfe earned an IS-BR.  </li><br></br>
         	  	<li>Spot The Difference: Week 3 is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=512103"><strong>Spot The Difference: Week 3</strong></a> and find the 5 differences.
                More info on the competition <a href="https://tc.emperorshammer.org/competitions.php?id=3307"><strong>here.</strong></a> </li><br></br>

        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      This is the calm before the storm, I know a battle is coming soon, so make sure those TIEs are ready to go once we engage. 

      <p>For Sin!</p>
      <p>CM Wreckage</p>
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
