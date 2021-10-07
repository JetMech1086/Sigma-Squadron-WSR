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

const reportNumber = 6;
const startDate = '2021-08-01';
const endDate = '2021-08-08';
const submissionDate = '2021-08-08';

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
    flightActivity: 'Star Conflict PvE, Star Wars Squadrons PvP',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour',
    notes: '',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: 'Star Conflict PvE',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Sin Squadron Trivia, Spot The Difference',
    notes: 'Promotion to Major any day now. ',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: 'Star Wars Squadrons',
    otherActivity: 'Sin Squadron Trivia, Spot The Difference',
    notes: 'You are getting close to earning that CoB',
  },

  // Favdaukar
  11336: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: 'Sin Squadron Trivia, Spot The Difference',
    notes: 'Good job in the comps, I am hoping to see some legions from you soon',
  },

    // Mordechi Wolfe
    481: {
      communication: 'Email, Discord',
      flightActivity: 'Star Conflict PvE',
      otherActivity: 'Riddles of the Jawa Aardvark, Sin Squadron Trivia, Spot The Difference',
      notes: 'Project SOVERIGN seems to be off to a good start ',
    },

  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Riddles of the Jawa Aardvark, Guess the Pilot, IOA Duties, Sin Squadron Trivia, Spot The Difference',
    notes: 'Thanks for doing the Sinterview ',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Quiet week, hope all is well',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '  Imperial Storm Team Captain duties',
    notes: '',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
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
        MSE medals are in the mail and should be dropping any day now. Thanks you to everyone for their services to the Empire. It was truly an impressive month, 
        so much so that Zekk picked our squad as "Squadron of The Month". Keep up the good work everyone.
        </p>

        <p>Project SOVERIGN started last week, so make sure to check out the menu list and go buy something, don't let those credits just sit in your pocket and burn a hole. If you still have 
          any questions shoot me an email or Dm me on Discord.
        </p>

        <p>August has been relaxing so far. But it is only a matter of time until another battle erupts and we are back on the grind, so enjoy the relaxation now while it lasts. I know I am.
        </p>



        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the fourth installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with Commander SkyShadow </p>
        <b>Name: SkyShadow</b><br></br>
        <b>Join Date: Unknown</b><br></br>
        <b>Rank: Commander</b><br></br>
        <b>Position: SQXO/FL</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> In the real world you'll find me in the lovely, but extremely flat rural farmlands of Lincolnshire, England, about 100 miles north of London.
          In EH character I’m a nobleman from Aurora Prime. I should really add some flavour to my INPR...</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> Back in the golden 1990's when X-Wing and TIE Fighter where the biggest games out there, a friend got me involved with a Star Wars group known as the Intruder Wing Strike Fleet.
          They were actually a sworn enemy and traitors of the EH if I recall? I always remember checking out the EH and TIE Corps sites and being in awe or the thousands of members they had and just how organised they were.
          Anyways, as a lot of the smaller clubs do, membership started to dwindle and sometime in the late 90's I made the transition to the TIE Corps.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> Kill more Rebel Scum of course! But when all the Rebels have run out, I’m often playing other video games, playing board games, 
        reading or playing piano. I collect Star Wars books and Lego to.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favourite Star Wars moment?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> For me I would have to say the closing scenes of Return of the Jedi. The scenes with all of the celebrations across all of the planets 
        we've visited over the six-movie journey, citizens tearing down statues of the Emperor and using Stormtrooper helmets for drums...
        It still makes me tingle as a focal point of what a battle and an enduring journey all of the characters we love have been through.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Are Ewoks cute and furry teddy bear-like creatures or vicious carnivores?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> Kinda both? They definitely get the cute and furry tick from me, but you wouldn't want to find yourself on the wrong side of an Ewok... 
        Battlefront II - Ewok Hunt... just saying...</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> In your opinion what is the best viewing order of all 3 trilogies, Rogue one, and Solo?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> I like to watch them in episode order these days so Episodes: 1, 2, 3, Solo, Rogue One, 4, 5, 6, 7, 8, 9. Though I must admit not to be a fan of the most recent trilogy.
        I like watching it this way as it gives better context of what's happening in the story. Like the closing of the senate comments and why the Tantive IV is on the run in Episode 4 </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Of all those movies, which one was is the best?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> Rogue One currently. I watched it for the seventh time last week. </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favourite Star Wars quote?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> "Jabba No Wanga" Ahem... it might be a British thing.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Which Star War Character, Canon or not, would you love to get their own movie/show?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span>  Revan from Star Wars the Old Republic. He's been by far one of the most enjoyable characters I’ve ever encountered in the games and books. I would love to see a movie or show 
        from that era.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, if you could change 1 thing in any of the movies what would it be?</p>

        <i><span style={{ color: "#fec701" }}>SkyShadow:</span> Explain who Supreme Leader Snoke was and how he got there! We spent nearly two movies learning about this new super-villain for him to be knocked off at the end of The 
        Last Jedi and never spoken of again.</i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
      <ul>
                <li>Project SOVEREIGN trial testing has started, go spend your credits.</li><br></br>
                <li>What's your PoiSIN winners have been announced. SkyShadow earned the IS-SR, Kane earned the IS-BR, and Coremy earned an IS-CR. Good job fellas.</li><br></br>
                <li>Congrats to the winner of Sin Squadron Trivia: Week 1. Mordechi Wolfe earned an IS-SR and Favdaukar earned an IS-BR. </li><br></br>
                <li>Sin Squadron Trivia: Week 2 is now up. Here is the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=342338"><strong>Sin Squadron Trivia: Week 2</strong></a> It is a timed test, 
                so make sure youd dont click the link until you are ready to take it. More info here competition <a href="https://tc.emperorshammer.org/competitions.php?id=3306"><strong>here</strong></a></li><br></br>

                  </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>Trivia Grand Tour Season 7 has started.  </li><br></br>
              <li>Congrats to the winners of Spot The Difference: Week 1. TheBlackxRanger earned an IS-SR and Pickled Yoda earned an IS-BR.  </li><br></br>
         	  	<li>Spot The Difference: Week 2 is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=589870"><strong>Spot The Difference: Week 2</strong></a> and find the 5 differences.
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
      I can't say it enough, but good job again on the MSE medals this past month. These are well-deserved, all across the board, and there are even a few promotions that should be dropping soon as well, so keep an eye out for that.

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
