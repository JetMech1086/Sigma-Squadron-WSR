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
const startDate = '2022-08-08';
const endDate = '2022-08-028';
const submissionDate = '2022-08-28';

const citations = [

];

const citationsChange ='+0';

const orders = [];

const competitions = [{
  id: '3433',
  name: 'CallSIGn for Gundark',
  ends: '2022-08-31',
  units: 'Sigma Squadron',
  notes: 'Sigma Squadron\'s beloved pet Gundark is nameless! Your job is to come up with one that is suitable.',
  highlight:true
}, {
  id: '3431',
  name: 'Sigma Squadrons Vacation BINGO',
  ends: '2022-08-31',
  units: 'Sigma Squadron',
  notes: 'Sigma\'s pilots will be tasked with completing a bingo card on a set of planets from the Star Wars universe as they take a well earned break, on vacation!',
  highlight:true
}, {
  id: '3413',
  name: 'Warrior\'s Ace Pilot',
  ends: '2022-08-31',
  units: 'ISDII Warrior',
  notes: 'Achieve the highest score in a Star Wars Squadrons Dogfight.',
}, {
  id: '3389',
  name: 'Signal Scramble Infection',
  ends: '2022-08-27',
  units: 'ISDII Warrior',
  notes: 'Warrior Commodore has tasked the Warrior to make up phrases for the letter combinations and polling the fleet to determine which is the most likely.',
}, {
  id: '3418',
  name: 'TIE Fighter Mineracing!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Pilots will enter the TIE Fighter game combat chamber and load TIE campaign Battle 5, Mission 1 mineclearing. Upon arrival in the combat area, the pilot will immediately activate their in-flight video recorder and destroy 18 space mines and four containers ',
}, {
  id: '3417',
  name: 'Deal me in!',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Play as many games of Pazaak as you want, but you may only submit your top 15 screenshots to VA Marenta at marenta@gmail.com.',
}, {
  id: '3422',
  name: 'Rho Squadron Banner',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Rho Squadron is in need of a new banner for their squadron profile and reports!',
}, {
  id: '3398',
  name: 'Squadrons Feats of Strength I',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Complete as many levels objectives as you can in Star Wars Squadorns. There are EIGHT feats of strength with increasing difficulty. Settings: Squadrons, Fly Solo FB vs AI (with AI pilots ON) Duration: 30 mins Map: Yavin',
}];

// TODO confirm
const ACTIVITY = {
  // Wreckage
  55962: {
    communication: 'Email, Discord',
    flightActivity: 'SC, SWS',
    otherActivity: 'Signal Scramble Infection',
    notes: 'Working on my TCiB mission currently',
  },
  // Ayre
  56266: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Hope you had a great vacation. Time to get back t blowing up Rebels!',
  },
  // Flax Rogers
  56344: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Lets get you promoted to LT soon',
  },

  // Chorok Kim
  56383: {
    communication: 'Discord',
    flightActivity: '',
    notes: 'We hope to see you in the skies soon',
  },

  // JetMech
  55761: {
    communication: 'Email, Discord',
    flightActivity: 'BF2, SWS, TC Battles ',
    otherActivity: '',
    notes: 'Glad to have you be my side',
  },


  // Killnobi McGee
  56365: {
    communication: 'None',
    flightActivity: '',
    otherActivity: '',
    notes: 'Have not heard from you. please reach out.',
  },



  // Billy Lee
  56358: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Have not heard from you. please reach out.',
  },


    // Flik Metis
    56378: {
      communication: 'Discord',
      flightActivity: '',
      otherActivity: '',
      notes: 'Welcome to Sigma!',
    },



  // randyrumrnr
  55758: {
    communication: 'Discord',
    flightActivity: 'TC Battles, PvE Flying',
    otherActivity: 'Signal Scramble Infection',
    notes: 'Thank you for running those comps!',
  },

  // Mark Schueler
  4182: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'There are some TCIB orders with your name on it',
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

        <center><h4><span style={{ color: "#401562" }}>Squadron Commander's Speech</span></h4></center>
        <p>
        Welcome to the inaugural Squadron Commander Report, Sigma Squad. I'm happy to be here and contribute to restoring Sigma to its former greatness. 
        We have a lot of work ahead of us, but fortunately, we have two other excellent pilots who also make amazing leaders. I'm thrilled to have CM JetMech 
        as my SQXO and LC randyrumrnr as a Flight Leader. I have no doubt that we can launch Sigma and take off quickly with their assistance. Everyone has a 
        lot of Rebel ships to destroy.
        </p>
		    <p>There are many fresh faces here. Many of you are not only new to Sigma, but also to The Emperor's Hammer. No worries, it may seem like a lot at first, 
          but in the end, this is a place where flying, gaming, and having fun are the only things that matter. Do not hesitate to contact me, CM JetMech, or LC 
          Randyrumrnr if you have any questions at all. We are all eager to assist you and make your time at the Emperor's Hammer as enjoyable as we can.</p>
        <p>We have many competitions and ideas brewing here in Sigma. Once all the dust settles and everyone is ready for launch we will be getting those under way. So keep an eye out.  </p>
        <p>Lastly, I have finished the MSE for the month of July. Many of you were either a part of another squadron or were too new to engage in any activity. Dont worry, we still have plenty
           of time to earn a medal for the month of August. Reach out to me if you have any questions about what an MSE is, and I'll be happy to clarify.  Until then, get out and kill some Rebels!</p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#401562" }}>Squadron News</span></h3></center>
        <ul>
                <li>Sigma Squadron has been activated!</li><br></br>
                <li>Congrats to CM JetMech on his SQXO promotion.  </li><br></br>
                <li>Also congrats to LC randyrumrnr for becoming FL of FLight III</li><br></br>
                <li>Sigma Squadron competitions are coming, until then go complete some Warrior and TC comps.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#401562" }}>Fleet News</span></h3></center>
        <ul>
            	<li>SQXO will now be a primary position taking the place of the Flight Leader 2-1 position in every squadron.</li><br></br>
                <li>CM Sylas "Professor" Pitt has been appointed the new Training Officer  </li><br></br>
                <li>LC Robert Hogan has been selected to be a TOA   </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      I will conclude by saying that I am happy to be back. I believe this squad is coming together nicely. We are getting ready to accomplish something wonderful. 
      RTF will arrive soon, and when it does, Sigma will be prepared. Don't forget you can always shoot me DM in Discord or an email if you need anything.   
  
      <p>MAJ Wreckage</p>
      <i><span style={{ color: "#bb0a1e" }}>"Let the sky fall"</span></i>
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
