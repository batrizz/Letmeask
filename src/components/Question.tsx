import cx from 'classnames';
import { ReactNode } from 'react';
import '../styles/question.scss';

type QuestionProps = {
  content: string;
  author:{
    name:string;
    avatar:string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}
// Criando e mostrando em tela todas as perguntas realizadas
export function Question ({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps){
  console.log(isHighlighted)
  return(
    <div className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered }
    )}>
      <p>
        {content}
      </p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span> {author.name} </span>
          </div>
          <div>
            {children}
          </div>
      </footer>
    </div>
  );
}