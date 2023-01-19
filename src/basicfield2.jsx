import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Component } from 'react';
export default class MonitorNamefield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monitorName: props.MonNameValue,
      index: props.Index

    }
  }
  onChangeField = (e) => {
    let val = e.target.value
    this.setState({ monitorName: e.target.value })
    this.props.callback(e.target.value, this.state.index)
  }

  render() {
   let mval= this.state.monitorName

    return (

      <Form>


        <Form.Group as={Row} className="mb-2" controlId="formPlaintextPassword" >
          <Form.Label column sm="2">
            mon{this.state.index}
          </Form.Label>
          <Col sm="4">
            <Form.Control type="text" placeholder="mon" value={mval} onChange={this.onChangeField} />
          </Col>
        </Form.Group>
      </Form>

    );
  }

}
function PlaintextExample() {
  return (
    <Form>


      <Form.Group as={Row} className="mb-1" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          monitor name
        </Form.Label>
        <Col sm="2">
          <Form.Control type="text" placeholder="mon" />
        </Col>
      </Form.Group>
    </Form>
  );
}

//export default PlaintextExample;