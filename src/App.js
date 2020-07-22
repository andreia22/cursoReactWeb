import React, {useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);
    useEffect(() => {
    async function loaldDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
  
    loaldDevs();

  }, []);

  async function handleAddDev(data) {
    const response  = await api.post('/devs', data) 
      setDevs([...devs, response.data]);   
  }
    return (
   <div id="app">
     <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubimit={handleAddDev} />
     </aside>
     <main>
       <ul>
         {devs.map(dev => (
          <DevItem key={dev._id} dev={dev} />
         ))}
         </ul>
   </main>  
   </div>
  );
}

export default App;






// Componente: Boloco isolado de HTML, CSS, e JS, o qual no interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa par um componente FILHO
// Estado: Informações mantidas pelo componete (Lembrar: imutabilidade)
