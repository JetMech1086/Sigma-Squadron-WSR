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

const reportNumber = 20;
const startDate = '2021-11-08';
const endDate = '2021-11-20';
const submissionDate = '2021-11-20';

const citations = [
  'XvT-TC 10',
  'XvT-TC 14',
  'XvT-TC 31',
  'XvT-TC 41',
  'XvT-TC 70',
  'XWA-TC 1',
  'XWA-TC 2', 
];

const citationsChange ='+0';

const orders = [{
  name: 'TIE-TC 3',
  id: 3,
  title: 'New Dimensions',
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
  id: '3321',
  name: 'Sinfantry Training',
  ends: '2022-02-05',
  units: 'Sin Squadron',
  notes: 'Every first Saturday of the month, Sin Squadron will assemble for PvP matches in Star Wars Squadrons, Battlefront, and Star Conflict.',
  highlight: true,
}, {
  id: '3310',
  name: 'Trivia Grand Tour: Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
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
}];

// TODO confirm
const ACTIVITY = {
  // Wreckage
  55962: {
    communication: 'Email, Discord',
    flightActivity: 'Battlefront PvP and PvE',
    otherActivity: '',
    notes: '',
  },
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'SC PvE',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: '',
    notes: '',
  },

  // Robert Hogan
  55859: {
    communication: 'Email, Discord',
    flightActivity: 'Battlefront PvP',
    otherActivity: '',
    notes: 'Congrats on the new position',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and PvP, Battlefront 2 PvE',
    otherActivity: 'IOA Duties, Trivia Grand Tour, Created WiKi ',
    notes: 'Good luck as the new Sin CMDR, I have full faith you will keep the squadron going strong',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
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
        I am very sorry everyone for the delayed report. I have been super busy with my new job. There have been many events that have occurred since the last report. 
        The first thing is we sadly have lost Coremy to the reserves, He was very tied up in real life and said that he need to step down, but hopes to be back sometime 
        in 2022. With him stepping down we had an open FL position open, Without a doubt, Robert Hogan was the perfect candidate for the role and I wish him the best as 
        Flight Leader of Sin Flight II. 
        </p>
		    <p>As many of you know already, I have accepted an offer for a new job. All the schooling, certifications, and working in the tech field have landed me a career that I 
          had dreamt of for years. This has been something I have worked hard on for a long time, but now I have to work even harder.  While I am extremely happy about finally 
          accomplishing my goal, I am saddened that this career change leaves me little time to still be the CMDR of Sin Squadron. That is why effective immediately  I will be 
          stepping down and SkyShadow will be taking over as the new Squadron Commander of Sin. I am a firm believer in leading by example and giving 100% commitment to what I 
          do. Unfortunately, I would not be able to do this anymore as CMDR and that is why it is time to pass the torch to someone who can keep the flame burning strong. I plan 
          on sticking around in Sin and still flying when I actually get free time and things settle down a bit. But for now please congratulate SkyShadow on the new position and 
          make him buy you a beer when you see him.</p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>I will be stepping down as Sin CMDR and SkyShadow will be taking over</li><br></br>
                <li>Robert Hogan promoted to FL </li><br></br>
                <li>Coremy to the Reserves</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
                <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      My Tour of Duty as Sin Squadron Commander has been great. I had a lot of fun running the squadron even if the time was cut short, though I do feel we accomplished a lot 
      here. You all were the best damn set of pilots a CMDR could ask for. I hope to one day be a CMDR again maybe someday in the future. But until then I will be happy just flying 
      and being a part of the squadron, and hopefully helping us win some Fleet wide competitions along the way. Until then I will see you all in the skies unleashing hell.   
      <p>For Sin!</p>
      <p>MAJ Wreckage</p>
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
