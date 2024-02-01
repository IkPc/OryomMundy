import React, { useState } from "react";
import image from "../assets/img2.jpg";

const Books = () => {
  const [isActive, setIsActive] = useState(false);

  const handleImgClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`booksContainer ${isActive ? "active" : ""}`}>
      <div className="books">
        <hr />
        <h3>
          <i>Livros:</i>
        </h3>
        <br />
        <div id="imgtextwrapper">
          <a tabIndex="2" className={isActive ? "active" : ""}>
            <img
              id="img2"
              src={image}
              alt="Livro 'EU SOU DEUS'."
              onClick={handleImgClick}
            /><div id="descWrapper">
            <span id="descLivro"><p>Estudo profundo que revela os<br />segredos do Cristianismo e<br />desmistifica o Judaísmo.</p></span>
            </div>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Books;
