import React, { useState, useContext } from 'react';
import { PersonalidadesContext } from '../context/PersonalidadesProvider';
import './styles/FindPersonalidade.css';

const FindPersonalidade = () => {
    const { handleSearch } = useContext(PersonalidadesContext);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchClick = (event) => {
        event.preventDefault();
        handleSearch(searchValue);
        setSearchValue(null);
    };

    return (
        <div className="container-search">
            <h2>Buscar Personalidades pelo Nome</h2>
            <div className="submit-line">
                <br />
                <input
                    type="text"
                    id="nomePersonalidade"
                    placeholder="Digite o nome da personalidade"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="search-button" onClick={handleSearchClick}>Buscar</button>
            </div>
        </div>

    );
};

export default FindPersonalidade;
