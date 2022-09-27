import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './comment.module.css';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/marcos-dev14.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Paulo</strong>
              <time title="11 de Maio ás 08:13h">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}