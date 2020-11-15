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

const reportNumber = 19;
const startDate = '2020-11-8';
const endDate = '2020-11-15';
const submissionDate = '2020-11-16';

const orders = [{
  name: 'TIE-Free 208',
  id: 839,
  title: 'Talon\'s First Patrol',
}, {
  name: 'XvT-Free 119',
  id: 869,
  title: 'Copperhead Squadron: Patrol',
}, {
  name: 'XWA-Free 95',
  id: 935,
  title: 'The Legend of the Pink Star Book',
}];

const competitions = [{
  id: '3178',
  name: 'Tempest Squadron Orders',
  ends: '2021-10-01',
  units: 'Entire TC',
  highlight: true,
  notes: 'Complete biweekly missions for iron stars every 2 weeks and at the end of the year!',
}, {
  id: '3155',
  name: 'Wake me up when November ends',
  ends: '2020-11-30',
  units: 'ISD-II Challenge',
  highlight: true,
  notes: 'Ship wide competition with something for everybody.',
}, {
  id: '3205',
  name: 'TIE Corps Power Hour',
  ends: '2020-12-31',
  unitS: 'Entire TC',
  highlight: true,
  notes: 'Join the 5mans Power Hour and destroy all who get in our way in Squadrons.',
}, {
  id: '3209',
  name: 'Trivia for the Challenged',
  ends: '2021-12-31',
  units: 'ISD-II Challenge',
  notes: 'Star Wars trivia, run by COL Stryker.',
}, {
  id: '3212',
  name: 'Hammer Patch',
  ends: '2020-11-30',
  units: 'Entire TC',
  notes: 'Create a patch for the ISD Hammer.',
}, {
  id: '3204',
  name: 'Galactic Linguist',
  ends: '2021-11-31',
  units: 'Entire TC',
  notes: 'Decrypt messages in languages from across the Galaxy.',
}, {
  id: '3199',
  name: 'Art for the Dragonkind',
  ends: '2020-11-20',
  units: 'Entire TC',
  notes: 'Create a new banner for Epsilon Squadron.',
}, {
  id: '3191',
  name: 'Squadrons Completionist',
  ends: '2021-10-31',
  units: 'Entire TC',
  notes: 'Be the first to complete all Squadrons achivements for an IS-GW.',
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
  name: 'Firebird Banner Competition',
  ends: '2020-11-30',
  units: 'Entire TC',
  notes: 'Create a banner for Firebord for an Iron Star.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3136',
  name: 'Warden\'s IU Tuition Assistance',
  ends: '2020-12-31',
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
  id: '3128',
  name: 'Warden\'s Sitcom Monthly Run-On',
  ends: '2020-12-31',
  units: 'Entire TC',
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

// TODO UPDATE
const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, discord',
    flightActivity: 'Star Wars Squadrons PvP; EH weekly shootout participation; 5mans Power Hour participation',
    otherActivity: 'MoI for recruiting SL EchoVII; IS-BWs for shootout participation; IS-BR for a birthday card for CMDR Zekk.',
    notes: 'Remembered how to play singleplayer this week, after a month and a half of SWS.',
  },
  // LT Synapse
  55921: {
    communication: 'Discord',
    notes: 'Congratulations on your quick promotion to LT.',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; EH weekly shootout participation',
    otherActivity: 'Working on even more art projects for the squadron reports, such as that featured here! Also an IS-BW for Shootout participation and several LoCs.',
    notes: 'Thanks again for the art this week! You have earned a PC for last month - not to mention your promotion to LCM!',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; EH weekly shootout participation',
    otherActivity: 'Started TCCORE. An IS-BW for shootout participation and another LoC for the LT.',
    notes: 'Great flying last night, and congrats on the ISM.',
  },

  // Marek
  55825: {
    communication: 'Email, discord',
    flightActivity: 'Several battles across all platforms, including for ChalCOM competition and TCiB',
    notes: 'An IS-SR for "Everyone\'s a Critic", and flying for multiple competitions. Congratulations on your BS, you have earned it.',
  },
  // Hermann
  6490: {
    communication: 'Email, discord',
    flightActivity: 'Several battles across all platforms, including for ChalCOM competition and TCiB',
    otherActivity: 'Participation in ChalCOM competition',
    notes: 'A Bronze Star for a month of high activity.',
  },
  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP for the Shootout',
    notes: 'Great flying in the Shootout! I enjoyed flying together.',
  },
  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP; XvT PvP',
    notes: 'Congratulations on the PC for last month! It was fun running into you in Squadrons as well.',
  },

  // Phalk
  6874: {
    communication: 'Email, discord',
    flightActivity: 'TIE battles for TCiB and Tempest Squadron Orders',
    otherActivity: 'Trivia for the Challenged',
    notes: 'An IS-GR for top October mission reviewer - great work! An IS-BR for Trivia for the Challenged as well.',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Nice job on the Squadrons win!',
  },
  // Nindo
  55916: {
    communication: 'Discord',
  },
  // Sat Nav
  55817: {
    communication: 'Discord',
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

      <Intro>
        <p>
          <em>
            The alarm on Colonel Naiilo's dashboard beeped; they were about to drop out of
            hyperspace, and if the calculations were ccurate, within range of the Nebulon-B
            frigates that flanked the enemy MC-75 cruiser. Their target was to capture at least
            one of the frigates- Firebird was supposed to be aboard the one to port of the cruiser-
            and destroy as much as possible of the rest of the fleet. Tempest's TIE Defenders and
            Missile Boats were perfect for the job, especially wth Inferno to ensure space
            superiority. Exactly as practiced, Tempest Squadron dropped out of hyperspace moments
            beore the M/INT Fairchild carrying the hyperdrive-less TIE Interceptors of Inferno, a
            backdrop of nebulae framing the battlefield...
          </em>
        </p>

        <p>
          This week, the MSE awards have gone out, and every single pilot who was here for the
          entire month of October earned a medal - that's something to be very proud of. The SOO
          passes on his compliments. In procedural updates, you'll see additional updates to the
          report template this week; I have added flight information and cleaned up some of the
          colors. Lastly, we have some work to do to catch up with Firebird in Dempsey's "Wake
          Me Up When November Ends" - it's time to kick it into high gear. After our strong RtF
          performance, we have no excuses to fall behind on our own ship.
        </p>

        <img
          src="https://tempest-blown-with-the-wind.vercel.app/art/neko-iam-bunks.jpg"
          width="100%"
          alt="An illustration of LT Neko and LT Iam Thinking's bunks"
        />

        <p>
          <em>"LT Iam Thinking and LCM Neko's Bunks", art by LCM Neko.</em>
        </p>

        <p>
          In addition to LCM Neko's work, if you have any art, fiction, tips, mission suggestions,
          or anything else to add to the WSR, please contact me. I'd be happy to include any
          content into my report.
        </p>

        <p>
          HA Dempsey's "Wake Me Up When November Ends" competition has started
          its third week. This week the competitions are:
        </p>

        <ul>
          <li>
            <Link
              href="http://tc.emperorshammer.org/timetest.php?testid=433386"
            >
              Photo Round
            </Link>
            : Identify the animals
          </li>
          <li>
            Pilot's Arena: get as close to the score- not a high score- as possible.
            <ul>
              <li>
                {'Single player segment: '}
                <Link
                  href="https://tc.emperorshammer.org/download.php?id=1391&type=info"
                >
                  XWA-Free #150
                </Link>
                ; target: 2,123 pts
              </li>
              <li>
                Multi player segment: Star Conflict, Player vs AI; target: 981 pts (any game type)
              </li>
            </ul>
          </li>
          <li>
            <Link href="http://tc.emperorshammer.org/timetest.php?testid=863210">
              I'm talking to you
            </Link>
            : identify which characer the quote was directed towards.
          </li>
          <li>
            {'Online insanity: Get the top score in '}
            <Link href="https://www.bgames.com/shooting-games/kill_the_coronavirus/">
              Kill the Coronavirus.
            </Link>
          </li>
          <li>
            Musings of a madman: write fiction throughout the month featuring
            the Challenge or one of its pilots. You can submit up to three
            fictions, but each pilot is eligible for only one medal, and one
            set of points.
          </li>
        </ul>

        <p>
          Read the COM report for the full information on the point breakdown,
          or visit the competition link below which explains it in detail as well.
        </p>

        <p>
          November TCiB assignments are due November 30 and are:
        </p>

        <ul>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=244&type=info">
              TIE-TC battle 114: Stop the Press!
            </Link>
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1098&type=info">
              XvT-TC battle 92 - Wing VIII: Prelude
            </Link>
            {' (note: requires the EH Ship Patch for XvT) '}
          </li>
          <li>
            <Link href="https://tc.emperorshammer.org/download.php?id=1164&type=info">
              XWA-TC battle 46: The Rescue of Anna Darksaber
            </Link>
          </li>
        </ul>
      </Intro>

      <Orders missions={orders}>
        <p>
          This is the
          <strong>{' second '}</strong>
          week these orders are active. You will have until November 22 to finish these
          missions for the high score competition.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        Congratulations to all on their MSE merit medals. I have begun contacting our LTs about
        requirements for promotion to LCM, and expect to continue to see great things from our
        squadron. We have two more weeks of the COM's challenge, "Wake Me Up When November Ends",
        and we're closing on Firebird; let's try to get our participation numbers up.
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
