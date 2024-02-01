import React from "react";
import Americanas from "../assets/Americanas.png";
import Submarino from "../assets/submarino.png";
import Autografia from "../assets/ag.png";
import Amazon from "../assets/Amazon.png";

const Links = () => {
    return(
        <div className="links">
            <h3><i>Garanta Já o Seu:</i></h3><br />
            <a href="https://www.autografia.com.br/produto/eu-sou-deus/"
            title="Compre através da Autografia!"
            target="blank_"
            >
                <img id="icon" alt="Autografia" src={Autografia}/>
            </a>
            <a href="https://www.submarino.com.br/produto/7483110840/eu-sou-deus?pfm_carac=9788551860212&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=65b03e65cc55309385f4b591"
            title="Compre através da Submarino!"
            target="blank_"
            >
                <img id="icon" alt="Submarino" src={Submarino}/>
            </a>
            <a href="https://www.americanas.com.br/produto/7483110840/eu-sou-deus?pfm_carac=9788551860212&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=65b03e65cc55309385f4b591"
            title="Compre através das Americanas!"
            target="blank_"
            >
                <img id="icon" alt="americanas" src={Americanas}/>
            </a>
            <a href="https://www.amazon.com.br/Eu-sou-Deus-Sammaria-Bahia/dp/8551860216/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&keywords=9788551860212&qid=1706541471&sr=8-1"
            title="Compre através da Amazon!"
            target="blank_"
            >
                <img id="icon" alt="Amazon" src={Amazon}/>
            </a>
        </div>
    )
}

export default Links;