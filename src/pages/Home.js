import React, { Component } from 'react';

import '../styles/pages/Home.css';

import InputMask from 'react-input-mask';


function sendCEP() {

    let cep = document.getElementById('inputcep').value;
    let cleanCEP;

    cleanCEP = cep.replace('-', '');

    fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('cep').innerHTML = `${data.cep}`;
            document.getElementById('logradouro').innerHTML = `${data.logradouro}`;
            document.getElementById('complemento').innerHTML = `${data.complemento}`;
            document.getElementById('bairro').innerHTML = `${data.bairro}`;
            document.getElementById('localidade').innerHTML = `${data.localidade}`;
            document.getElementById('uf').innerHTML = `${data.uf}`;
            document.getElementById('ibge').innerHTML = `${data.ibge}`;
            document.getElementById('gia').innerHTML = `${data.gia}`;
            document.getElementById('ddd').innerHTML = `${data.ddd}`;
            document.getElementById('siafi').innerHTML = `${data.siafi}`;
        })
        .catch(e => console.log('Deu erro' + e));
}


class Home extends Component {

    render() {
        return (
            <>
                <div id='conatainerHome'>

                    <div className='searchCEP'>

                        <h1>Consulta de cep</h1>

                        <label>

                            <h4>Pesquisa pelo seu CEP:</h4>

                            <div className='formBox'>

                                <InputMask placeholder='CEP'
                                    mask='99999-999'
                                    id='inputcep'
                                />

                                <div className='styleButton'>
                                    <button type="submit" onClick={() => { sendCEP() }}>Enviar</button>
                                </div>

                            </div>

                        </label>

                        <div id='resultBox'>

                            <div className='result'>
                                <h5>cep:</h5>
                                <label className='result' id='cep'></label>
                            </div>

                            <div>
                                <h5>logradouro:</h5>
                                <label className='result' id='logradouro'></label>
                            </div>

                            <div>
                                <h5>complemento:</h5>
                                <label className='result' id='complemento'></label>
                            </div>

                            <div>
                                <h5>bairro:</h5>
                                <label className='result' id='bairro'></label>
                            </div>

                            <div>
                                <h5>localidade:</h5>
                                <label className='result' id='localidade'></label>
                            </div>

                            <div>
                                <h5>uf:</h5>
                                <label className='result' id='uf'></label>
                            </div>

                            <div>
                                <h5>ibge:</h5>
                                <label className='result' id='ibge'></label>
                            </div>

                            <div>
                                <h5>gia:</h5>
                                <label className='result' id='gia'></label>
                            </div>

                            <div>
                                <h5>ddd:</h5>
                                <label className='result' id='ddd'></label>
                            </div>

                            <div>
                                <h5>siafi:</h5>
                                <label className='result' id='siafi'></label>
                            </div>

                        </div>

                    </div>

                </div >

            </>
        );
    }
}

export default Home;