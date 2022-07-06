import React, { useEffect } from "react";

const LeftTab = (props, index) => {
  // j'utilise le useEffect pour monter et demonter le composant une fois terminer
  // afin de ne pas garder la valeur en memoire
  useEffect(() => {
    return props.setApi([]);
  }, []);

  return (
    <>
      {/* je map la props api du useState dans App.js 
      afin d'afficher les élements de l'api */}
      {props.api.map((item) => (
        <div>
          <h2 key={index}>{item.quote}</h2>
          <img src={item.image} alt="simpson" />
        </div>
      ))}
    </>
  );
};

export default LeftTab;
