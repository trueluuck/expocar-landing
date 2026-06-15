import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const lojistas = [
    'Polli Multimarcas',
    'Galpao do Automovel',
    'Acelera Veiculos',
    'Alfa Multimarcas',
    'TS multimarcas',
    'Bom Jesus Veiculos',
    'Premiver Multimarcas',
    'GP CAR',
    'Campos Veículos',
    'Expressão Veículos'
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            EXPO<span>CAR</span>
          </Link>
          <nav className={styles.navLinks}>
            <a href="#sobre" className={styles.navLink}>Sobre</a>
            <a href="#lojas" className={styles.navLink}>Lojas Parceiras</a>
            <a href="https://www.instagram.com/expocarguarapuava042/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Instagram</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container animate-fade-in">
          <h1 className={styles.title}>
            O Maior Mega Feirão <br/><span className="text-gradient">Automotivo da Região</span>
          </h1>
          <p className={styles.subtitle}>
            A Expocar Guarapuava reúne as melhores lojas da cidade para oferecer as maiores taxas de aprovação, os melhores veículos e condições imbatíveis.
          </p>
          <div className={styles.heroButtons}>
            <a href="#sobre" className={styles.primaryButton}>Conheça a História</a>
            <a href="#galeria" className={styles.secondaryButton}>Ver Fotos do Evento</a>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Edições Realizadas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10</span>
            <span className={styles.statLabel}>Lojas Parceiras</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>Carros Vendidos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Satisfação</span>
          </div>
        </div>
      </section>

      <section id="sobre" className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>A Força da Expocar</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <div className={styles.aboutIcon}>🏆</div>
            <h3>Credibilidade e Tradição</h3>
            <p>
              Com edições que paralisam a cidade, a Expocar já se consolidou como o evento definitivo para quem quer comprar ou trocar de carro com total segurança e garantia de procedência.
            </p>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.aboutIcon}>🤝</div>
            <h3>As Melhores Lojas</h3>
            <p>
              Reunimos as 10 maiores e mais respeitadas lojas de Guarapuava. Quando você compra na Expocar, sabe que está negociando com lojistas rigorosamente selecionados.
            </p>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.aboutIcon}>💰</div>
            <h3>Condições Imbatíveis</h3>
            <p>
              Graças à parceria com os maiores bancos e financeiras do Brasil, conseguimos oferecer taxas exclusivas de feirão, com aprovação na hora e condições que você não encontra nas lojas físicas.
            </p>
          </div>
        </div>
      </section>

      <section id="galeria" className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Momentos da Última Edição</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Confira o que rolou no nosso último Mega Feirão. (Substitua estas imagens com as fotos reais de vendas e clientes)
        </p>
        <div className={styles.galleryGrid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={styles.galleryItem}>
              <div className={styles.galleryPlaceholder}>
                <div className={styles.galleryIcon}>📸</div>
                <span>Adicione Foto {item} aqui</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="lojas" className={`${styles.section} container`} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '24px', padding: '60px', margin: '40px auto' }}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '40px' }}>Nossas Lojas Parceiras</h2>
        <div className={styles.lojasGrid}>
          {lojistas.map((loja, idx) => (
            <div key={idx} className={styles.lojaCard}>
              <div className={styles.lojaLogoPlaceholder}>
                Logo<br/>{loja}
              </div>
              <div className={styles.lojaName}>{loja}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.bottomBanner}>
        <div className="container">
          <p className={styles.bottomBannerText}>
            Não perca a próxima edição da Expocar. Acompanhe nossas redes sociais e fique por dentro!
          </p>
          <a 
            href="https://www.instagram.com/expocarguarapuava042/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.secondaryButton}
            style={{ borderColor: 'white', color: 'white' }}
          >
            Siga nosso Instagram
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerLinks}>
            <a href="https://www.instagram.com/expocarguarapuava042/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
            <Link href="/pesquisa" className={styles.footerLink}>Área do Lojista</Link>
          </div>
          <div style={{ fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} Expocar Guarapuava. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
