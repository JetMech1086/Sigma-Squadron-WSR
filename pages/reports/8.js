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

const reportNumber = 8;
const startDate = '2021-08-16';
const endDate = '2021-08-22';
const submissionDate = '2021-08-22';

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
    flightActivity: 'Star Conflict PvP',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour',
    notes: '',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Sin Squadron Trivia, Spot The Difference, Trivia Grand Tour ',
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
    flightActivity: '',
    otherActivity: 'Sin Squadron Trivia, Spot The Difference, Trivia Grand Tour, FL Report',
    notes: '',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Spot The Difference',
    notes: 'Congrats on the promotion. ',
  },

  // Favdaukar
  11336: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: 'You around?',
  },

    // Mordechi Wolfe
    481: {
      communication: 'Email, Discord',
      flightActivity: '',
      otherActivity: 'Sin Squadron Trivia, Spot The Difference, Trivia Grand Tour',
      notes: '',
    },

  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Guess the Pilot, IOA Duties, Sin Squadron Trivia, Spot The Difference, Trivia Grand Tour, FL Report',
    notes: 'Wait....what! 750 LoSs in a week!?!!! Impressive in an understatement. ',
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
    communication: 'Discord',
    flightActivity: '',
    otherActivity: ' Trivia Grand Tour, Squadron Sinterview',
    notes: 'Thanks for the Sinterview',
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
        Well IS3 is now officially over. While it was not the outcome we wanted, there are some positives to take away from the event. The Warrior was ranked 1st in battle points so that shows we did put up a fight when in battle, unfortunately 
        in most of our battles we were outgunned. Sin played a big role in all the battles that we competed in and I am proud of the way we performed. RTF is coming soon and there will not be any fleet sizes or any of that stuff that will affect 
        the outcome, only spam. If IS3 showed us anything, it showed us that Sin can hang with any other squadron when it comes to spam. We will be ready to roll once RTF starts.  
        </p>

        <p>We are entering the final stretch for the month. I have messaged a few of you already who are close to a certain MSE medal, so get to flying this week if you want a nicer shinier medal for the month. 
        </p>

        <p>Our very own Major Robert Hogan created a TIE Free battle. Go fly TIE-Free 299 as soon as you can. 
        </p>

        <p>Earlier this week Tusk got promoted to Lieutenant Commander. Go congratulate him if you have not already. </p>

        <p>Remember to speak to your FLs to discuss any ideas you have for your new Flight nickname and motto. I am hoping to update them at the end of the month.  

        </p>

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the sixth installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with Major Robert Hogan. </p>
        <b>Name: Robert Hogan</b><br></br>
        <b>Call Sign: Papa Bear</b><br></br>
        <b>Join Date: 09/13/2020</b><br></br>
        <b>Rank: Major</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> In the real world I’m from Southern California, kind of near where Disneyland is.  In character I’m from Aurora Prime, the capital of the Emperor’s Hammer.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span>I really found the TIE Corps by accident.  I had played many of the Star Wars games that the TIE Corps supports and was really looking forward to the release of 
        Squadrons, so I was looking around for what kinds of groups and clubs existed for these kinds of games.  The TIE Corps really grabbed my eye, so I headed down to my local Imperial recruiting station to enlist.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> That’s a tough one, because I think this desire to eradicate the rebels is deep inside all of us pilots.  I do quite enjoy boating and music though, but not 
        necessarily playing music while on a boat. 
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars film or show? </p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> Film, hands down The Empire Strikes Back.  Show, definitely the Mandalorian.  I thought Empire was such a good bridge between 4 and 6, and as an independent film, 
        the story is fantastic.  As for the Mandalorian, it really felt like the creators tried to be reverent towards the fans and the original trilogy, and overall was a really solid product.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Who is your favorite Star Wars character and why?</p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> Probably Han Solo.  Yes, I know he’s rebel scum, but I thought his whole character was well developed and really fun to watch.  I mean, who doesn’t like Harrison Ford as a smuggler?</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What would you do with force powers?  </p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> What wouldn’t I do with force powers!  Use it to better press my uniforms, to fly TIE fighters around the Warrior hangar like they were miniature models, move the COM’s drink away from 
        him a few inches to make him think he’s going crazy… the list really never ends.  </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Can you describe what your lightsaber would look like?  </p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> I’ve never really thought much about this one, but probably something with the majority of the handle (hilt?) silver, and a blade that’s either purple of blue, since I like those colors.  
        Although, the Darksaber looks pretty good, I wouldn’t mind that either.  
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What planet in the Star Wars universe would you love to live on? </p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> Ignoring galactic conflicts of course, I would probably say Alderaan because 1. I understand it was a nice place before it was sacrificed in order to maintain order in the galaxy, 
        2. The people there seem nice, and 3. Those mountains look absolutely terrific for skiing, and I won’t get attacked by a Wampa there.</i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span>  Who is the most underrated Star Wars Character? </p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span>  TK-421.  A loyal Imperial stormtrooper who did in fact stick to his post and bravely fought against a farm boy, an elderly man, and a walking carpet in defense of his Empire.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, which Star War Character, Canon or not, would you love to get their own movie/show?</p>

        <i><span style={{ color: "#fec701" }}>Robert Hogan:</span> Thrawn, and specifically him in the context of the Thrawn Trilogy.  I thought Lucasfilm kind of butchered his character in Rebels, so I would really love to see the cold 
        and genius character from the books make his way onto the screen.</i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
      <ul>
                <li>Kane "Tusk" Polybius promoted to Lieutenant Commander.</li><br></br>
                <li>Go fly Robert Hogans TIE-Free mission. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
                <li>Project SOVEREIGN trial testing has started, spend those credits.</li><br></br>
                <li>Talk to your FL if you have any ideas for your Flights nickname and motto.</li><br></br>
                <li>Congrats to the winner of Sin Squadron Trivia: Week 3. Mordechi Wolfe earned an IS-BR for winning this week. Thats 3 weeks in a row. </li><br></br>
                <li>Sin Squadron Trivia: Week 4 is now up. This is the last week to try and dethrone Mordechi. Here is the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=1391110"><strong>Sin Squadron Trivia: Week 4</strong></a> It is a timed test, 
                so make sure youd dont click the link until you are ready to take it. More info on the competition <a href="https://tc.emperorshammer.org/competitions.php?id=3306"><strong>here</strong></a>.</li><br></br>

                  </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>Congrats to the Challenge on their victory in IS3.  </li><br></br>
              <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
              <li>Congrats to the winners of Spot The Difference: Week 3. CM SkyShadow  earned an IS-SR and LCM Jaxx Nassin earned an IS-BR.  </li><br></br>
         	  	<li>Spot The Difference: Week 4 is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=176085"><strong>Spot The Difference: Week 4</strong></a> and find the 5 differences.
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
      My birthday is this week on the 26th, turning the big 3-4. Feel free to buy me a shot of Chalquilla, or hell the whole bottle. Don't be surprised if my report next week comes out Monday instead of the 
      usual Sunday release. It all depends how hard I celebrate on Saturday ;-P
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
