import React from "react";
import { useLocation } from "react-router-dom";

import products from '../../data/products';

import '../../styles/searchResults.css';

export default function SearchResults(){
    
    const location = useLocation();

    // Pegando parametros da URL
    const params = new URLSearchParams(location.search);
    const query = params.get("q")?.toLowerCase() || "";

    // Filtrando produtos com base na pesquisa
    const results = products.filter(product => product.name.toLowerCase().includes(query)
    );

    return (
        <div className="search-results-container">
            <h2>Resultado da busca:</h2>

            {query === "" ? (
                <p>Digite algo para buscar.</p>

            ) : results.length === 0 ? (
                <p>Nenhum produto encontrado para "{query}".</p>

            ): (
                <ul>
                    <p>Voce procurou por: {query}</p>
                    {results.map(product => (
                        <li key={product.id}>
                            <p>{product.name} - {product.category}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}