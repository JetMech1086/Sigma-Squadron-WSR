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

const reportNumber = 5;
const startDate = '2021-07-26';
const endDate = '2021-08-01';
const submissionDate = '2021-08-01';

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
  id: '3300',
  name: 'What\'s Your PoiSIN?',
  ends: '2021-08-04',
  units: 'Sin Squadron',
  notes: 'Create a drink after yourself or Sin Squadron, and provide the ingredients and possibly even a photo or graphic of the drink.',
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
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: '',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Guess The Pilot',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'none',
    flightActivity: '',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Flight report, Working on a few IU courses',
    notes: 'Congrats on the new assignment',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: 'Star Wars Squadrons',
    otherActivity: '',
    notes: '',
  },

  // Favdaukar
  11336: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Happy to have you back, see you in the skies.',
  },

    // Mordechi Wolfe
    481: {
      communication: 'Email, Discord',
      flightActivity: 'Star Conflict PvE',
      otherActivity: 'Riddles of the Jawa Aardvark, Squadron Sinterview Project SOVEREIGN',
      notes: 'Thanks for the great Sinterview. ',
    },

  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Riddles of the Jawa Aardvark, Guess the Pilot, IOA Duties ',
    notes: 'So far it doesn\'t look like being back in the office has slowed you down too much. As always the Empire thanks you for your outstanding service.  ',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Nice job on the IU courses.',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '  Imperial Storm Team Captain duties',
    notes: 'Congrats on the TGT season 6 win',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Keep up the good work General, you are killing it with the legions.',
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
        The Battle of Catinmycar is currently going on and as usual Sin Squadron has put out a large number of legions towards the event. We are currently 
        outgunned but that doesn't mean we can't take many of the Challenges forces with us, so just keep doing what you are doing.
        </p>

        <p>July has officially come to an end. I have already completed the MSE evaluations and sent them up the chain for approval. I am happy to say that nearly 
          everyone in Sin qualified for an MSE medal. I am super proud and appreciate all the effort that you all put forward this month. Meet me at the cantina and Ill buy you all a round of drinks. 
        </p>

        <p>Big things have happened this week, one is Coremy has taken over as FL of Flight 2. Make sure to make him buy you a drink when you see him since he is being paid more now. Speaking of being paid. 
          Sin Squadron has volunteered to be part of the trial phase of Project Sovereign, which explores the possibility of introducing a salary and item purchase system to the TIE Corps. The trial has 
          officially started today, Once I get a chance to read up on all the information, I will make an announcement, and show you how you can get involved. 
        </p>

        <p>Lastly, I got two competitions starting today, so make sure to check them out. 
        </p>

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the third installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with Colonel Mordechi Wolfe </p>
        <b>Name: Mordechi Wolfe</b><br></br>
        <b>Join Date: 02/15/1999</b><br></br>
        <b>Rank: Colonel</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> In RL, London UK although I now live in the leafy doldrums of Surrey. For my TC character, many years ago 
        I double-hatted as the Senator from Storinal, when the Imperial Senate was a sub-group, so I guess that would be my originating planet.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> I think it was mid-1999, I was just “surfing the web” and came across the TIE Corps site – I think I was looking 
        for stuff on the TF game. Contacted Kawolski (legend), who was FO at the time and he talked me through the process of submitting my TG game’s pilot file as a requirement 
        to join. I *think* my starting rank was General as the club ranks reflected the ranks you achieved in the TF game – very quickly after joining the current rank structure 
        was introduced and I converted to a Lieutenant. I was assigned to Psi Squadron, Wing II, SSSD Sovereign. My first Sqn CMDR was Sasquatch (Gallows/Proton was WC, Kramer 
        was SovCom), and after all this time I still regard him as one of the best leaders I’ve come across in the club.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you feel has been your biggest accomplishment in TIE Corps?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> Probably my tenure as Flight Officer – the club reached some great heights during this period in terms of member numbers 
        and activity. It was a tremendously busy job for two-ish years but fun at the same time. This period also saw some real upheaval and sad times in the club which I think still 
        resound with some of the older members.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> Gaming of all sorts – table top, board games, PC games. Time is limited with a busy RL job and two toddlers but I try to 
        get some gaming in during the week. Just downloaded The Ascent and can’t wait to give it a go.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars film or show?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> Easily ESB – I must have seen it over 20 times in every format. I’ve seen it on a big screen at Hampton Court Palace, as part 
        of the Secret Cinema and with a live orchestra at the Royal Albert Hall. Rogue One comes a close second.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars quote?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> “I know”. Apparently Ford improvised the line from “I love you too” and entirely fits his character. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> If you had to assume the role of one character, who would it be and why?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> Solo, or at least someone like him. Your own ship & crew, the freedom of flying around the galaxy, trading, meeting new folks 
        etc. Sounds fun.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What kind of droid would you own?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> Uh…recreational droid…</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, which Star War Character, Canon or not, would you love to get their own movie/show one day?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span>  I’d love to see more Solo movies, I thought the one we had was great fun despite some of the issues surrounding it. Other than that, 
        I think a series, or movies about the Yuuzhan Vong war would be amazing but alas, we’re not going to get anything from Legends. In terms of current SW cannon, anything more on Thrawn would be great. 
        Is Corran Horn cannon anymore? Maybe something on him and his journey as a pilot-turned-Jedi Master. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Okay, now I have to ask the infamous question since it's clear that you are a big Han Solo fan. Who shot first?</p>
        <i><span style={{ color: "#fec701" }}>Mordechi:</span> Solo, that conniving bastard.</i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
      <ul>
                <li>Coremy Jertese is the new FL of Flight 2</li><br></br>
                <li>Robert Hogan earned the title of Trivia Grand Tour Season Six Champion</li><br></br>
                <li>Sin Squadron Trivia starts this week. Here is the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=367085"><strong>Sin Squadron Trivia: Week 1</strong></a> It is a timed test, 
                so make sure youd dont click the link until you are ready to take it. More info here competition <a href="https://tc.emperorshammer.org/competitions.php?id=3306"><strong>here</strong></a></li><br></br>
                <li>Dont forget to paticpate in the "What's your PoiSIN?" competition. This is the last week. DM me on Discord or email submissions to ehtc.wreckage@gmail.com by August 4th.</li><br></br>
                  </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>Battle of Catinmycar is going on. Let's get as many legions in before it wraps up tomorrow.  </li><br></br>
         	  	<li>Spot The Difference is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=314620"><strong>Spot The Difference: Week 1</strong></a> and find the 5 differences. Make sure to provide detailed 
                 answers, use a comma to separate your answers. More info on the competition <a href="https://tc.emperorshammer.org/competitions.php?id=3307"><strong>here.</strong></a> </li><br></br>

        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      Many of you are already off to a good start this month, lets see if we can get 100% of the squad to earn MSE medals in August. Keep up the good work everyone, and I'll see you in the skies. 


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
