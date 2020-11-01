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

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 17;
const startDate = '2020-10-25';
const endDate = '2020-10-31';
const submissionDate = '2020-11-1';

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

const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, discord',
    flightActivity: 'Star Wars Squadrons PvP',
    otherActivity: 'Further improvements to WSR tools; planning APIs for the IO.',
    notes: '',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: '',
    otherActivity: 'Submitted art for Tempest WSR #17',
    notes: 'Fantastic work on the cantina scene!',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: '',
    notes: 'Had some PC problems this last week. Back up and running for next.',
  },

  // Marek
  55825: {
    communication: 'Email, discord',
    flightActivity: 'Four more battles and reviews, including Tempest Squadron Orders.',
    notes: 'Fantastic flying as usual- some tough scores to beat for squadron orders!',
  },
  // Hermann
  6490: {
    communication: 'Email, discord',
    flightActivity: 'TIE week for MAJ Hermann, with many more battles submitted.',
    otherActivity: 'Working on a custom TIE mission featuring Tempest.',
    notes: 'Lots of flight activity, and looking forward to seeing what you come up with!',
  },
  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    notes: 'Good to see you flying again! Congrats on the wins.',
  },
  // Kalve
  1968: {
    communication: 'Email, Discord',
    flightActivity: 'Squadrons PvP, Squadrons PvE',
    notes: 'Plenty of time in the Squadrons training simulator has paid off with nearly a half-dozen victories and an IS-SW.',
  },

  // Phalk
  6874: {
    communication: 'Email, discord',
    flightActivity: '12 more battles leading to a new FCHG rank',
    otherActivity: 'Battle reviews for everything',
    notes: 'A prolific review writer, your reviews help everyone find great battles!',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    notes: 'Looking forward to more Squadrons together! Very active on Discord.',
  },
  // Nindo
  55916: {
    communication: 'Discord',
    notes: 'Welcome to Tempest, SL Nindo!',
  },
  // Sat Nav
  55817: {
    communication: 'Discord',
    notes: 'Spending some time in quarrantine due to an Ewok Pox outbreak. Best of luck, Sat Nav.',
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
            Tempest Flight 1, temporarily three pilots following an unfortunate
            transfer accident, made a close pass above the Interdictor
            Fairchild. "Power to engines", COL Silwar Naiilo commanded, "on my
            wings as we cut to port across the bridge. Remind them who we are."
            The three TIE Defenders screamed forward, cut power, rolled left,
            then re-engaged engine power as they buzzed past the large
            observational windows of the bridge close enough to shave the hair
            of an unfortunate cadet on window-cleaning duty. The missile boats
            of Tempest's Second and Third flights, themselves equipped with SLAM
            engines, flew between the bulbous domes of the interdictor before
            peeling off and rejoining the rest of the squadron.
          </em>
        </p>

        <p>
          Looks like we're starting to become a fully armed and operational
          battlegroup again - congrats to our COM on finding our Interdictor
          again! Looks like we've got some kind of light cruiser to go with it.
          Lots of news this report, as October closes.
        </p>

        <img
          src="https://tempest-blown-with-the-wind.vercel.app/art/cantina.jpg"
          width="100%"
          alt="The Challenge Chantina drawn by LT Neko"
        />

        <p>
          <em>"Opening Time in the Challenge Cantina", art by LT Neko.</em>
        </p>

        <p>
          First, the disappointing news that someone had mislabelled the
          restroom as "airlock", and GN Dunta Polo stepped out the wrong door.
          A nearby Kappa pilot, flying hom from the Challenge cantina, rescued
          him, and Polo seems have grown rather attached. Good luck in Kappa,
          general.
        </p>

        <p>
          In happier news, the MSE has already been completed, and last month's
          MoCs have gone out. Nearly everyone's getting something, including
          another batch of stars, PCs, and ISMs. 90% of our pilots can also
          expect an MoC, which is fantastic.
        </p>

        <p>
          {'Episode 5 of the '}
          <a href="https://www.youtube.com/watch?v=f6P5XAP24Pw&feature=youtu.be">
            TIE Pilot's Podcast
          </a>
          {' features GA Ronin. Check it out! They are also looking for '}
          volunteers for the next one.
        </p>

        <p>
          HA Dempsey's "Wake Me Up When November Ends"
          competition has started, with a little something for everyone. (I
          think I've figured out why the briefing room sometimes sounds like
          a comedy theatre, as the admiral seems to be a film buff.) The
          <em>challenges </em>
          will rotate weekly. This week, the competitions are:
        </p>

        <ul>
          <li>
            <a href="http://tc.emperorshammer.org/timetest.php?testid=859778">
              Actors of the Silver Screen
            </a>
            : Identify the 10 actors and give their names.
          </li>
          <li>
            Pilot's Arena: get as close to the score- not a high score- as possible.
            <ul>
              <li>
                {'Single player segment: '}
                <a href="https://tc.emperorshammer.org/download.php?id=1442&type=info">TIE free #289</a>
                ; target: 19,125 pts
              </li>
              <li>
                Multi player segment: Star Wars Squadrons: Dogfight mode; target: 1,055 pts
              </li>
            </ul>
          </li>
          <li>
            <a href="http://tc.emperorshammer.org/timetest.php?testid=813863">
              What did you say?
            </a>
            : read the quote, name the movie.
          </li>
          <li>
            Online insanity: Get the top score in
            <a href="https://tetris.com/play-tetris">Tetris</a>
            . No doubt preparing us for packing extra ships into the
            Challenge's hangar.
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
          TCiB assignments are due November 12 - because they started late, we
          have extra time. Expect November's assignments this week as well.
          October's are:
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
          <strong>{' second '}</strong>
          week these orders are active. You will have until November 8 to finish these
          missions for the high score competition.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        <p>
          In closing,
        </p>
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
