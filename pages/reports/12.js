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

const reportNumber = 12;
const startDate = '2021-09-13';
const endDate = '2021-09-19';
const submissionDate = '2021-09-19';

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
  id: '3321',
  name: 'Sinfantry Training',
  ends: '2022-02-05',
  units: 'Sin Squadron',
  notes: 'Every first Saturday of the month, Sin Squadron will assemble for PvP matches in Star Wars Squadrons, Battlefront, and Star Conflict.',
  highlight: true,
}, {
  id: '3323',
  name: 'SINGO!',
  ends: '2021-11-01',
  units: 'Sin Squadron',
  notes: 'Pilots will all receive a card similar to BINGO aka SINGO. Each square will consist of tasks from updating their Wiki page and INPR to earning an LoC with a fellow TC pilot or getting 10 kills in a match. ',
  highlight: true,
}, {
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
    flightActivity: 'Star Conflict PvP',
    otherActivity: '',
    notes: 'Created two new comps.',
  },
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  // Commander Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'PvE flying',
    otherActivity: 'Find The Difference, Trivia Grand Tour',
    notes: '',
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
    otherActivity: '',
    notes: 'Sad to see ya go. ',
  },



  // SkyShadow
  6958: {
    communication: 'Email, Discord',
    flightActivity: 'Star Conflict PvP and PvE, Star Wars Squadrons',
    otherActivity: 'IOA Duties, Find The Difference, Trivia Grand Tour',
    notes: '',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Congrats on the promotion',
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
    flightActivity: '',
    otherActivity: 'Squadron Sinterview',
    notes: 'Thanks for the interview',
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
        How is it going Sinners, I hope you all are doing well. Another relaxing week in the books. We did have AlexanderK9 get promoted to Lieutenant Commander, so make sure to buy him a drink the next time you run into him. 
        This was only the beginning of promotions this month. Be on the lookout for some other promotions coming later this week. Sadly I have to report that after having a conversation with Zekk, he has decided to go to the reserves. 
        I know he could use a break so hopefully, this is only temporary. There will always be a spot open in Sin for him if he decides to come back. 
        </p>
        <p>I have two new compilations starting very soon. SINGO! starts tomorrow and is a comp where pilots will all receive a card similar to BINGO. Each square will consist of tasks from updating their Wiki page and INPR to earning an LoC with 
          a fellow TC pilot or getting 10 kills in a match. Please post in discord or email a screenshot anytime you complete a task. <br></br>
          The other comp evolved from our Booze and Battlefront event. The name has been changed to Sinfantry Training. Every first Saturday of the month, Sin Squadron will assemble for PvP matches in Star Wars Squadrons, Battlefront, and Star Conflict. Remember this is more about flying with your squadmates and less about winning matches.    </p>


        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Sinterview</span></h4></center>

        <p>Welcome to the tenth installment of Squadron Sinterview. Every week I will try to interview one of your fellow squad members and feature it in the Weekly 
          Squadron Report. I will be awarding an IAR to those that participate, so keep an eye out, you could be next. This weeks Sinterview is with General Exar Kit. </p>
        <b>Name: Exar Kit</b><br></br>
        <b>Join Date: 09/10/2000 </b><br></br>
        <b>Rank: General</b><br></br>
        <b>Position: Flight Member</b><br></br>
        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Where are you from? </p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> Sothern England.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> How did you find the TIE Corps?</p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> Back in the day when BT’s Wireplay was still around I join an imperial squadron I think it was thistle squadron, one of their pilots told me about the TC.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What do you like to do when you are not killing Rebel Scum?</p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> Apart from the restoring Mounatin bikes, and fixing cars with my father, its an case of MMORGP games like WOW and FFXIV(mostly)  but I do want to get back in to 3D work and apps.
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars moment? </p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> When Luke Skywalker fights Kylo Ren  while not on the same planet as Kylo. 
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What planet in the Star Wars universe would you want to live on?</p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span>  Yavin or Dathomir.  
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> In your opinion what is the best viewing order of all 3 trilogies, Rogue one, and Solo?</p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> PM – AotC – RotS – RO – Solo – ANH – ESB – ROTJ – TFA – TLJ – TRS  
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Of all those movies, which one was is the best?</p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> Star Wars II Attack of the Clones.     
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> What is your favorite Star Wars quote? </p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> “Your good Coran but you’re no Luke Skywalker” from the X-wing Rouge squadron book. 
        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span>  Which Star War Character, Canon or not, would you love to get their own movie/show? </p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> Coran Horn.

        </i>

        <p><span style={{ color: "#Cf0a2c" }}>Wreckage:</span> Finally, if you could change 1 thing in any of the movies what would it be? </p>

        <i><span style={{ color: "#fec701" }}>Exar Kit:</span> Change the actor for Anikin Skywalker in 2 and 3.<br></br><br></br>
        </i>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
                <li>Congrats to AlexanderK9 on the promotion.</li><br></br>
                <li>Zekk going to reserves.</li><br></br>
                <li>New competitions starting soon. SINGO! and Sinfantry Training. </li><br></br>
                <li>Go fly Robert Hogans TIE-Free mission. <a href="https://tc.emperorshammer.org/download.php?id=1466&type=info"><strong>TIE-Free 299:A Christmas Present for the Infiltrators</strong></a></li><br></br>
                <li>Project SOVEREIGN activity turned in, expect more credits added to your balance soon.</li><br></br>
                <li>Flight nicknames and mottos have been updated check them out on the <a href="https://tc.emperorshammer.org/roster.php?type=sqn&id=64"><strong>Sin Squadron page</strong></a>.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
            	<li>RTF starting in less then 2 weeks.</li><br></br>
              <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.  </li><br></br>
              <li>Congrats to the winners of Find The Difference: Week 7. Kazraran earned an IS-SR and SkyShadow earned an IS-BR.  </li><br></br>
         	  	<li>Find The Difference: Week 8 is live. Follow the link to <a href="https://tc.emperorshammer.org/timetest.php?testid=644815"><strong>Find The Difference: Week 8</strong></a> and find the 5 differences.
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
      We are already getting close to the end of the month. That means another set of MSE medals to be awarded. Many of you have earned enough MSE points to get a merit award and others are very close. I plan on going through them later this week. 
      I like to check them a week before the month ends so I can let those of you know if you are close to the next level medal.
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
