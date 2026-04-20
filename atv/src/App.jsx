import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import api from "./services/api";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pesquisa, setPesquisa] = useState("");

  async function buscarUsuarios() {
    setLoading(true);

    try {
      const response = await axios.get(api.defaults.baseURL);
      setUsuarios(response.data);
    } catch (error) {
      console.error("Erro!", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (pesquisa.length > 2) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users?name_like=${pesquisa}`
        )
        .then((res) => setUsuarios(res.data))
        .catch((err) => console.error(err));
    }
  }, [pesquisa]);

  return (
    <div className="container">
      <div className="card">
        <h1>👥 Usuários API</h1>

        <div className="actions">
          <button onClick={buscarUsuarios}>Buscar todos os usuários</button>

          <input
            type="text"
            placeholder="Pesquisar por nome..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
        </div>

        {loading ? (
          <p className="loading">Carregando dados...</p>
        ) : (
          <div className="list">
            {usuarios.map((u) => (
              <div key={u.id} className="user-card">
                <h3>{u.name}</h3>
                <p>📍 {u.address?.city}</p>
                <span>✉️ {u.email}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;