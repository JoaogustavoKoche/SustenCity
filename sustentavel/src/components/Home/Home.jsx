import React from 'react';
import sustenLogo from '../../imgs/sustenlogo.jpg';
import fruit from '../../imgs/fruit.jpg';
import './Home.css';

export const Home = () => {
  return (
    <div className="containerTips">
      {/* Header com logo */}
      <header className="tipsheader">
        <img src={sustenLogo} alt="Logo Sustentabilidade" className="logo" />
      </header>

      {/* Conteúdo principal */}
      <main>
        <section className="background-section">
          <h3>Práticas Sustentáveis</h3>
          <p>
            Certas práticas em nosso dia a dia podem contribuir com o meio ambiente e fortalecer a sustentabilidade. Uma alternativa é adotar uma postura que ajude, por exemplo, na economia e preservação de recursos naturais.
          </p>
          <p>Confira nessa publicação aplicativos voltados para a sustentabilidade.</p>
        </section>

        <section className="background-section">
          <h3>Manual de Etiqueta Verde</h3>
          <p>
            O Planeta Sustentável criou uma versão mobile de seu manual, disponível para iOS, com dicas de um consumo mais consciente em relação à economia de água, redução de impactos ambientais e energia.
          </p>
          <p>Criado pela Editora Abril, o objetivo desse aplicativo é melhorar os hábitos do cotidiano.</p>
        </section>

        <section className="background-section">
          <h3>Rota da Reciclagem</h3>
          <p>
            Um dos aspectos mais importantes quando falamos de sustentabilidade é a reciclagem, pois trata-se de uma ação que favorece diretamente a natureza. A Rota da Reciclagem é um aplicativo que foi desenvolvido em parceria com a Tetra Pak e localiza pontos de coleta de reciclagem mais próximos.
          </p>
          <p>Disponível para iOS e Android.</p>
        </section>

        <section className="background-section">
          <h3>Nossa Energia</h3>
          <p>
            Com versão gratuita para Android, esse aplicativo é voltado para o consumo mais econômico de energia. Simples e didático, uma das vantagens é que você pode calcular o gasto diário dos seus aparelhos elétricos e poupar dinheiro, além de adotar uma rotina mais sustentável.
          </p>
          <p>
            Você também consegue compartilhar dicas de sustentabilidade do aplicativo nas redes sociais, mantendo seus amigos informados e estimulando um consumo mais consciente.
          </p>
        </section>

        <section className="background-section">
          <h3>Sai Desse Banho</h3>
          <p>
            Se você não percebe o tempo que fica no banho, esse aplicativo é uma ótima recomendação. Ele funciona como uma espécie de despertador, informando o horário adequado para finalizarmos o banho.
          </p>
          <p>
            É possível escolher entre 4, 8 ou 12 minutos, e no final do tempo selecionado o app toca uma música alta. Desta forma, reduzimos o tempo debaixo do chuveiro e economizamos água.
          </p>
        </section>

        <section className="background-section with-image">
          <img src={fruit} alt="Feira Orgânica" className="image-section" />
          <div className="text-content">
            <h3>Mapa de Feiras Orgânicas</h3>
            <p>
              Em parceria com o IDEC, esse aplicativo foi apresentado pelo Ministério do Desenvolvimento Social e está disponível gratuitamente para iOS e Android. Ele indica o local das feiras orgânicas em diversas cidades do Brasil, e também informa os dias de funcionamento.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
