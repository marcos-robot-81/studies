import React from "react";
import { Botao } from "../botao";
import './formulario.modulo.scss';
import { ITarefas } from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid';

export class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>

}>{
    state = {
        tarefa: "",
        tempo: "01:00:00"
    }
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);
        this.setState({
            tarefa:"",
            tempo: "00:00"
        })
    
    }
    
    render(){
        return(
            <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}>
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        adcione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value })}
                    placeholder="Q que vice quer estudar"
                    required
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    id="tempo"
                    min="0:00:00"
                    max="01:30:00"
                    required
                    />
                    <Botao texto="Adcionar" type="submit" />
                </div>
            </form>
        )
    }
}
