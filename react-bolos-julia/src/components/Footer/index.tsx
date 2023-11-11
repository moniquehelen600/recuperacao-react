import "./style.css"


import { Link } from "react-router-dom";

import imgWhats from "../../assets/img/whats 1.png";
import imgFace from "../../assets/img/../img/face 1.png";
import imgInsta from "../../assets/img/instag 1.png";

function Footer() {
    return (
        <footer>
            <div className="container footer_container">
                <p>Todos os direitos reservados ®</p>
                <div>
                    <Link to={"#"}>
                        <img src={imgWhats} alt="imagem whats" />

                    </Link>
                    
                    <Link to={"#"}>
                        <img src={imgFace} alt="imagem face" />
                    </Link>
                    
                    <Link to={"#"}>
                        <img src={imgInsta} alt="imagem insta" />

                    </Link>
                </div>
            </div>
        </footer>
    );

}

export default Footer;