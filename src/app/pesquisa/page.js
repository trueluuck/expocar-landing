import PesquisaForm from '../components/PesquisaForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Registro de Pesquisa - Expocar',
  description: 'Formulário exclusivo para lojistas da Expocar Guarapuava',
};

export default function PesquisaPage() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className={styles.header}>
          <h2>Registro de Atendimento</h2>
          <p>Uso exclusivo para Lojistas Credenciados</p>
        </div>
        <div className={`glass-panel ${styles.formWrapper}`}>
          <PesquisaForm />
        </div>
      </div>
    </div>
  );
}
