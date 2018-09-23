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
          <h1 id="pregunta">¿Qué puedo deducir en el regimen de servicios profesionales?</h1>

          <div className="line-question">
              <img src={require('./line-question.svg')} />
          </div>

          <h2 id="answer">Siendo parte del régimen de servicios profesionales estas obligado a presentar declaraciones mensuales y anuales. Para ello sólo puedes deducir los gastos e inversiones que sean indispensables para llevar a cabo tu trabajo.</h2>

          <br></br>

          <h2 id="answer">Estas son las deducciones autorizadas:</h2>

          <ul id="answer">
              <li>Pago de sueldos y salarios. </li>
              <li>Cuotas que hayas pagado como patrón al IMSS.</li>
              <li>Arrendamiento del local que utilices para la prestación de tus servicios.</li>
              <li>Luz y teléfono del local para tus actividades.</li>
              <li>Papelería y artículos de escritorio.</li>
              <li>Inversiones en activo fijo, como equipo de cómputo, de oficina, construcciones o equipo de transporte.</li>
          </ul>


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
