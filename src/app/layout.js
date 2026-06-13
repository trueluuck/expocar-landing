import './globals.css';

export const metadata = {
  title: 'Expocar Guarapuava | O Maior Feirão de Veículos',
  description: 'Encontre as melhores ofertas e condições no feirão de veículos Expocar Guarapuava. Preencha nossa pesquisa durante o atendimento!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
