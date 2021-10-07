import T from 'prop-types';
import Card from './card';
import Link from './link';
import styles from './styles';

export default function Orders({ missions, children }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        News From Around The Galaxy
      </h5>

      {children}

      <div style={{ ...styles.p, marginTop: '1em' }}>
       
        
      </div>
    </Card>
  );
}

Orders.propTypes = {
  missions: T.arrayOf(T.shape({
    name: T.string.isRequired,
    id: T.number.isRequired,
    title: T.string.isRequired,
  })).isRequired,
  children: T.node,
};

Orders.defaultProps = {
  children: null,
};
