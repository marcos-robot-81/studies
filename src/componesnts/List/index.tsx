import React from 'react';
import Style from './list.module.scss'; // Certifique-se de que o caminho está correto
import Item from './item';
import { ITarefas } from '../../types/tarefa';

interface Props {
  tarefas: ITarefas[];
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void;
}

export default function List({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={Style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            key={item.id} // "key" único para cada item
            {...item}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
}
