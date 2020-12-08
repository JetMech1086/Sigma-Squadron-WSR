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

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 22;
const startDate = '2020-11-29';
const endDate = '2020-12-05';
const submissionDate = '2020-12-07';

const orders = [{
  name: 'TIE-Free 209',
  id: 847,
  title: 'Historic Mission #1367',
}, {
  name: 'XvT-Free 97',
  id: 803,
  title: 'Rescue Shroomy (Requires EH Ship Patch)',
}, {
  name: 'XWA-Free 103',
  id: 999,
  title: 'Diamondback Sqd #1: Rebel Listening Outpost',
}];

const competitions = [{
  id: '3178',
  name: 'Tempest Squadron Orders',
  ends: '2021-10-01',
  units: 'Tempest Squadron',
  highlight: true,
  notes: 'Complete biweekly missions for iron stars every 2 weeks and at the end of the year!',
}, {
  id: '3216',
  name: 'Stay In the Lines',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Choose any of the art in Tempests\' WSRs, color it, and email it to Silwar. Awards monthly.',
  highlight: true,
}, {
  id: '3214',
  name: 'Where Oh Where Has The Commodore Gone?',
  ends: '2020-12-20',
  units: 'ISD-II Challenge',
  notes: 'Write a fiction of at least one page involving units of the ISD Challenge locating and retrieving our erstwhile Commodore.',
  highlight: true,
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
    flightActivity: 'Star Wars Squadrons PvP; 5mans Power Hour participation',
    otherActivity: 'ChalCOM trivia and online game',
    notes: 'Lots of Iron Stars for ChalCOM competition',
  },
  // LT Synapse
  55921: {
    communication: 'Discord',
    notes: 'Setting up the simulator.',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Art for WSR #22',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'IS-BR for ChalCOM competition',
  },

  // Marek
  55825: {
    communication: 'Email, Discord',
    flightActivity: '',
    notes: 'Six Iron Stars for the ChalCOM competition, and another IS-GR for being the top reviewer in the TC for November.',
  },
  // Richlet
  4607: {
    communication: 'Email, Discord',
    flightActivity: 'TIE for Tempest Squadron Orders',
    otherActivity: '',
    notes: 'Good to see you flying the old sims again!',
  },
  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP and PvE',
    notes: 'Nice Squadrons flying.',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA and TIE missions, including for Tempest Squadron Orders',
    otherActivity: 'Participated in Trivia for the challenged. Wrote reviews of flown battles and missions. Working on fiction.',
    notes: 'Congrats on all of the Iron Stars! Tremendous amount of flying as well.',
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
    notes: 'Transferring to the reserves soon - best of luck, and hope to see you back soon.',
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
        <p>
          This month sees about 35 medals awarded to Tempest members, without counting combat
          legions. Iron Stars for fleetwide comps and "Wake Me Up When November
          Ends" join October MoCs to make the "Pilot Activity" section fairly lengthy. November
          MSEs have also been graded by most of the command staff, and almost everyone will be
          earning something for their activity from ISMs to Silver Stars. I'm very proud of the
          activity we've been accomplishing as a squadron; while some of us focus on singleplayer,
          some multiplayer, and some art or trivia, everyone is contributing something to the
          fleet that they enjoy doing. Tempest is a diverse set of pilots with different
          preferences, but we can all come together for a drink at the cantina at the end of
          the day, and share stories about Argentinian food, kittens, and music.
        </p>

        <p>
          LCM Neko is running a new competition, called
          <Link href="https://tc.emperorshammer.org/competitions.php?id=3216">"Stay In the Lines"</Link>
          . Choose any art
          submission from Tempest's WSRs, and color it using any method you choose - crayon,
          watercolor, digitially, or anything else. Pilots may submit more than one, although
          a pilot can only win one medal. This will go on monthly, with awards sent out the first
          of the following month. Here's this month's:
        </p>

        <img
          src="https://tempest-blown-with-the-wind.vercel.app/art/neko-gonk-gallery.png"
          width="100%"
          alt="LCM Neko visits the Porgs"
        />

        <p>
          <em>"COL Silwar's collection of modified Gonk droids", art by LCM Neko.</em>
        </p>

        <p>
          TCiB results came in, and Marek and Phalk are carrying us towards victory with excellent
          scores last month. We have a great shot at taking the win this year thanks to them. I've
          already completed this month's TIE and XWA, so drop by in the Discord channel to discuss
          tactics.
        </p>

        <p>
          December TCiB assignments are due December 31 and are:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=258&type=info">
              TIE-TC battle 119: The Razinki Operation
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1136&type=info">
              XvT-TC battle 103 - ASF: 341
            </Link>
            {' (note: requires the EH Ship Patch for XvT) '}
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=629&type=info">
              XWA-TC battle 22: The Career of Adrenaline
            </Link>
          </li>
        </ul>
      </Intro>

      <Orders missions={orders}>
        <p>
          Congratulations to LC Phalk Sturm, who won the last set of orders with 192 points!
        </p>

        <p>
          This is the
          <strong>{' first '}</strong>
          week these orders are active. You will have until December 20 to finish these
          missions for the high score competition.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        TODO closing
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
