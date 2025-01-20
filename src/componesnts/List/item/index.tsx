import React from 'react';
import  Style  from '../list.module.scss';
import { ITarefas } from '../../../types/tarefa';

interface props extends ITarefas {
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa }:
     props) {

    return (
        <li 
            className={ `${Style.item} ${selecionado ? Style.itemSelecionado : ''} ${completado ? Style.itemCompletado: ''}`}
            onClick={() => !completado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={Style.concluido} aria-label='tarefa'></span>}
        </li>
    )
}