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

const reportNumber = 20;
const startDate = '2020-11-15';
const endDate = '2020-11-21';
const submissionDate = '2020-11-22';

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
  id: '3155',
  name: 'Wake me up when November ends',
  ends: '2020-11-30',
  units: 'ISD-II Challenge',
  highlight: true,
  notes: 'Ship wide competition with something for everybody.',
}, {
  id: '3209',
  name: 'Trivia for the Challenged',
  ends: '2021-12-31',
  units: 'ISD-II Challenge',
  notes: 'Star Wars trivia, run by COL Stryker.',
  highlight: true,
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
    flightActivity: 'Star Wars Squadrons PvP; 5mans Power Hour participation; XWA for ChalCOM Competition; Squadrons PvP shootout',
    otherActivity: 'ChalCOM trivia and online game. Mailed out 17 Tempest stickers. Set up online ad campaign for the TIE Corps. Started XWA mission creation exam.',
    notes: 'IS-BWs for third place in TCiB XvT and overall',
  },
  // LT Synapse
  55921: {
    communication: 'Discord',
    notes: 'Busy training in the IU, but looking forward to more combat experience soon.',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'LoCs for Squadrons PvP',
    otherActivity: 'Art for Tempest WSR #20',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'LoCs for Squadrons PvP',
  },

  // Marek
  55825: {
    communication: 'Email, Discord',
    flightActivity: 'XWA-Free for ChalCOM, photo round and quotes for ChalCOM competition; custom minimage',
    notes: 'IS-GW and the title Lord of the TIEs for winning the TCCOM competition, and IS-SWs for first place in TCiB XvT and XWA.',
  },
  // Hermann
  6490: {
    communication: 'Email, Discord',
    flightActivity: 'ChalCOM singleplayer competiiton entries and a couple TIE-TC battles besides',
    otherActivity: 'Participation in ChalCOM competition',
    notes: 'Top Tempest pilot for November in singplayer missions; second on the ship to our COM. Keep up the good work.',
  },
  // Richlet
  4607: {
    communication: 'Email, Discord',
    flightActivity: 'LoCs and LoSs for Squadrons PvP and PvE',
    otherActivity: 'Contributed recipe column to Tempest Squadron weekly report',
    notes: 'I look forward to your career as Tempest\'s quartermaster.',
  },
  // Kalve
  1968: {
    communication: 'Discord',
    otherActivity: 'Online game for ChalCOM competition, Trivia for the Challenged',
    notes: 'We\'re both looking forward to Squadrons private matches. Good job with the competitions!',
  },

  // Phalk
  6874: {
    communication: 'Email, Discord',
    flightActivity: 'XWA for ChalCOM competition; TCiB battles',
    otherActivity: 'Participated in Trivia for the challenged. Wrote reviews of flown battles. Participated in ChalCOM competition round 3. Submitted a patch for ISDII Hammer. Submitted a banner for Epsilon.',
    notes: 'Lots of competition participation - good luck on the graphic entries!',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    notes: 'Recovering in the medbay, but hoping to get some more Squadrons in soon.',
  },
  // Nindo
  55916: {
    communication: 'Discord',
    notes: '',
  },
  // Sat Nav
  55817: {
    notes: 'Potential reserves candidate - LT Sat Nav, are you there?',
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
            As soon as the M/INT Fairchild exited hyperspace, the Nebulon-B frigates and enemy
            MC-75 cruiser launched their own fighters. Inferno scrambled their TIE Intercepters
            as Tempest's Missile Boats and TIE Defenders moved to engage the frigates, exactly
            on schedule. The Fairchild activated its interdiction field, keeping everyone on the
            battlefield, while explosions began to pop like fireworks in the distance. "Where the
            hell is Firebird," Silwar wondered. "I sure hope they have their IFF in order or I'll
            get an earfull from the High Admiral." Silwar set his shields to full front and set
            full power to engines as he prepared to intercept the squadron of X-Wings approaching
            from his port side.
          </em>
        </p>

        <p>
          This week concludes the third week of the Challenge COM's competition, "Wake Me Up When
          November Ends." I wonder if the COM will be back by the end of November- not to start any
          rumors, but she's been tasking our WC Denys Elara with most of her work. We're now host
          to the Lord of the TIEs himself, LCM Marek Ny`Ifra, who has won the TCCOM's yearly
          competition - a very fitting title for a squadron that excels in singleplayer combat.
          On the multiplayer front, we've earned another few dozen LoCs, primarily from Squadrons,
          and we continue to be a major contributor to the Emperor's Hammer's war efforts in the
          unknown regions. LCM Neko and LCM Richlet have each contributed sections to this report-
          make sure to check them out, and if you're interested in contributing, contact the CMDR.
          There are merit medals to be earned by these contributions. We have begun having regular
          officer meetings between everyone from CMDRs on up to ensure that the TIE Corps is running
          smoothly. If you have any suggestions, feel free to contact me. I personally have begun
          testing out online advertisements while working on improving our database systems to
          power reports, chat bots, and more.
        </p>

        <img
          src="https://tempest-blown-with-the-wind.vercel.app/art/neko-porgs.jpg"
          width="100%"
          alt="LCM Neko visits the Porgs"
        />

        <p>
          <em>"LCM Neko befriends some Porgs?", art by LCM Neko.</em>
        </p>

        <p>
          HA Dempsey's "Wake Me Up When November Ends" competition has started
          its fourt week. This week the competitions are:
        </p>

        <ul>
          <li>
            <Link
              href="http://tc.emperorshammer.org/timetest.php?testid=679102"
            >
              Photo Round
            </Link>
            : Identify the artist <em>and</em> song title
          </li>
          <li>
            Pilot's Arena: get as close to the score- not a high score- as possible.
            <ul>
              <li>
                {'Single player segment: '}
                <Link
                  href="https://tc.emperorshammer.org/download.php?id=1266&type=info"
                >
                  TIE-Free #260
                </Link>
                ; target: 30,128 pts
              </li>
              <li>
                Multi player segment: Star Wars Squadrons, Fleet battle vs AI; target: 7,518 pts
              </li>
            </ul>
          </li>
          <li>
            <Link href="http://tc.emperorshammer.org/timetest.php?testid=3648710">
              What did you say?
            </Link>
            : identify the response to the quote, and which movie it is from
          </li>
          <li>
            {'Online insanity: Get the top score in '}
            <Link href="https://play.hotwheels.com/en-gb/games/race-car-rush.html/">
              Hot Wheels Race Car Rush
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
          <strong>{' first '}</strong>
          week these orders are active. You will have until December 6 to finish these
          missions for the high score competition.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Card>
        <h2>Challenge Cantina Special of the Day</h2>
        <p><em>Featuring LCM Richlet</em></p>

        <h4>Moroccan-Spiced Red Lentil Soup</h4>

        <p>
          Pilots, this is my personal recipe for a tasty aromatic soup.  With vegetable broth,
          it's Vegan, obviously chicken stock it won't be.  Remember when sauteeing to keep
          stirring (not CONSTANTLY, once every 20 to 30 seconds or so.)
        </p>

        <p>
          <strong>Ingredients</strong>

          <ul>
            <li>3 Tbsp. oil (olive, grapeseed, canola)</li>
            <li>1 large onion, chopped</li>
            <li>1 celery stalk, chopped</li>
            <li>1 carrot, chopped</li>
            <li>1 Tbsp. garlic, minced (use 2 or 3 if you really like garlic, like me)</li>
            <li>2L (~8 cups) vegetable stock (or chicken stock)</li>
            <li>1x 398ml (15 oz) can diced tomatoes, or 500ml (~2 cups) chopped fresh tomatoes </li>
            <li>2 cups dried red lentils (rinsed and picked through for bad ones)</li>
            <li>4 Tbsp. fresh flat-leaf parsley, chopped</li>
            <li>1 Tbsp. fresh cilantro, chopped</li>
            <li>Spice Mixture (see below)</li>
          </ul>
        </p>

        <p>
          <strong>Spice Mixture</strong>

          <ul>
            <li>2 tsp. ground coriander</li>
            <li>1 tsp. ground cumin</li>
            <li>1 tsp. ground turmeric</li>
            <li>1 tsp. smoked paprika (sweet)</li>
            <li>1/2 tsp. sweet paprika</li>
            <li>1/4 tsp. ground cinnamon</li>
            <li>1/2 tsp. kosher salt</li>
            <li>1/2 tsp ground black pepper</li>
          </ul>
        </p>

        <p>
          <strong>Method</strong>

          <ul>
            <li>Heat large saucepan over medium heat until hot and add oil</li>
            <li>Add garlic and onion and saute for ~2-3 minutes </li>
            <li>
              Add spice mixture, saute 2 minutes (don't let them burn). Then add carrot and celery.
              Saute ~4 minutes.
            </li>
            <li>Add diced tomatoes, saute 2 more minutes.</li>
            <li>Add stock and lentils, and turn heat to medium high until it begins to boil</li>
            <li>Turn heat down to low and simmer for 25-30 minutes.  Lentils should break up.</li>
            <li>Add parsley and cilantro, stir in, salt and pepper to taste.</li>
            <li>Serve! </li>
          </ul>

          <p><em>FM/LCM Richlet/Tempest 2-3/Wing X/ISDII Challenge</em></p>
        </p>
      </Card>

      <Competitions competitions={competitions} />

      <Closing>
        Firebird has moved ahead in the ChalCOM's competition, but we still have a chance. We're
        also making huge progress, carrying the ship forward in TIE Corps in Battle; great job to
        everyone involved, but it'll still be a lot of work to get to the top of the ranks. I have
        faith that we can improve our standings. Thanks to our WSR contributors Richlet and Neko!
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
