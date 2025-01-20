import React, {useState} from 'react';
import { Formulario } from '../componesnts/formulario';
import  List  from "../componesnts/List";
import Style from './App.module.scss';
import Cronometro from '../componesnts/cronometro';
import { ITarefas } from '../types/tarefa';



function App() {
  let [tarefas,setTarefas] = useState<ITarefas[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizaTarefa(){
    
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>{
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={Style.AppStyle}>
     <Formulario setTarefas={setTarefas} />
     <List 
     tarefas={tarefas} 
     selecionaTarefa={selecionaTarefa}
     />
     <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa}/>
    </div>
  );
}

export default App;
