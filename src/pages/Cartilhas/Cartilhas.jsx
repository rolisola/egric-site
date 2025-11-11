import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Cartilhas.css';

// Configurar o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Cartilhas = () => {
  const [selectedCartilha, setSelectedCartilha] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const cartilhas = [
    {
      id: 'oqcaverna',
      titulo: 'O que é caverna?',
      descricao: 'Descubra como cavernas se formam, respiram e abrigam ecossistemas inteiros; esta cartilha apresenta histórias reais das cavernas do Brasil e mostra por que cada passo precisa ser feito com respeito e encantamento.',
      pdf: '/public/cartilhas/Cartilha1_O_que_e_caverna.pdf',
      disponivel: true
    },
    {
      id: 'oqespeleologia',
      titulo: 'O que é espeleologia?',
      descricao: 'Conheça a ciência que transforma curiosidade em expedições seguras: da preparação das equipes às técnicas de mapeamento, esta leitura revela como a espeleologia une aventura, pesquisa e proteção ambiental.',
      pdf: '/public/cartilhas/Cartilha2_O_que_e_espeleologia.pdf',
      disponivel: true
    },
    {
      id: 'oqespeleogenese',
      titulo: 'O que é espeleogênese?',
      descricao: 'Entenda, passo a passo, como água, rocha e tempo esculpem salões gigantescos; você vai visualizar cada fase da espeleogênese e aprender a reconhecer as pistas de uma caverna ainda em formação.',
      pdf: '/public/cartilhas/Cartilha3_O_que_e_espelogenese.pdf',
      disponivel: true
    }
  ];

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const closeViewer = () => {
    setSelectedCartilha(null);
    setNumPages(null);
    setPageNumber(1);
    setScale(1.0);
  };

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.6));
  };

  return (
    <section id="cartilhas" className="cartilhas-section">
      <div className="container">
        <div className="cartilhas-header">
          <h2>Cartilhas Educativas</h2>
          <p className="subtitle">
            Materiais produzidos pela <a href="#comissao-educacao" className="link-educacao">Comissão de Educação</a> do EGRIC,
            com foco em segurança, equipamentos, conservação e orientação a iniciantes.
          </p>
        </div>

        <div className="cartilhas-list">
          {cartilhas.map((cartilha) => (
            <article 
              key={cartilha.id} 
              id={`cartilha-${cartilha.id}`} 
              className="cartilha-card"
            >
              <div className="card-preview">
                {cartilha.disponivel ? (
                  <Document
                    file={cartilha.pdf}
                    loading={
                      <div className="preview-loading">
                        <div className="spinner-small"></div>
                      </div>
                    }
                    error={
                      <div className="preview-placeholder">
                        <span className="icon-large">📄</span>
                      </div>
                    }
                  >
                    <Page 
                      pageNumber={1} 
                      width={undefined}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>
                ) : (
                  <div className="preview-placeholder">
                    <span className="icon-large">📄</span>
                    <span className="soon-text">Em breve</span>
                  </div>
                )}
              </div>

              <div className="card-content">
                <h3>{cartilha.titulo}</h3>
                <p>{cartilha.descricao}</p>
                
                <div className="card-actions">
                  {cartilha.disponivel ? (
                    <>
                      <button 
                        className="btn btn-primary"
                        onClick={() => setSelectedCartilha(cartilha)}
                      >
                        <span className="icon">📖</span> Ler Online
                      </button>
                      <a 
                        className="btn btn-secondary" 
                        href={cartilha.pdf} 
                        download
                      >
                        <span className="icon">📥</span> Baixar PDF
                      </a>
                    </>
                  ) : (
                    <span className="badge">
                      <span className="icon">🕐</span> Em breve
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Visor de PDF Modal */}
        {selectedCartilha && (
          <div className="pdf-viewer-modal" onClick={closeViewer}>
            <div className="pdf-viewer-container" onClick={(e) => e.stopPropagation()}>
              <div className="pdf-viewer-header">
                <h3>{selectedCartilha.titulo}</h3>
                <button className="close-btn" onClick={closeViewer}>
                  ✕
                </button>
              </div>

              <div className="pdf-viewer-controls">
                <div className="controls-left">
                  <button 
                    className="control-btn"
                    onClick={previousPage}
                    disabled={pageNumber <= 1}
                  >
                    ← Anterior
                  </button>
                  <span className="page-info">
                    Página {pageNumber} de {numPages || '...'}
                  </span>
                  <button 
                    className="control-btn"
                    onClick={nextPage}
                    disabled={pageNumber >= numPages}
                  >
                    Próxima →
                  </button>
                </div>

                <div className="controls-right">
                  <button className="control-btn" onClick={zoomOut} disabled={scale <= 0.6}>
                    🔍−
                  </button>
                  <span className="zoom-info">{Math.round(scale * 100)}%</span>
                  <button className="control-btn" onClick={zoomIn} disabled={scale >= 2.0}>
                    🔍+
                  </button>
                  <a 
                    href={selectedCartilha.pdf} 
                    download 
                    className="control-btn download-btn"
                  >
                    📥 Baixar
                  </a>
                </div>
              </div>

              <div className="pdf-viewer-content">
                <Document
                  file={selectedCartilha.pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="pdf-loading">
                      <div className="spinner"></div>
                      <p>Carregando PDF...</p>
                    </div>
                  }
                  error={
                    <div className="pdf-error">
                      <p>❌ Erro ao carregar o PDF</p>
                      <small>Verifique se o arquivo existe no caminho correto.</small>
                    </div>
                  }
                >
                  <Page 
                    pageNumber={pageNumber} 
                    scale={scale}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cartilhas;
