import React, { Component } from 'react';

import '../styles/pages/Home.css';

import InputMask from 'react-input-mask';

function sendCEP() {
    console.log('CEP enviado');
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
                                <form action={sendCEP}>
                                    <InputMask placeholder='CEP'
                                        mask='99999-999' />

                                    <div className='styleButton'>
                                        <button type="submit">Enviar</button>
                                    </div>

                                </form>

                            </div>

                        </label>

                        <div id='resultBox'>
                            <div>
                                <h5>cep:</h5>
                                <label className='result'>74715-680</label>
                            </div>

                            <div>
                                <h5>logradouro:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>complemento:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>bairro:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>localidade:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>uf:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>ibge:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>gia:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>ddd:</h5>
                                <label className='result'></label>
                            </div>

                            <div>
                                <h5>siafi:</h5>
                                <label className='result'></label>
                            </div>

                        </div>

                    </div>

                </div >

            </>
        );
    }
}

export default Home;