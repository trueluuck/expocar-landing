import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { lojista, origem, observacoes } = body;

    if (!lojista || !origem) {
      return NextResponse.json({ error: 'Lojista e origem são obrigatórios' }, { status: 400 });
    }

    const registro = {
      id: crypto.randomUUID(),
      dataHora: new Date().toISOString(),
      lojista,
      origem: Array.isArray(origem) ? origem.join(', ') : origem,
      observacoes: observacoes || '',
    };

    const googleSheetsUrl = process.env.GOOGLE_SHEETS_URL;

    if (googleSheetsUrl) {
      // Envia os dados para o Google Apps Script
      const sheetResponse = await fetch(googleSheetsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registro),
      });

      if (!sheetResponse.ok) {
        console.error('Erro ao salvar no Google Sheets:', await sheetResponse.text());
        return NextResponse.json({ error: 'Erro ao salvar no banco de dados' }, { status: 500 });
      }
      console.log('Registro salvo no Google Sheets com sucesso!');
    } else {
      console.log('--- NOVO REGISTRO (Log Local) ---');
      console.log(JSON.stringify(registro, null, 2));
      console.log('---------------------------------');
      console.log('Aviso: GOOGLE_SHEETS_URL não está configurada no ambiente.');
    }

    return NextResponse.json({ success: true, registro }, { status: 201 });
  } catch (error) {
    console.error('Erro ao processar pesquisa:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
