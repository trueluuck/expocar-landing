'use client';

import { useState } from 'react';
import styles from './PesquisaForm.module.css';

export default function PesquisaForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  
  const [formData, setFormData] = useState({
    lojista: '',
    origem: [],
    observacoes: ''
  });

  const lojistas = [
    'Polli Multimarcas',
    'Galpao do Automovel',
    'Acelera Veiculos',
    'Alfa Multimarcas',
    'TS multimarcas',
    'Bom Jesus Veiculos',
    'Premiver Multimarcas',
    'GP CAR',
    'CAMPOS VEICULOS'
  ];
  const origens = [
    'Instagram', 
    'Facebook', 
    'Youtube', 
    'Carro de anúncios', 
    'Televisão',
    'Telões',
    'Rádio',
    'Outros'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrigemChange = (origem) => {
    setFormData(prev => {
      const isSelected = prev.origem.includes(origem);
      const newOrigens = isSelected 
        ? prev.origem.filter(o => o !== origem)
        : [...prev.origem, origem];
      return { ...prev, origem: newOrigens };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/salvar-pesquisa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ lojista: '', origem: [], observacoes: '' });
        
        // Hide success message after 3 seconds
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar pesquisa:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Registro de Atendimento</h3>
        <p className={styles.formDescription}>
          Lojista, por favor registre onde o cliente viu nossa propaganda.
        </p>
      </div>

      {status === 'success' && (
        <div className={styles.successMessage}>
          Pesquisa registrada com sucesso!
        </div>
      )}

      {status === 'error' && (
        <div className={styles.errorMessage}>
          Erro ao salvar pesquisa. Tente novamente.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="lojista">Selecione o Lojista</label>
          <div className={styles.selectWrapper}>
            <select 
              id="lojista" 
              name="lojista" 
              className={styles.select}
              value={formData.lojista}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecione...</option>
              {lojistas.map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Onde o cliente viu a propaganda? (Pode selecionar mais de uma)</label>
          <div className={styles.optionsGrid}>
            {origens.map(origem => {
              const isChecked = formData.origem.includes(origem);
              return (
                <label 
                  key={origem} 
                  className={`${styles.radioLabel} ${isChecked ? styles.selected : ''}`}
                >
                  <input 
                    type="checkbox" 
                    name="origem" 
                    value={origem}
                    checked={isChecked}
                    onChange={() => handleOrigemChange(origem)}
                    className={styles.radioInput}
                  />
                  {origem}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="observacoes">Observações (Opcional)</label>
          <input 
            type="text" 
            id="observacoes"
            name="observacoes" 
            className={styles.input}
            value={formData.observacoes}
            onChange={handleChange}
            placeholder="Nome do cliente ou detalhe do veículo..."
          />
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={loading}
        >
          {loading ? 'Salvando...' : 'Salvar Registro'}
        </button>
      </form>
    </div>
  );
}
