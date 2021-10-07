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

const reportNumber = 4;
const startDate = '2021-07-19';
const endDate = '2021-07-25';
const submissionDate = '2021-07-25';

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
  ends: '2021-12-31',
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
    flightActivity: 'Squadron Premier League, SWS PvP',
    otherActivity: 'Trivia Grand Tour, Guess The Pilot',
    notes: 'I submitted two new competitions to start next month. Spot the Difference and Sin Squadron Trivia.',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'PvE Flying',
    otherActivity: 'Trivia Grand Tour, What\'s Your PoiSIN?',
    notes: 'The Sith Mix looks delicious!',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'The Challenge with Words, Trivia Grand Tour, Guess The Pilot',
    notes: 'Congrats on the IS-GR',
  },

  // Earnim Branet
  11276: {
    communication: 'none',
    flightActivity: '',
    notes: '',
  },

  // Mordechi Wolfe
  481: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: 'Trivia Grand Tour, Riddles of the Jawa Aardvark, Project SOVEREIGN',
    notes: 'Sin is ready to trial Project SOVEREIGN',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Squadron Sinterview',
    notes: 'Thanks Tusk for participating in Squadron Sinterview. ',
  },

  // Favdaukar
  11336: {
    communication: 'Email',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Trivia Grand Tour, Riddles of the Jawa Aardvark, Guess the Pilot, IOA Duties ',
    notes: 'Another active week, good job pilot. Hopefully being back in the office doesn\'t slow you down too much. ',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and PVP',
    otherActivity: '',
    notes: 'TCCORE and SM/5 in the same week is a huge accomplishment. I see a bright future for you pilot. ',
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
        This week most of Sin Squadron took some well-deserved time off after the madness of the last two Imperial Storm battles. However, now it is time to report 
        back to your Battlestations and power up those TIEs. We have arrived at the planet of Burgerking and are looking to take command. This battle will give us 
        the chance to take the lead in the competition. The battle starts July 26th at 00:01 Monday GMT/UTC and will last until July 28th at 23:59 GMT/UTC. Let us 
        do what we do best and get as many Legions as we can. The FREE mission for this encounter is TIE-FREE 179, so give it a shot. The month is coming to end and 
        most of you have already earned MSE medals. Let's finish up the month strong. 
        </p>

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>
        <p>Welcome to the second installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with Lieutenant Kane 
          Polybius. </p>
        <b>Name: Kane Polybius</b><br></br>
        <b>Call Sign: Tusks</b><br></br>
        <b>Join Date: 6/11/2021</b><br></br>
        <b>Rank: Lieutenant</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> Apparently I was born in space, closest thing to a home planet I've got is Tattoine, though.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Why did you leave your Planet?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> Left after being exiled from my 'home' at the time; some mercs found me and took me in from there. 
        So space travel was most of the rest of my childhood.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you miss most about home?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> In all honesty? Not much... by the time I left, there wasn't much for me TO miss anymore.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What influenced you to join the TIE Corps?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> I've seen... what a lack of order can do to a town, a people, a planet... the Empire, even if the 
        people don't always agree with them, is better than the hell that rises from a power vacuum.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What have you learned in the TIE Corps?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span>  I'm damn good in a bomber. As well as how it feels to be a part of something again... it's, interesting. 
        Not quite like a tribe, but it's nice to have someone watching your six. The psychology they try to ingrain in pilots at the academies also offers an interesting 
        perspective on things, but anyway.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite food and/or drink?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> Hmm... there was a drink we used to make, had to have a few specialty ingredients, which is what made it a 
        pretty rare treat for us. Main ingredient was Bantha milk though. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> Even just flying around the Destroyer is nice, really. I know a lot of pilots aren't a fan of being in a 
        TIE for leisure, but I find it comforting. I've also taken to writing a journal, and at times- well, not very good, but sometimes I write poetry... Ah, can that 
        be omitted, perhaps?</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite starcruiser, spaceship, or spacecraft?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> So, there was a gal I used to work with... real crafty and lots of resources. Had a Firespray. Sure, they 
        fell by the wayside back in the day, but somehow or another she got her hands on some schematics, had them updated, and made. Man, that was a helluva ride. Nothing 
        I've flown since has ever been quite that smooth. It was... that was something else.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your most prized possession?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span>  Heh, might sound a bit silly, but... my cycler rifle, honestly. Kept me alive up to now, and even kept me going 
        when I ended up grounded during an op, and had to tag along with the groundhogs. Plus, it's... I've put a lot of work into it... no way I could have left it behind. 
        Despite the excessive amount of forms to fill and hoops to jump through to get the proper clearance to keep 'im around.
 </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, Last question Tusk,  Where do you see yourself in a year?</p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> In a year? Not too far, I reckon... maybe a flight leader. Further down the road though? I want to bring Psi Squadron 
        back, file her under psychological warfare. Now that, that would be some fun times.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Thank you Lieutenant, anything else you want to add before you are dismissed? </p>
        <i><span style={{ color: "#fec701" }}>Kane:</span> Long live the Emperor, and long live the Empire.</i>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
      <ul>
                <li>New Sin Banner created by CM Morgoth</li><br></br>
                <li>Sin will be one of the squadrons trialing out Project SOVEREIGN, which explores the possibility of introducing a salary and item purchase system to the TIE Corps</li><br></br>
                <li>Dont forget to paticpate in the "What's your PoiSIN?" competition. DM me on Discord or email submissions to ehtc.wreckage@gmail.com by August 4th.</li><br></br>
                <li>Sin Trivia will be returning August 1st</li><br></br>
                  </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>Battle of Burgerking against the Challenge is set to begin soon, let's wipe them out. </li><br></br>
         	  	<li>The sixth edition of the Trivia Grand Tour competition, run by the TCCOM, wraps up this month.</li><br></br>

        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      My first month as CMDR flew by fast. Still in shock that it's already been in a month. You all have been great. Having awesome pilots like all those in Sin makes leading easy. 
      If any of you wants to buy me a drink at the cantina to celebrate my favorites are Chalquilla on the rocks or Jet Juice. Although, some of the drinks that you guys have created for the the 
      "Whats Your PoiSIN?" competition sound delicious as well. 


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
