import styles from './styles.module.css';
import recordMD from '../Record/record.md';

const RecordInfo = recordMD;

export default function Record() {
  return (
    <div className='recordContainer'>
      <p>{RecordInfo}</p>
    </div>
  )
}

/*construire un vrai composant avec timeline serait sans doute plus intéressant qu'un affichage basique de haut en bas comme je le prévoyais jusque là... Il va falloir faire quelques recherches pour trouver comment le construire. */