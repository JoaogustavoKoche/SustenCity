import React from 'react'
import "./About.css";



const About = () => {
  return (
      <div className="about-container">
        
        <header className="about-header">
          <h1>Sobre Nós</h1>
          <p>Nossa missão é promover a sustentabilidade e o consumo consciente através de soluções inovadoras.</p>
        </header>
        
        <section className="about-content">
          <h2>Nossa História</h2>
          <p>
            Fundada em 2021, nossa empresa nasceu com o objetivo de facilitar o acesso a práticas sustentáveis para pessoas em todo o mundo.
            Ao longo dos anos, temos nos dedicado a desenvolver soluções tecnológicas que impactem positivamente o meio ambiente e ajudem na preservação de recursos naturais.
          </p>
          
          <h2>Nossos Valores</h2>
          <ul>
            <li><strong>Sustentabilidade:</strong> Tudo o que fazemos é voltado para reduzir o impacto ambiental e promover um futuro mais verde.</li>
            <li><strong>Inovação:</strong> Estamos sempre em busca de novas maneiras de melhorar a vida das pessoas através de tecnologia e práticas inovadoras.</li>
            <li><strong>Comunidade:</strong> Acreditamos no poder da colaboração e trabalhamos juntos com nossos parceiros e clientes para criar soluções sustentáveis.</li>
          </ul>
  
          <h2>O Que Fazemos</h2>
          <p>
            Desenvolvemos aplicativos que ajudam os consumidores a adotar um estilo de vida mais sustentável. Com nossos produtos, você pode encontrar pontos de reciclagem,
            monitorar seu consumo de energia e muito mais. Nosso compromisso é tornar a sustentabilidade acessível para todos.
          </p>
        </section>
  
        <section className="about-team">
          <h2>Nosso Time</h2>
          <p>
            Somos uma equipe dedicada de desenvolvedores, designers e profissionais do meio ambiente, apaixonados por criar soluções tecnológicas que promovem mudanças reais.
          </p>
        </section>

        <footer className="about-footer">
          <p>Entre em contato conosco para saber mais: <a href="mailto:contato@sustentabilidade.com">contato@sustentabilidade.com</a></p>
        </footer>
      </div>
  )
}

export default About;