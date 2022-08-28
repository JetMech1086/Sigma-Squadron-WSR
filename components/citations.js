import T from 'prop-types';
import Card from './card';
import Link from './link';
import styles from './styles';
import config from '../config';

export default function Citations({ citations, citationsChange, children }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        {`Squadron Citations: ${citations.length} (${citationsChange})`}
      </h5>
      <p>No current Sigma Squadron citations </p>
      <ul>
        {citations.map((c) => <li key={c}>{c}</li>) }
      </ul>
      <center><h4><span style={{ color: "#401562" }}>Squadron Orders</span></h4></center>
      <p>The following battles are citations that we are very close to obtaining. Please make these your priority when completing single player battles.</p>
      <ul>
        <li>TIE-TC 12</li>
        <li>TIE-TC 24</li>
        <li>TIE-TC 25</li>
        <li>TIE-TC 142</li>

      </ul>
      { children }

      <p style={styles.p}>
        <Link
          href={`https://tc.emperorshammer.org/battleboard.php?sqn=${config.squadronId}`}
          target="_blank"
          rel="noreferrer"
        >
          View Squadron Battleboard
        </Link>
      </p>
    </Card>
  );
}

Citations.propTypes = {
  citations: T.arrayOf(T.string).isRequired,
  citationsChange: T.string,
  children: T.node,
};

Citations.defaultProps = {
  citationsChange: '+0',
  children: null,
};
