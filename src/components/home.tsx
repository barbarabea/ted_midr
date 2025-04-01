import React from "react";
import './home.css';
import '../styles/globalStyles.css'; 

const Home: React.FC = () => {
    return (
        <section>
            <div className="container-fluid col-10 mt-5">
                <h1 className="fw-bold text-uppercase my-4 titles-color">Título</h1>
                <p className="texts-color">
                    Os Planos Regionais de Desenvolvimento (PRDs), como o PRDA, PRDNE e PRDCO, utilizam indicadores para monitorar e avaliar o progresso das ações e políticas voltadas para o desenvolvimento regional. Esses indicadores se classificam em diferentes categorias, com frequência variada nos eixos da Política Nacional de Desenvolvimento Regional (PNDR). 
                </p>

                <p className="texts-color">Abaixo, estão apresentadas as análises realizadas no Power BI para cada um dos PRDs.</p>
                
                {/*Centro-Oeste*/}
                <div className="py-4">
                    <h2 className="subtitles-color">Centro-Oeste</h2>
                    <p className="texts-color">O Plano Regional de Desenvolvimento do Centro-Oeste (PRDCO) 2024-2027 define indicadores e metas para monitorar e avaliar o progresso em direção aos seus objetivos, organizados em três eixos estratégicos.</p>
                    <ul className="texts-color">
                        <li><span className="fw-bold">Eixo 1: Desenvolvimento produtivo - </span>Aumentar a produtividade e a competitividade da agropecuária, por meio da incorporação de tecnologias, da diversificação da produção e do fortalecimento da infraestrutura e logística.</li>
                        <li><span className="fw-bold">Eixo 2: Ciência, Tecnologia e Inovação - </span> Expandir a capacidade de produção e difusão de conhecimento e tecnologia na região, fortalecendo a infraestrutura de ciência e tecnologia, com ênfase na expansão das universidades e centros de pesquisa, além de estimular a cooperação entre universidades, empresas e governo para o desenvolvimento de soluções inovadoras que atendam aos desafios da região, promovendo parcerias e investimentos estratégicos em pesquisa e desenvolvimento (P&D).</li>
                        <li><span className="fw-bold">Eixo 3: Infraestrutura Econômica e Urbana - </span>Desenvolver a logística e a integração regional, melhorando a infraestrutura de transporte e comunicação e reduzindo os custos logísticos, além de ampliar e modernizar a infraestrutura de energia, com foco em fontes renováveis e eficiência energética.</li>
                    </ul>


                    <div className="row justify-content-center">
                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>

                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>

                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>
                    </div>
                </div>

                {/*Norte*/}
                <div className="py-4">
                    <h2 className="subtitles-color">Norte</h2>
                    <p className="texts-color">Breve descrição sobre o PRDCO e as análises realizadas na região Centro-Oeste.</p>

                    <div className="row justify-content-center">
                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>

                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>

                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>
                    </div>
                </div>
                
                {/*Nordeste*/}
                <div className="py-4">
                    <h2 className="subtitles-color">Nordeste</h2>
                    <p className="texts-color">Breve descrição sobre o PRDCO e as análises realizadas na região Centro-Oeste.</p>

                    <div className="row justify-content-center">
                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>

                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>

                        <div className="col-4">
                            <p>Nome, descrição</p>
                            <iframe className="power-bi-home" title="saneamento-basico" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ2NDEyOTMtY2RhMS00N2M5LWFmZTUtZmY1N2ZiNWViYjg3IiwidCI6ImQ3OTA0Mzk4LTUzOWMtNDljNS1hYTIzLWYwNzlhNjg4NzBjYSJ9"></iframe>
                        </div>
                    </div>
                </div>

            </div>

           
        </section>
    )
}; 

export default Home; 