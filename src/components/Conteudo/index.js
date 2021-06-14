import React from 'react';
import inicialImg from '../../assets/img/pgInicial.png'
import julius from '../../assets/img/juliusEllipse.png'
import maleta from '../../assets/img/Group.png'
import ellipsis from '../../assets/img/Ellipsis.png'
import gandalf from '../../assets/img/gandalf.png'
import './style.css';

function Conteudo() {
  return (
    <div className="conteudoPage">
      <h2>O QUE É O FREELA?</h2>

      <div className="q1-freela">
        <img alt="landingImage" src={inicialImg} />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
                   electronic typesetting, remaining essentially unchanged. </p>
      </div>

      <div className="q2-freela">
        <p><b>Gandalf</b> está precisando de seus serviços!</p>
      </div>

      <div className="q3-freela">
        <img alt="julius" src={julius}></img>
        <div className="q3-freela2">
          <img alt="maletya" src={maleta}></img>
          <img alt="ellipsis" src={ellipsis}></img>
        </div>
        <img alt="gandalf" src={gandalf}></img>
      </div>

      <div className="q4-freela">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>

    </div>

  )
}
export default Conteudo;