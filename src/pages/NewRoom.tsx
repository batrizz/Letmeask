import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { firebase, auth, database  } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import Button from '../components/Button';

import '../styles/auth.scss';

export function NewRoom (){

  const [ newRoom, setNewRoom ] = useState('');
  const { user } = useAuth();
  const history = useHistory();

  // Criar sala e adicionar informações no banco
  async function handleCreateRoom(event: FormEvent){
    event.preventDefault()

    if (newRoom.trim() == ''){
      return;
    }
    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })
    
    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
        <strong> Crie salas de Q&amp;A ao-vivo </strong>
        <p> Tire as dúvidas da sua audiência em tempo-real </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit"> 
              Criar sala
            </Button>
          </form>
          <p> 
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}