import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 16;
const startDate = '2020-10-18';
const endDate = '2020-10-24';
const submissionDate = '2020-10-25';

const orders = [{
  name: 'TIE-Free 246',
  id: 1064,
  title: 'Garrison Duty',
}, {
  name: 'BoP-Free 21',
  id: 701,
  title: 'Infiltration of type 40 Cruiser \'Meteor\'',
}, {
  name: 'XWA-Free 43',
  id: 655,
  title: 'TAC2K',
}];

const competitions = [{
  id: '3178',
  name: 'Tempest Squadron Orders',
  ends: '2020-10-21',
  units: 'Entire TC',
  highlight: true,
  notes: 'Complete biweekly missions for iron stars every 2 weeks and at the end of the year!',
}, {
  id: '3190',
  name: 'All I want for Life Day is my COMPOST Membership Card',
  ends: '2020-16-11',
  units: 'Entire TC',
  highlight: true,
  notes: 'Fly TIE-TC 244, Lord of the TIEs, and reach for the highest score you can get.',
}, {
  id: '3204',
  name: 'Galactic Linguist',
  ends: '2021-11-31',
  notes: 'Decrypt messages in languages from across the Galaxy.',
}, {
  id: '3199',
  name: 'Art for the Dragonkind',
  ends: '2020-11-20',
  units: 'Entire TC',
  notes: 'Create a new banner for Epsilon Squadron.',
}, {
  id: '3197',
  name: 'Happy birthday, dear Zekkie!',
  ends: '2020-11-07',
  units: 'Entire TC',
  notes: 'Lavish praise upon Zekk for bring born.',
}, {
  id: '3191',
  name: 'Squadrons Completionist',
  ends: '2021-10-31',
  units: 'Entire TC',
  notes: 'Be the first to complete all Squadrons achivements for an IS-GW.',
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
  id: '3176',
  name: 'Cockpit Flair Competition',
  ends: '2020-11-01',
  units: 'Entire TC',
}, {
  id: '3168',
  name: 'Sinful Imagery',
  ends: '2020-10-31',
  units: 'Entire TC',
}, {
  id: '3155',
  name: 'Wake me up when November ends',
  ends: '2020-11-30',
  units: 'ISD-II Challenge',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3161',
  name: 'Shakespearean-esque lyrics for modern songs',
  ends: '2020-10-31',
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

const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, discord',
    flightActivity: 'Star Wars Squadrons PvP',
    otheractivity: 'Added "IOA" to his ID line, and will be helping the IO build tools.',
    notes: 'Several new LoC production machines have been commissioned from the scraps of the Golan III outpost recently salvaged by the Challenge.',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; Weekly shootout competition',
    notes: 'Having fun with Squadrons, and doing a bit of art on the side.',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; Weekly shootout competition',
    notes: 'Enjoying Squadrons! Acquired a new office chair which seems to help.',
  },

  // Marek
  55825: {
    communication: 'Email, discord',
    flightActivity: 'TIE battles; TIE-TC 244 for COMPOST competition; Tempest Squadron Orders submission',
    notes: 'Congrats on beating TIE-TC 244! Impressive victory.',
  },
  // Hermann
  6490: {
    communication: 'Email, discord',
    flightActivity: 'Submissions for Tempest Squadron Orders; TIE, XvT, and XWA battles',
    otherActivity: 'MCBTS IU Course; submission for Riders of the Storm competition; Trivia for the Challenged',
    notes: 'One of the most active pilots in Wing X. Excellent flying.',
  },
  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons singleplayer matches and campaign; submission for Riders of the Storm competition',
    notes: 'Active in Discord and working through Squadrons in singleplayer. Beautiful patch submission as well.',
  },
  // Kalve
  1968: {
    communication: '',
    flightActivity: '14 Squadrons PvE submissions',
    notes: 'Poor COO\'s office never catches a break. Keep making them earn their pay, Kalve!',
  },

  // Phalk
  6874: {
    communication: 'Email, discord',
    flightActivity: 'Tempest Squadron Orders submission',
    otherActivity: 'Trivia for the Challenge; submissions for Riders of the Storm competition; patches and banners submitted for lesser squadrons; MCBS IU exam; work on custom TIE free mission',
    notes: 'I\'m excited to see the  mission! Thanks for participating in the Tempest art competitions as well.',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    notes: 'Looking forward to more Squadrons together! Very active on Discord.',
  },
  // Polo
  12796: {
    communication: 'Discord',
    notes: 'More SC LoSes, and a fun discussion about some favorite battles (XvT-TC 50, XWA-TC 39, XWA-TC 36, XWA-IW 1, and XWA-CAB 1, if anyone wants suggestions!)',
  },
  // Sat Nav
  55817: {
    communication: 'Discord',
    notes: 'Responsive on Discord. Let me know if you would like to fly together again sometime!',
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
            A silver cart rolled into Silwar&apos;s office, clothes hangers rattling against the
            steel structure. &ldquo;Sir, the new uniforms have arrived for your inspection,&rdquo;
            a young but confident sub-lieutenant announced. &ldquo;Excellent. Leave them
            here,&rdquo; replied Silwar, waving him out of the room. They had arrived just in time
            for the pomp of MAJ Hermann&apos;s Gold Star ceremony, which would be held later that
            evening. Silwar unzipped his own to review the new patch, and was pleased with the
            updated look for Tempest.
          </em>
        </p>

        <p>
          We have several news items this week: first is Major Hermann&apos;s Gold Star of the
          Empire for his September performance:
        </p>

        <blockquote>
          <em>
            Major Hermann is an inexhaustible TIE Pilot, one of six pilots in the TIE Corps' history
            who have earned the coveted rank of Imperator. During the month of September alone, he
            flew 744 missions in an enormous range of craft; he was just as adept in a TIE Fighter
            as a GUN, a Tug, or an X-Wing. He worked nonstop to bring glory to Tempest Squadron, the
            Challenge, and her crew; and not only did he complete a prodigious number of missions,
            but he diligently took notes and advised his peers. He is active and communicative, and
            encourages the pilots in Tempest. He has the admiration of his fellow pilots, the
            respect of his commander, and a historic role in the TIE Corps, and for this I recommend
            the Gold Star of the Empire.
          </em>
        </blockquote>

        <p>Additionally:</p>

        <blockquote>
          <em>
            Not to take away from the contributions of other pilots from the ISDII Challenge during
            Raise the Flag, but MAJ Hermann was the secret weapon they didn't know they had until
            the points started pouring in. Demonstrating that level of commitment to a squadron
            and ship that a pilot hasn't been with for very long is a rare thing, worthy of one
            of the highest medals the Corps has to offer.
          </em>
        </blockquote>

        <p>
          Next is the new Tempest Squadron patch and banner. After some internal deliberation and
          executive decisions, we have our new patch. Uniforms to be distributed shortly.
        </p>

        <p>
          Additionally, the first two weeks of Tempest Squadron Orders is over; Marek has won with
          high scores across all three platforms, although with a strong showing from both Hermann
          and Phalk. Remember: anyone who completes at least 50% of missions on time for the year
          earns an IS-SW regardless of score! This week I have selected free missions so that
          we can focus on TCiB battles and any last-minute activity for October before MSEs are
          processed.
        </p>

        <p>
          TCiB assignments:
        </p>

        <ul>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=243&type=info">
              TIE-TC battle 113: Raid on Casserine
            </a>
          </li>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=1095&type=info">
              XvT-TC battle 89: Bubbas Beer, Bread and Message Board Bonanza!
            </a>
          </li>
          <li>
            <a href="https://tc.emperorshammer.org/download.php?id=1370&type=info">
              XWA-TC battle 58: Expansion
            </a>
          </li>
        </ul>
      </Intro>

      <Orders missions={orders}>
        <p>
          This is the
          <strong>{' first '}</strong>
          week these orders are active. You will have until November 8 to finish these
          missions for the high score competition.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        <p>
          The last of September&apos;s MSE awards have gone out just in time for me to start
          thinking about the October MSE. Tempest continues to have a strong showing, and I
          expect many more merit medals distributed. Now is the chance to get a last burst in
          before evaluations!
        </p>
      </Closing>

      <Footer />
    </>
  );
}

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
