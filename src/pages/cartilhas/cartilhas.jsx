import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import './cartilhas.css';

// Configurar o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Cartilhas = () => {
    const cartilhas = [
        {
            id: 'oqcaverna',
            titulo: 'O que é Caverna?',
            descricao: 'Será que cavernas realmente são assustadoras? Descubra cientificamente o que são as cavernas, o que as forma e seus ecossistemas.',
            pdf: '/cartilhas/Cartilha1_O_que_e_caverna.pdf',
            disponivel: true
        },
        {
            id: 'oqespeleologia',
            titulo: 'O que é Espeleologia?',
            descricao: 'Conheça a ciência que transforma curiosidade em expedições seguras: da pré-história aos tempos atuais. Esta leitura revela como a espeleologia une aventura, pesquisa e proteção ambiental.',
            pdf: '/cartilhas/Cartilha2_O_que_e_espeleologia.pdf',
            disponivel: true
        },
        {
            id: 'oqespeleogenese',
            titulo: 'O que é espeleogênese?',
            descricao: 'Entenda, passo a passo, como água, rocha e tempo esculpem salões gigantescos; você vai visualizar cada fase da espeleogênese e aprender a reconhecer as pistas de uma caverna ainda em formação.',
            pdf: '/cartilhas/Cartilha3_O_que_e_espeleogenese.pdf',
            disponivel: true
        }
    ];

    return (
        <div className="App">
            <section id="cartilhas" className="cartilhas-section">
                <div className="container">
                    <div className="cartilhas-header">
                        <h1>Cartilhas Educativas</h1>
                        <p className="subtitle">
                            Materiais produzidos pela <Link to="/comissoes#comissao-educacao" className="link-educacao">Comissão de Educação</Link> do EGRIC,
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
                                    <h2>{cartilha.titulo}</h2>
                                    <p>{cartilha.descricao}</p>

                                    <div className="card-actions">
                                        {cartilha.disponivel ? (
                                            <>
                                                <a
                                                    className="btn btn-primary"
                                                    href={cartilha.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">📖</span> Ler Online
                                                </a>
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
                </div>
            </section>
        </div>
    );
};

export default Cartilhas;
