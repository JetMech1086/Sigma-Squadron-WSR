import T from 'prop-types';
import Card from './card';
import styles from './styles';
import config from '../config';

export default function Intro({ children }) {
  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        {config.cmdr.intro}
      </h5>

      <a
        href={`https://tc.emperorshammer.org/record.php?pin=${config.cmdr.pin}&type=profile`}
        target="_blank"
        rel="noreferrer"
        style={styles.a}
      >
        <img
          style={{ width: '100%', maxWidth: '190px', float: 'right' }}
          src="https://tempest-blown-with-the-wind.vercel.app/uniform.jpg"
          alt={`The uniform of ${config.cmdr.name}, #${config.cmdr.pin}`}
        />
      </a>

      {children}
    </Card>
  );
}

Intro.propTypes = {
  children: T.node.isRequired,
};
