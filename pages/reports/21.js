/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';
import Card from '../../components/card';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 21;
const startDate = '2020-11-22';
const endDate = '2020-11-28';
const submissionDate = '2020-11-29';

const orders = [{
  name: 'TIE-Free 105',
  id: 350,
  title: 'Blowing Crap Up',
}, {
  name: 'XvT-Free 127',
  id: 892,
  title: 'Folly: The Endless Inspection',
}, {
  name: 'XWA-Free 128',
  id: 1242,
  title: 'Protect FMC Fleet',
}];

const competitions = [{
  id: '3178',
  name: 'Tempest Squadron Orders',
  ends: '2021-10-01',
  units: 'Tempest Squadron',
  highlight: true,
  notes: 'Complete biweekly missions for iron stars every 2 weeks and at the end of the year!',
}, {
  id: '3209',
  name: 'Trivia for the Challenged',
  ends: '2021-12-31',
  units: 'ISD-II Challenge',
  notes: 'Star Wars trivia, run by COL Stryker.',
}, {
  id: '3205',
  name: 'TIE Corps Power Hour',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Join the 5mans Power Hour and destroy all who get in our way in Squadrons.',
}, {
  id: '3204',
  name: 'Galactic Linguist',
  ends: '2021-11-31',
  units: 'Entire TC',
  notes: 'Decrypt messages in languages from across the Galaxy.',
}, {
  id: '3208',
  name: 'TIE Corps "Help Me Help You" 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Whoever gets the most SWS assists wins an IS-GW/SW/BW.',
}, {
  id: '3185',
  name: 'TIE Corps Space Superiority 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring PvP pilots in Squadrons dogfights. Send your screenshots to AD Prower.',
}, {
  id: '3183',
  name: 'TIE Corps Capital Strike 2020 (PvP Fleet Battles)',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring cap damage in Squadrons fleet battles. Send your screenshots to AD Prower.',
}, {
  id: '3184',
  name: 'TIE Corps Capital Strike vs AI 2020 (PvE)',
  ends: '2020-12-31',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring cap damage in Squadrons PvE fleet battles. Send your screenshots to AD Prower.',
}, {
  id: '3207',
  name: 'Hammer Patch',
  ends: '2020-11-30',
  units: 'Entire TC',
  notes: 'Create a patch for the ISD Hammer for an Iron Star.',
}, {
  id: '3207',
  name: 'Firebird Banner Competition',
  ends: '2020-11-30',
  units: 'Entire TC',
  notes: 'Create a banner for Firebird for an Iron Star.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3135',
  name: 'Challenge Pilot of the month (SP/MP)',
  ends: '2020-12-31',
  units: 'ISD-II Challenge',
}, {
  id: '3134',
  name: 'Dempsey\'s Weekly Screenshots',
  ends: '2020-12-31',
  units: 'ISD-II Challenge',
}, {
  id: '3112',
  name: 'Cryp-TAC',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3102',
  name: 'Everyone\'s a Critic',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3100',
  name: 'TIE Corps in Battle 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3093',
  name: 'Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3089',
  name: 'TIE Corps on the CoOp-Front - 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3088',
  name: 'TIE Corps on the MP-Front - 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3087',
  name: 'COO/SOO Riddle 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3084',
  name: 'COO\'s Star Wars Challenge, Episode VI',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3083',
  name: 'MP COOP Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3082',
  name: 'MP Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}];

const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, Discord',
    flightActivity: 'Star Wars Squadrons PvP; 5mans Power Hour participation; TIE for ChalCOM Competition',
    otherActivity: 'ChalCOM trivia and online game',
    notes: '',
  },
  // LT Synapse
  55921: {
    communication: 'Discord',
    notes: 'Working on getting some time in with the simulator.',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'LoCs for Squadrons PvP',
    otherActivity: 'Online game for ChalCOM competition',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'LoCs for Squadrons PvP',
    otherActivity: 'Art for Tempest WSR #21; online game for ChalCOM competition',
  },

  // Marek
  55825: {
    communication: 'Email, Discord',
    flightActivity: 'XvT and TIE, with reviews for each battle',
    notes: 'An IS-BW for winning Tempest Squadron Orders #3!',
  },
  // Hermann
  6490: {
    communication: 'Email, Discord',
    flightActivity: 'TIE missions',
    otherActivity: 'Online game for ChalCOM competition',
    notes: 'A quartet of TIEs and competition activity, nice work.',
  },
  // Richlet
  4607: {
    communication: 'Email, Discord',
    flightActivity: '',
    otherActivity: 'Online game for ChalCOM competition',
    notes: 'Always a pleasure to talk to in squadron comms.',
  },
  // Kalve
  1968: {
    communication: 'Discord',
    notes: 'Some last-minute LoS and LoC entries pushed you over the edge into a merit medal - nice work!',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA missions; TIE for ChalCOM and TCiB',
    otherActivity: 'Participated in Trivia for the challenged. Wrote reviews of flown battles and missions. Participated in COM\'s competition round 4. Writing fiction for the COM\'s competition.',
    notes: '',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    notes: 'A quiet Thanksgiving week for LT Rhygaar.',
  },
  // Nindo
  55916: {
    communication: 'Discord',
    notes: 'Busy in the IU, hope to get some flying in soon.',
  },
  // Sat Nav
  55817: {
    notes: 'Busy in the IU, hope to get some flying in soon.',
  },
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.pin]) {
      return { ...ad, ...additionalActivityData[ad.pin] };
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

      <Intro showUniform={false}>
        <img
          src="https://tempest-blown-with-the-wind.vercel.app/art/neko-sketching.jpg"
          width="100%"
          alt="LCM Neko sketching ideas."
        />

        <p>
          <em>LCM Neko sketching ideas.</em>
        </p>

        <p>
          End of the month means two things: MSEs are being processed, and Dempsey's November
          competition is over. The results aren't out yet, but I expect Tempest to take either
          first or second place. If we're second, it's bad news for some of our LTs that will
          find themselves on the wrong side of the airlock. It's also the second week for "Tempest
          Squadron Orders", so look out for new missions soon.
        </p>

        <img
          src="https://tempest-blown-with-the-wind.vercel.app/art/iam-thinking-battle.jpg"
          width="100%"
          alt="LT Iam Thinking depicts a raging battle in the stars."
        />

        <p>
          <em>LT Iam Thinking depicts a raging battle in the stars.</em>
        </p>
      </Intro>

      <Orders missions={orders}>
        <p>
          This is the
          <strong>{' second '}</strong>
          week these orders are active. You will have until December 6 to finish these
          missions for the high score competition.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        We're expecting another batch of merit medals soon, from Imperial Security Medals to
        Palpatine Crescents, Bronze and Silver Stars. Good work, pilots.
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
