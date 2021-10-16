import T from 'prop-types';
import Card from './card';
import Link from './link';
import styles from './styles';
import config from '../config';

export default function Intro({ children, showUniform = true }) {
  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        {config.cmdr.intro}
      </h5>

      { showUniform && (
        <Link
          href={`https://tc.emperorshammer.org/record.php?pin=6958&type=profile`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: '100%', maxWidth: '190px', float: 'right' }}
            src="https://tc.emperorshammer.org/images/uniforms/27464SkyShadow_Dress_Final.png"
            alt={`The uniform of ${config.cmdr.name}, #${config.cmdr.pin}`}
          />
        </Link>
      )}

      {children}
    </Card>
  );
}

Intro.propTypes = {
  children: T.node.isRequired,
};
