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

const reportNumber = 9;
const startDate = '2021-08-23';
const endDate = '2021-08-29';
const submissionDate = '2021-08-29';

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
  name: 'Find The Difference',
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
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour, Crossword Challenge',
    notes: '',
  },
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Welcome to Sin Squadron',
  },
  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Spot The Difference, Trivia Grand Tour ',
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
    otherActivity: 'Sin Squadron Trivia, Spot The Difference',
    notes: '',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Spot The Difference',
    notes: '',
  },

  // Zekk
  7782: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Spot The Difference, Trivia Grand Tour, Squadron Sinterview ',
    notes: 'Welcome back to Sin',
  },

    // Mordechi Wolfe
    481: {
      communication: 'Email, Discord',
      flightActivity: '',
      otherActivity: 'Trivia Grand Tour',
      notes: '',
    },

  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Guess the Pilot, IOA Duties, Sin Squadron Trivia, Spot The Difference, Trivia Grand Tour, FL Report, Crossword Challenge',
    notes: '',
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
    flightActivity: 'Battlefront PvP',
    otherActivity: '',
    notes: '',
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
        Only a few days left in the month. It looks like most of you should qualify for Merit awards. The big news this week is Zekk has made his triumphant return to Sin. We are sad that he will not be 
        our COM anymore, but we all respect his reasoning for stepping down. At the same time though we are excited to have him back in Sin, and look forward to him playing a vital role in this squad. 
        </p>
        <p>We also have had another new member join the squad. Everyone, please welcome  Sub-Lieutenant Leone123. I'm sure he will make Full Lietenat very soon. </p>

        <p>Other news this week, unfortunately I have not been able to get a response from CM Favdaukar for some time now, and he was removed from Sin Squadron. I know he was tied up with real life and school, and I let 
          him know in my last email that he is more than welcome back. 
        </p>

        <p>Remember to speak to your FLs to discuss any ideas you have for your new Flight nickname and motto. I am hoping to update them next week.  

        </p>

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the seventh installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with Colonel Zekk Terrik. </p>
        <b>Name: Zekk Terrik</b><br></br>
        <b>Call Sign: Shadow</b><br></br>
        <b>Join Date: 08/24/2000 </b><br></br>
        <b>Rank: Colonel</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> From sunny, hazy Bakersfield, CA.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> So in the 90s I was actually a regular on Westwood Online, the little ladder system they had to play Red Alert. WO had a little chat program where, for some reason, 
        dozens of Star Wars club that were like mini TCs had congregated. There were Imperial and Rebel clubs that would "attack" each other by flooding the other's channel. I met someone there who went on to the EHCS, named Howlader, 
        who I think was an FA when he left. I know he received the Medal of Honor.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What has been your favorite memory in your time in the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> In general, leading the Warrior and creating the brotherhood we built. Specifically, drunk toasting MAJ Aardvark's promotion. I still only vaguely remember that. 
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum? </p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> I love to travel and spend time with my family. I feel like I'm always road tripping somewhere. Love to fish and go hiking, shooting. I'm a gym rat and usually there 6 days 
        a week. Spend a lot of time cooking as well.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars quote?</p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span>  "Love doesn't lead to the dark side. Passion can lead to rage and fear, and can be controlled... But passion is not the same thing as love. Controlling your passions while being in love, 
        that's what they should teach you to beware. But love itself will save you... not condemn you." Jolee Bindo</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> If you had to assume the role of one character, who would it be and why?  </p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> Darth Revan is my favorite character for sure. Definitely him. Revan was one of the greatest Jedi in galactic history and made decisions that altered history. Also, Bastila was hot.  
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> In your opinion what is the best viewing order of all 3 trilogies, Rogue one, and Solo?  </p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> Prequels, Solo, Rogue One, original trilogy, then just watch the sequels while you're doing stuff around the house. You won't miss much.   
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars film or show? </p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> My favorite Star Wars show is obviously The TIE Pilot Podcast. ;) But the Mandalorian is close.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span>  Who is the most underrated Star Wars Character? </p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> I think the most underrated character is HK 47. That droid blew up whole buildings and killed thousands of meatbags to get to his target. 

        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, if you could change 1 thing in any of the movies what would it be?</p>

        <i><span style={{ color: "#fec701" }}>Zekk Terrik:</span> We would have delivered a glorious, crushing blow to the Rebellion at Endor and instead of having this conversation we'd be drunk on Coruscant after another boring guard duty rotation because 
        no one would dare mess with the Empire.
        </i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
      <ul>
                <li>Zekk is back in Sin.</li><br></br>
                <li>SL Leone123 has joined the squad. </li><br></br>
                <li>Go fly Robert Hogans TIE-Free mission. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
                <li>Project SOVEREIGN trial testing has started, spend those credits.</li><br></br>
                <li>Talk to your FL if you have any ideas for your Flights nickname and motto.</li><br></br>
                <li>Congrats to the winner of Sin Squadron Trivia: Week 4. COL Zekk Terrik earned an IS-BR for winning this week.</li><br></br>
                <li>Sin Squadron Trivia has completed. Congrats to CM SkyShadow for taking 1st place with the most correct answers. In 2nd place was COL Mordechi Wolfe. More info on the competition <a href="https://tc.emperorshammer.org/competitions.php?id=3306"><strong>here</strong></a>.</li><br></br>

                  </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>RTF confirmed to start October 1st. </li><br></br>
              <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
              <li>Congrats to the winners of Find The Difference: Week 4. Kalve Ryder earned an IS-SR and Kane Polybius earned an IS-BR.  </li><br></br>
         	  	<li>Find The Difference: Week 5 is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=811100"><strong>Find The Difference: Week 5</strong></a> and find the 5 differences.
                More info on the competition <a href="https://tc.emperorshammer.org/competitions.php?id=3307"><strong>here</strong></a>. </li><br></br>

        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      Nearly another month in the books. Crazy how fast the time just keeps flying by. If you guys put up with me this long, I think we are gonna be alright. 
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
