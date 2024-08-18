import { ReactComponent as NotFoundImage} from 'assets/not_found.svg';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound () {
  const navigage = useNavigate();
  return (
    <div className={classNames({
      [stylesTema.container]: true,
      [styles.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigage(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
 
  );
}