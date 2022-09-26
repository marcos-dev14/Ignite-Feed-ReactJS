import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/marcos-dev14.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Paulo</strong>
              <time title="11 de Maio ás 08:13h" dataTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Marcos, parabéns!!</p>
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