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

const reportNumber = 3;
const startDate = '2021-07-12';
const endDate = '2021-07-18';
const submissionDate = '2021-07-18';

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
    flightActivity: 'Star Conflict PvE, Star Wars Squadrons PvP, SPL, Cadet Cup League',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour.',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'PvE Flying',
    otherActivity: '',
    notes: 'Thank you for kicking off Squadron Sinterview, that IAR looks nice on ya',
  },

  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Great job racking of the LoSs in our Battle this week',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: '',
    notes: '',
  },

  // Mordechi Wolfe
  481: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Trivia Grand Tour, Riddles of the Jawa Aardvark, submitted Starfighter Weaponry course, Project SOVEREIGN',
    notes: 'Going to have to talk more about Project SOVEREIGN,',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'What\'s Your PoiSIN? competition.',
    notes: 'Keep the fiction coming. ',
  },

  // Favdaukar
  11336: {
    communication: 'Email',
    flightActivity: '',
    otherActivity: '',
    notes: 'Glad to hear you been killing it on the exams',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Guess the Pilot, Trivia Grand Tour, What\'s Your PoiSIN? competition, TTT3 Debugging, EH Custom GameRanger development research,   ',
    notes: 'Enjoy your camping trip',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and PvP',
    otherActivity: '',
    notes: 'Congrats again on the promotion, and way to be super active this week, COB should be heading your way soon',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Team Captain duties',
    notes: 'You are putting the Warrior in a good position to win Imperial Storm',
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
        How is it going Sinners, it has been another busy week all across the board. As you all know we are wrapping up a battle against the Hammer, 
        which by the looks of things we should come out victorious. Once again Sin Squadron came to fight. Even with SkyShadow away camping, we still 
        managed nearly 400 Legions, Great job squad. The other big news this week is Sin got a new patch thanks to the fine work of LCM Morgoth, make sure once the database updates to hit up the tailer and get 
        those uniforms a fresh new look. Halfway through the month and it's already looking like I am going to have a lot of MSE paperwork to fill out, 
        which I do not mind at all. Speaking of MSE paperwork, all medals for June have been recommended and those who earned one should be receiving them soon. 
        </p>

        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>
        <p>Welcome to my first installment of Squadron Sinterview. Every week I will try to interview one of your fellow 
          squad members and feature it in the Weekly Squadron Report. I will be awarding an IAR to those that participate, 
          so keep an eye out you could be next. Kicking it off is none other than Coremy Jertese.  </p>
        <b>Name: Coremy Jertese</b><br></br>
        <b>Join Date: 9/22/2001</b><br></br>
        <b>Rank: Captain</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> Originally from Napa, CA but call my permanent home in Reno, NV. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> It was 2001 and I was in high-school as a sophomore. I was really into PC games at the time that required a joystick. 
          I remember playing the TIE Fighter Demo and was so hooked on it. I was always looking up Star Wars information on games 
          and managed to come across a site that had all the amazing SW fighter games with a rank structure. I thought that was 
          the coolest thing. After I passed my initial exam and was off the training platform, I was attached to the ISD Grey Wolf 
          and put into Vortex Squadron. I really enjoy being part of TieCorps. It's always been fun.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What has been your favorite moment or thing about the TIE Corps?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> Meeting so many different pilots who are just as dedicated and passionate. We all come together for the same reason.</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> Living in Reno, there are so many places to hike and camp out here. South Lake Tahoe is just a 30 minute drive from where I 
          live and venture out there as much as I can with my family. I like going ATV/UTVing as well. Shooting guns. Metal detecting 
          is what I just recently got into. It's addicting</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars film or show?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> Favorite SW movie would have to Revenge of the Sith. You really get to see how Anakin drastically falls to dark side. Favorite 
          show would be the Clone Wars. I like that we get to see everything that happens in between films. It really brings everything 
          together. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Who is your favorite Star Wars Character and why?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> My favorite character would have to be Darth Malgus. Would have to be my favorite Sith warrior. Incredibly strong and powerful. 
          I like the fact that he took down the Jedi Temple as well. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What planet in the Star Wars universe would you live on?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> It would most likely be Coruscant. Incredibly lively and busy. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> If you had a lightsaber what color would it be?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> Red</i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What would you do with force powers?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> Take down the rebels and Jedi with them. </i>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, last question. Who shot first? Han or Greedo?</p>
        <i><span style={{ color: "#fec701" }}>Coremy:</span> Ohhh. That's a good one. I think Greedo shot first but was a terrible shot. Han got lucky that he was.</i>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
      <ul>
                <li>Congrats to AlexanderK9 on his promotion to Full Lieutenant</li><br></br>
                <li>New Sin Patch created by LCM Morgoth, Update those uniforms.</li><br></br>
                <li>June MSE medals have been recommended</li><br></br>
                <li>Dont forget to paticpate in the "What's your PoiSIN?" competition. DM me on Discord or email submissions to ehtc.wreckage@gmail.com by August 4th.</li><br></br>
                <li>Sin Trivia will be returning next month after Trivia Grand Tour: Season Six wraps up</li><br></br>
                  </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>Imperial Storm is in full effect. Every ship has showed up and put up a fight</li><br></br>
         	  	<li>The sixth edition of the Trivia Grand Tour competition, run by the TCCOM, wraps up this month.</li><br></br>
               <li>TCiB Season 3 is officially over. Congrats to all those that earned medals and congrats to LC Genie for earning the title of TIE Corps Battlemaster. Season 4 is expected to kick off in August.</li>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      I appreciate everyone's effort in these last two battles. Imperial Storm acts sort of like a warm-up for RTF, 
      and Sin Squadron has shown that it is going to be a force to reckon with for that iconic event. Don't forget 
      if you have any suggestions, questions, or concerns feel free to hit me up. I always got time for my pilots. 


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
