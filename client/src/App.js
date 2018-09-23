import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import logoDeducir from './logo-nuevo-deducir.svg';
import lineIMG from './line-div-hk.svg';
import ImagenFoot from './img-delight.png';
import DivQuestion from './line-question.svg';

import Button from '@material-ui/core/Button';

class App extends Component {

  state = {
      response: ''
    };

    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;
    };




  render() {
    return (


      <div style={{display: 'block'}}>

      <div className="header">
          <div className="logo">
              <img src={require('./logo-nuevo-deducir.svg')} />
          </div>
      </div>

      <div className="line">
        <img src={require('./line-div-hk.svg')} />
      </div>

      <div clasName="subnav" style={{display: 'inline'}}>
        <div >
          <h5>{this.state.response}</h5>
        </div>
      </div>

      <div className="pregunta">
          <h1 id="pregunta">¿Puedo deducir gastos personales?</h1>

          <div className="line-question">
              <img src={require('./line-question.svg')} />
          </div>

          <h2 id="answer"> El monto total de las deducciones que podrán efectuar los contribuyentes. El nodo Incapacidades se deberá informar si se incluye en percepciones la clave 014 Subsidios por incapacidad o bien en deducciones la clave 006 Descuento por Incapacidad.</h2>

      </div>

      <div className="compartir">
              <Button onClick="share()" color="primary" >
                Compartir
              </Button>
        </div>

        <div className="foot">
            <img src={require('./img-delight.png')} />
        </div>

      </div>

    );
  }
}

export default App;
