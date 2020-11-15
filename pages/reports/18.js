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

import styles from '../../components/styles';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 18;
const startDate = '2020-11-1';
const endDate = '2020-11-07';
const submissionDate = '2020-11-08';

// TODO UPDATE
const orders = [{
  name: 'TIE-Free 208',
  id: 839,
  title: 'Talons First Patrol',
}, {
  name: 'XvT-Free 119',
  id: 869,
  title: 'Copperhead Squadron: Patrol',
}, {
  name: 'XWA-Free 95',
  id: 935,
  title: 'The Legend of the Pink Star Book',
}];

// TODO REVIEW
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
  id: '3190',
  name: 'All I want for Life Day is my COMPOST Membership Card',
  ends: '2020-11-16',
  units: 'Entire TC',
  highlight: true,
  notes: 'Fly TIE-TC 244, Lord of the TIEs, and reach for the highest score you can get.',
}, {
  id: '3205',
  name: 'TIE Corps Power Hour',
  ends: '2020-12-31',
  unitS: 'Entire TC',
  highlight: true,
  notes: 'Join the 5mans Power Hour and destroy all who get in our way in Squadrons.',
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
    flightActivity: 'Star Wars Squadrons PvP; Emperors Wrath tournament win; EH weekly shootout participation',
    otherActivity: 'Took MCBS',
    notes: 'ISs for Squadrons activity.',
  },
  // LT Synapse
  55921: {
    communication: 'Email, discord',
    notes: 'Joined this week and already an LT after updating his INPR. Congrats, LT Synapse!',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; EH weekly shootout participation',
    otherActivity: 'Working on art projects for the squadron reports. Nice job on TCCORE!',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; EH weekly shootout participation',
    otherActivity: 'Working on art projects for the squadron reports',
  },

  // Marek
  55825: {
    communication: 'Email, discord',
    flightActivity: 'XWA battles, Tempest Squadron Orders',
    otherActivity: 'Reviews for each battle flown',
    notes: 'Busy week for you, although you managed a few battles- and reviews! Excellent work.',
  },
  // Hermann
  6490: {
    communication: 'Email, discord',
    flightActivity: 'Several TIE battles, as well as BoP and XWA missions for the Tempest Squadron Orders',
    otherActivity: 'Participation in ChalCOM competition; participation in Challenge Trivia competition; TIE-fighter custom text scroller',
    notes: 'Even more battles from Hermann, making it challenging for his CMDR to pick good missions for Tempest Squadron Orders. IS-SW for Challenge SP Pilot of the month, 2nd place.',
  },
  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons single player games',
    otherActivity: 'Partcipation in ChalCOM competition',
    notes: 'Great communication as always, and looking into a new HOTAS setup',
  },
  // Kalve
  1968: {
    communication: 'None',
    notes: 'A pair of IS-SWs for Squadrons PvE for the captain.',
  },

  // Phalk
  6874: {
    communication: 'Email, discord',
    flightActivity: 'Several TIE and XWA battles completed',
    otherActivity: 'Reviews submitted',
    notes: 'Congratulations on the IS-GR for Zekk\'s birthday wishes and IS-GW for Challenge SP Pilot of the month!',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'LT Rhygaar flew together with his commander to satisfactory performance.',
  },
  // Nindo
  55916: {
    communication: 'Discord',
    notes: 'Just after joining, LT Nindo earned an MoI, a promotion, and his first LoC. We shall watch your career with great interest.',
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
            Thunder Squadron's report came back and confirmed what the intel from Firebird
            Squadron predicted: less then a parsec away, an MC-75 cruiser and a pair of Nebulon-B
            frigates was patrolling a mineral-rich asteroid field. Firebird's X-Wings and Y-Wings,
            fitted with Rebel IFF transponders, had been tasked to pose as friendly ships from a
            nearby sector, and if they were successful, they were docked inside one of the frigate's
            hangars for "repairs". From their position they would be unable to report back to the
            battlegroup, but at the very least, Thunder reported no signs of combat or wreckage.
            On the M/INT Fairchild, Denys Elara addressed the pilots of Wing X's squadrons
            to confirm orders before the jump to hyperspace: they were to capture at
            least one frigate and cripple the rest of the rebel fleet. Inferno's TIE Interceptors
            would engage starfighters while their TIE Reapers provided cover to Cyclone's and
            Tempest's heavy assault craft; Typhoon would be on standby to escort Moonsoon's
            transports.
          </em>
        </p>

        <p>
          Last week was a news-heavy report, and this week's is no different. We welcome
          LT Synapse who joined us on November 2 and has already been promoted, as well as
          a promotion from SL to LT for Nindo Ardinn. It's the second week of HA Dempsey's
          competition, and now we have not one but two sets of TCiB battles to complete. MSEs
          have been reviews and medals are pending, with nearly everbody earning something.
          Lastly, we have a few new competitions - so make sure to review the competitions
          towards the end of this report to see what's happening across the TIE Corps.
        </p>

        <p>
          The TCPM has been updated as well, so take a look at the latest updates at
          <a href="https://tc.emperorshammer.org/downloads/TCPM.pdf" style={styles.a}>
            https://tc.emperorshammer.org/downloads/TCPM.pdf
          </a>
          .
        </p>

        <p>
          HA Dempsey's "Wake Me Up When November Ends" competition has started
          its second week. This week the competitions are:
        </p>

        <ul>
          <li>
            <a
              href="http://tc.emperorshammer.org/timetest.php?testid=825448"
              style={styles.a}
            >
              Buildings that will stand the test of time
            </a>
            : Identify the famous buildings.
          </li>
          <li>
            Pilot's Arena: get as close to the score- not a high score- as possible.
            <ul>
              <li>
                {'Single player segment: '}
                <a
                  href="https://tc.emperorshammer.org/download.php?id=1390&type=info"
                  style={styles.a}
                >
                  XvT-Free #229
                </a>
                ; target: 11,394 pts
              </li>
              <li>
                Multi player segment: Star Wars Squadrons: Fleet battle mode; target: 8,258 pts
              </li>
            </ul>
          </li>
          <li>
            <a href="http://tc.emperorshammer.org/timetest.php?testid=927033" style={styles.a}>
              What did you say?
            </a>
            : read the quote, name the character.
          </li>
          <li>
            Online insanity: Get the top score in
            <a href="https://www.agame.com/game/bubble-shooter-classic" style={styles.a}>Bubble Shooter</a>
            .
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
          October TCiB assignments are due November 12 and are:
        </p>

        <ul>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=243&type=info" style={styles.a}>
              TIE-TC battle 113: Raid on Casserine
            </a>
          </li>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=1095&type=info" style={styles.a}>
              XvT-TC battle 89: Bubbas Beer, Bread and Message Board Bonanza!
            </a>
          </li>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=1370&type=info" style={styles.a}>
              XWA-TC battle 58: Expansion
            </a>
          </li>
        </ul>

        <p>
          November TCiB assignments are due November 30 and are:
        </p>

        <ul>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=244&type=info" style={styles.a}>
              TIE-TC battle 114: Stop the Press!
            </a>
          </li>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=1098&type=info" style={styles.a}>
              XvT-TC battle 92 - Wing VIII: Prelude
            </a>
            (note: requires the EH Ship Patch for XvT even though it's not listed)
          </li>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=1164&type=info" style={styles.a}>
              XWA-TC battle 46: The Rescue of Anna Darksaber
            </a>
          </li>
        </ul>
      </Intro>

      <Orders missions={orders}>
        <p>
          This is the
          <strong>{' first '}</strong>
          week these orders are active. You will have until November 22 to finish these
          missions for the high score competition.
        </p>

        <p>
          Congratulations to LCM Marek who had the high score last week!
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        We're back up to 12 members again with the addition of two bright new LTs.
        I'm Looking forward to working with our new pilots and rounding out November
        with a strong showing for Dempsey's yearly competition- let's make sure Tempest
        takes home the win.
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
