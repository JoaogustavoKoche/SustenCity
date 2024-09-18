import React from 'react';
import './Tips.css';
import { Link } from 'react-router-dom';

const Tips = () => {
  return (
    <div className="tips-container">
      <h2 className="tips-title">Dicas de Sustentabilidade</h2>
      
      <div className="tips-list">
        <div className="tip-item">
          <h3>Reduza o Consumo de Plástico</h3>
          <p>Evite o uso de plásticos descartáveis, como canudos e sacolas. Opte por alternativas reutilizáveis, como garrafas e sacolas de pano.</p>
        </div>
        
        <div className="tip-item">
          <h3>Economize Energia</h3>
          <p>Desligue as luzes e eletrodomésticos quando não estiver usando. Pequenas ações podem reduzir significativamente o consumo de energia.</p>
        </div>

        <div className="tip-item">
          <h3>Recicle Sempre que Possível</h3>
          <p>Separe seu lixo corretamente e destine os materiais recicláveis aos pontos de coleta. Contribua para a redução de resíduos.</p>
        </div>

        <div className="tip-item">
          <h3>Compre de Produtores Locais</h3>
          <p>Apoie pequenos produtores e reduza a emissão de carbono comprando alimentos frescos e locais, reduzindo o transporte de longas distâncias.</p>
        </div>

        <div className="tip-item">
          <h3>Use Menos Água</h3>
          <p>Desligue a torneira enquanto escova os dentes e opte por banhos mais curtos. A água é um recurso precioso e deve ser usada com responsabilidade.</p>
        </div>
      </div>

      <div className="comments-button-container">
        <Link to="/comments" className="comments-button">Ver Comentários</Link>
      </div>
    </div>
  );
};

export default Tips;
