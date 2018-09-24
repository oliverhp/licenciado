import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import logoDeducir from './logo-nuevo-deducir.svg';
import lineIMG from './line-div-hk.svg';
import ImagenFoot from './img-delight.png';
import DivQuestion from './line-question.svg';
import chevronRight from './chevron-right.svg';

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

          <div >
            <ul className="nav">
                <li className="nav-element">HOME</li>
                <li className="nav-element">PREGUNTAS</li>
                <li className="nav-element">GLOSARIO</li>
            </ul>
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
          <h1 id="pregunta">¿Qué puedo deducir por servicios profesionales?</h1>

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

          <h2 id="answer">Gastos anuales:</h2>
          <ul id="answer">
              <li>Gastos médicos, dentales, de enfermeras y gastos hospitalarios, incluido el alquiler o compra de aparatos para rehabilitación, prótesis, análisis y estudios clínicos.</li>
              <li>Lentes ópticos graduados hasta por 2,500 pesos.</li>
              <li>Gastos funerarios.</li>
              <li>Pagos por primas de seguro de gastos médicos.</li>
              <li>Los intereses reales, efectivamente pagados en el ejercicio, por créditos hipotecarios para tu casa habitación.</li>
              <li>Donativos.</li>
              <li>Transporte escolar obligatorio.</li>
              <li>Aportaciones voluntarias al fondo de retiro.</li>
              <li>Impuestos locales por salarios.</li>
              <li>Colegiaturas (preescolar a preparatoria).</li>
          </ul>

          <h2 id="answer">Recuerda que para que estos gastos sean admisibles deben cumplir con lo siguiente:</h2>
          <ul id="answer">
            <li>Contar con una factura (CFDI) expedido por el proveedor del gasto a deducir.</li>
            <li>Que el método de pago para todos los gastos mayores a $2000 pesos sean cheque nominativo, transferencia bancaria, tarjeta de crédito, débito, de servicios o monederos electrónicos autorizados por el SAT.</li>
            <li>Que el pago sea distribuido en el periodo al que pertenece la declaración.</li>
            <li>Deben estar registrados en tu contabilidad.</li>
          </ul>


      </div>

      <div className="compartir">
              <Button onClick="share()" color="primary" >
                Compartir
              </Button>
        </div>

        <div id="bottom">
            <h5>OTRAS PREGUNTAS RECOMENDADAS</h5>

            <div id="card">
                <h3 id="card-content">¿Cuál es el monto máximo de las deducciones personales?</h3>
                <img src={require('./chevron-right.svg')} />
            </div>

        </div>



      </div>

    );
  }
}

export default App;
