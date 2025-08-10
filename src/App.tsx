import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componetes/Home";
import Login from "./componetes/Login";
import DetalhesPrato from "./componetes/DetalhesPrato";
import FormularioPrato from "./componetes/FormularioPrato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route
          path="/cadastro-prato"
          element={<FormularioPrato isEditing={false} />}
        />
        <Route
          path="/atualizar-prato/:id"
          element={<FormularioPrato isEditing={true} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
