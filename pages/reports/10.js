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

const reportNumber = 10;
const startDate = '2021-08-30';
const endDate = '2021-09-05';
const submissionDate = '2021-09-05';

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
  id: '3307',
  name: 'Find The Difference',
  ends: '2021-10-01',
  units: 'Entire TC',
  notes: 'Every week you will be presented with two photos. They are the same exact photo except for 5 differences. You have to answer what those 5 differences are.',
}, {
  id: '3310',
  name: 'Trivia Grand Tour: Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
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
    flightActivity: 'Star Conflict PvE and Battlefront',
    otherActivity: '',
    notes: 'Tried out Battlefront, hoping to squad up with you guys soon',
  },
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Good job updating your INPR. Your promotion to Full Lieutenant is in the mail. ',
  },
  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Find The Difference, Trivia Grand Tour ',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: 'Squadron Sinterview',
    notes: 'Thanks for the great interview.',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Trivia Grand Tour',
    notes: '',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: 'Star Wars Squadrons PvP',
    otherActivity: '',
    notes: '',
  },

  // Zekk
  5118: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

    // Mordechi Wolfe
    481: {
      communication: 'Email, Discord',
      flightActivity: '',
      otherActivity: 'Project Sovereign duties',
      notes: '',
    },

  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvP and PvE',
    otherActivity: 'Guess the Pilot, IOA Duties, Find The Difference, Trivia Grand Tour',
    notes: '',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: '',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Exar Kit
  5243: {
    communication: 'none',
    flightActivity: '',
    otherActivity: '',
    notes: 'You around?',
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
        I have already completed Sin MSE for August. Happy to say that it was another strong month from Sin as 9 of you qualified for a merit award. So drinks on me for the great month. 
        I'll make sure as soon as CS gives their input and approval that I get those medals in the mail asap. 
        </p>
        <p>I also turned in the August paperwork for Project SOVEREIGN. So you should be receiving another deposit again with more credits to buy more things from the armory. Remember almost everything you do earns you 
          credits from legions to IU courses to uniform updates. There are many ways to earn extra credits and add to your balance.  </p>

        <p>Next month on October 1st, RTF kicks off and the TC is about to go crazy. It's going to be mayhem. So take this month to enjoy yourself, relax, and take it easy. I'm not saying don't do any flying. I'm just saying don't overwork yourself. 
          Because next month it's on, for all the marbles. So we want to make sure we do not go into RTF burnt out. We must be well rested for what lies ahead.  
        </p>


        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the eighth installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with General Earnim Branet. </p>
        <b>Name: Earnim Branet</b><br></br>
        <b>Join Date: 05/25/2004 </b><br></br>
        <b>Rank: General</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> In my real life, I am from Chile, located in South America. And within my Country, my home is in the central part of the Region called Maule, in the City of Curico.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> That was 17 years ago. At that time I was looking for information on clubs that would gather Star Wars Fans, especially from South America, but there were not many 
        that were 100% dedicated to the role (They were more like social clubs and exchange of opinions) until I found the EH. It seemed like an interesting Club and I signed up to see what it was like. As you can see, I liked 
        it a lot and stayed until 2009, when I had to go to the reserve due to time constraints. When I could have more free time I returned to the EH, in the Sin squad.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you feel has been your biggest accomplishment or favorite memory in TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> Well. My best memories are when I joined the Hunter squad. There I made very good friends, like Von Predator, Dargor and Drake, who are no longer in the EH. There I started making reports 
        on my Flight Three and learned how to make websites for the squad. They were very fun times and in which I learned to use the new technologies of that time.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum? </p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> Kill the Rebel Scum is my greatest entertainment, but also apart from this very important activity I dedicate my time to watching Star Trek series, Stargate and also dedicating 
        myself to drawing, which is my passion in my RL.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What planet in the Star Wars universe would you love to live on?</p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span>  Tatooine, for the memories it brings to me when I saw my first Star Wars movie. Love those deserts and those enigmatic and fantastic creatures that populated it.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars moment?</p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> When Darth Vader makes a big revelation to Luke Skywalker saying: I am your father! That is the moment that impacted me the most and it is a phrase that from time to time I say to my 
        children, so that they do not forget it ...  
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars quote?</p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> May the Force be with you. That is a unique phrase from the Star Wars Universe and with which all Star Wars fans identify ourselves.   
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars film or show? </p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> I am of the old generation that thinks that the movie The Empire Strikes Back was the best of all, but I am also one of those who think that The Mandalorian is an excellent program that 
        until now is rescuing the essence of Star Wars. I hope that more Star Wars series and programs will appear that carry this essence later ...
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span>  Which Star War Character, Canon or not, would you love to get their own movie/show? </p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> There are many interesting characters that have been created during the development of new shows and games and one of those characters is Lord Revan. The story built around him is very dynamic, 
        as he moves between the Jedi and the Sith, providing enough material to create a new legend in the Star Wars universe. Hopefully in the future the new Star Wars programs begin to take into consideration all the material created in the Legends 
        Universe, which gives us a tremendous insight into a greatly expanded Star Wars universe. 

        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, if you could change 1 thing in any of the movies what would it be?</p>

        <i><span style={{ color: "#fec701" }}>Earnim:</span> Sorry for my comment, but that Ewoks of no more than one meter in height killing StormTroopers with wooden arrows, sticks and stones never seemed serious to me not even when I saw the movie Return of 
        the Jedi for the first time. That simply took away the drama from the film (In my opinion of course) so it is something that I would have preferred they had changed for Wookiees (As was originally thought). But that's how it remains and it is something 
        that cannot be changed.
        </i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>Sin MSEs are done</li><br></br>
                <li>Currently looking for a date to have a Battlefront night</li><br></br>
                <li>Go fly Robert Hogans TIE-Free mission. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
                <li>Project SOVEREIGN activity turned in, expect more credits added to your balance soon.</li><br></br>
                <li>Talk to your FL if you have any ideas for your Flights nickname and motto.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>RTF confirmed to start October 1st. </li><br></br>
              <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
              <li>Congrats to the winners of Find The Difference: Week 5. Kazraran earned an IS-SR and SkyShadow earned an IS-BR.  </li><br></br>
         	  	<li>Find The Difference: Week 6 is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=691028"><strong>Find The Difference: Week 6</strong></a> and find the 5 differences.
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
      I am going to need you guys to show me the ropes in Battlefront 2, I tried playing it for an hour and couldn't even get 1 LoC. I put up a poll in the Discord, hopefully, we can schedule a 
      date where most of us can get on at the same time and just kick back and play some games.  
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
