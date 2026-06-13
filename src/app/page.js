import styles from './page.module.css';
import PesquisaForm from './components/PesquisaForm';

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className={`${styles.container} container`}>
          <div className={styles.logo}>
            <span className="text-gradient">EXPOCAR</span> GUARAPUAVA
          </div>
        </div>
      </header>

      <section className="container" style={{ paddingTop: '40px' }}>
        <div className={styles.mainContent}>
          
          <div className={`${styles.infoSection} animate-fade-in delay-100`}>
            <h2>Sobre o Feirão</h2>
            <p>
              A Expocar Guarapuava é o evento definitivo para quem busca trocar de carro ou adquirir seu primeiro veículo.
              Com as melhores lojas da cidade presentes, garantimos qualidade, procedência e as melhores taxas de financiamento.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🚗</div>
                <div>
                  <h4>Variedade de Seminovos</h4>
                  <span style={{color: 'var(--text-muted)', fontSize: '14px'}}>Centenas de veículos revisados e com garantia.</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>💰</div>
                <div>
                  <h4>Aprovação na Hora</h4>
                  <span style={{color: 'var(--text-muted)', fontSize: '14px'}}>Condições especiais de financiamento pelos bancos parceiros.</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🛡️</div>
                <div>
                  <h4>Compra Segura</h4>
                  <span style={{color: 'var(--text-muted)', fontSize: '14px'}}>Todas as lojas participantes são de confiança e tradição.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.formSection} animate-fade-in delay-200 glass-panel`}>
            <PesquisaForm />
          </div>

        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container animate-fade-in">
          <h1 className={styles.title}>
            O Maior Feirão de <br/><span className="text-gradient">Veículos da Região</span>
          </h1>
        </div>
      </section>

      <div className={styles.bottomBanner}>
        <div className="container">
          <p className={styles.bottomBannerText}>
            Venha encontrar o carro dos seus sonhos com condições imperdíveis. As melhores lojas de Guarapuava reunidas em um só lugar!
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <div style={{ marginBottom: '16px' }}>
            <a href="https://www.instagram.com/expocarguarapuava042/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '16px', fontWeight: '500' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Siga no Instagram
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Expocar Guarapuava. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
