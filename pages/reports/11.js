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

const reportNumber = 11;
const startDate = '2021-09-06';
const endDate = '2021-09-12';
const submissionDate = '2021-09-12';

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
    flightActivity: 'Star Conflict PvP, Battlefront 2 PvP, Star Wars Squadrons',
    otherActivity: 'Trivia Grand Tour',
    notes: '',
  },
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Congrats on the promotion to Full Lieutenant. ',
  },
  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'XvT',
    otherActivity: 'Find The Difference, Trivia Grand Tour, Squadron Sinterview ',
    notes: 'Thanks for the great interview.',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: '',
    notes: '',
  },

  // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Find The Difference',
    notes: 'New flight nickname and motto looks good.',
  },


  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Hope all is well.',
  },

  // Zekk
  5118: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Trivia Grand Tour',
    notes: '',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvP and PvE, Star Wars Squadrons',
    otherActivity: 'IOA Duties, Find The Difference, Trivia Grand Tour, Challenge with Words, Crossword Challenge, Booze and Battlefront ',
    notes: 'Thanks for showing up to Booze and Battlefront, I look forward to this being a monthly thing.',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and pvP',
    otherActivity: '',
    notes: '',
  },

  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP',
    otherActivity: '',
    notes: '',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Wars Squadrons',
    otherActivity: 'Booze and Battlefront',
    notes: 'Thanks for showing up to Booze and Battlefront.',
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
        A couple of big things happened this week. First, all August MSE medals have now been awarded. Great work too all of you that earned one. It's already been a pretty good start this month, as many of you have already qualified 
        for merit awards for September. The other big thing to happen this week is one of Sin's own COL Mordechi Wolfe is now HA Mordechi Wolfe and has become the new WarCOM. We all wish him luck in his new assignment. With his increased 
        pay in salary, I also think he should buy us all a round of the Top Shelf stuff to celebrate. 
        </p>
        <p>Booze and Battlefront was a lot of fun yesterday. Thanks to the Sinners that showed up last night to play. We didn't rack up the legions like we thought we would, but it was still great playing as a squad, which was the main point behind the event.  
          After discussing with those that showed up, we decided that this would be good to do once a month. So I rebranded the event as Sinfantry Training, and we will meet on the first Saturday of every month at 4 PM EST. These events will be more about hanging 
          out with your squadmates, having a good time, and maybe getting a legion or two along the way. I will submit a competition so that all those that participate can earn some medals along the way as well.   </p>


        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the ninth installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with Lieutenant Commander Kazraran. </p>
        <b>Name: Kazraran</b><br></br>
        <b>Join Date: 03/08/2021 </b><br></br>
        <b>Rank: Lieutenant Commander</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> The great white north of Canada, Eastern Time Zone.  Find me online if you want more details. 
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> I was a member back in the before times, mostly in the EH subgroups.  I started in the EH Strategists, attempting to create a CCG based on the EH.  As SGCOMM, I helped create a bunch of custom personnel cards, but never got enough of the peripheral cards to create a solid game.  Around that time I also joined the Corporate Division.  This was before Tempest created his uniform tool.  So I joined, then ran, a corporation that created uniforms.  
        We accepted orders from all members of the fleet, and our small group would put together the uniforms.  I spent a lot of time in the CD, ultimately as PREX overseeing the stock market, store, radio station and other corporations.<br></br><br></br>
        I joined the actual TC at some point back then as well.   I remember being a member of Daleth Squadron in Wing III, flying XWA and TIE.  I can't remember who it was, but I remember it was a great CMDR at the time.  Fully engaged in the day 
        to day of the unit.   At some point I also ran the website for the Intel Division.  I don't have access to any of the email accounts from back then so I can't be sure of dates, etc.  I have found some random files from the Corporate Division 
        website if anyone is interested. Then in 2021 I joined the TC again and placed in SIN.  Mostly to access all of the TIE/XWA missions.  Then I found Star Conflict and it takes most of my available gaming time.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> Within the universe, likely most of the time at the bar.  IRL, Family time comes first, work comes second.  If you mean free time, when I can I try to get out geocaching with my family.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Which Star War Character, Canon or not, would you love to get their own movie/show? </p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> Asoka Tano.  Hands Down. Her life after leaving the Jedi and exploring her relationship with the force on her own will be fascinating.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Who do you think was the most powerful Force user?</p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span>  Based on the movies I've seen, I don't think there can be any answer other than Palpatine.  
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Who is your favorite Star Wars Character and why?</p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> Has to be Asoka Tano.   Within the Clone Wars series we see the range of her character.  From student learning lessons from the masters; to teacher of younglings. I can't think of any other character that we've 
        seen have as much growth and nuance.  
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What planet in the Star Wars universe would you love to live on?</p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> On the shoreline of Kashyyyk.  Wookies want to be in the trees.  I can be alone down on the shore, going up to civilization when necessary.     
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What's your opinion on Jar Jar Binks? </p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> I don't have the hate that a lot have for Jar Jar.  From a plot point of view, the character was needed.  But the execution could have been much better. 
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span>  Who is the most underrated Star Wars Character? </p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> I've given this some thought and can't really come up with an underrated character that I think is worth mentioning.  Overrated characters on the other hand....

        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, rank the Star Wars movies, including Rogue One and Solo from your absolute favorite to your least favorite. </p>

        <i><span style={{ color: "#fec701" }}>Kazraran:</span> Before I answer, I will caveat that I haven't watched all of the movies/tv shows.  After I started showing the movies to my girls, I decided to wait to see the new ones for the first time with them.  
        Turns out Mustafar is scary.  So we're waiting until they're a bit older to show the others so we'll all enjoy them.  To get back to your question...<br></br><br></br>

1. Empire<br></br>
2. Jedi<br></br>
3. Clone Wars Series<br></br>
4. New Hope<br></br>
5. Force Awakens<br></br>
6. Revenge of Sith<br></br>
7. Attack of the Clones<br></br>
8. Phantom Menace <br></br>
        </i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>MSE medals awarded.</li><br></br>
                <li>Leone123 promoted to LT</li><br></br>
                <li>Booze and Battlefront rebranded as Sinfantry Training and will occur first Saturday of the month.</li><br></br>
                <li>Go fly Robert Hogans TIE-Free mission. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
                <li>Project SOVEREIGN activity turned in, expect more credits added to your balance soon.</li><br></br>
                <li>Flight nicknames and mottos have been updated check them out on the <a href="https://tc.emperorshammer.org/roster.php?type=sqn&id=64"><strong>Sin Squadron page</strong></a>.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>High Admiral Mordechi Wolfe is the new WarCOM </li><br></br>
              <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
              <li>Congrats to the winners of Find The Difference: Week 6. Kalve Ryder earned an IS-SR and Kazraran earned an IS-BR.  </li><br></br>
         	  	<li>Find The Difference: Week 7 is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=441505"><strong>Find The Difference: Week 7</strong></a> and find the 5 differences.
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
      Once again, congrats to those that earned MSE medals. Very well deserved. For those pilots that are new, or didn't earn one last month, there is plenty of time to qualify for one this month.  I am also looking forward 
      to our monthly Sinfantry Training. Anytime I can fly with other sinners, I'm game.  
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
