import React, { Component, Fragment } from 'react';
import {
  Table, Col, Button, Row, Modal,
} from 'react-materialize';
// import {
//   Card, Row, Input, Col,
// } from 'react-materialize';
// import { Container } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as CartaoActions from '../../store/actions/cartaoAction';
import CartaoEdit from './CartaoEdit';

class Cartao extends Component {
  static propTypes = {
    fetchCardById: PropTypes.func.isRequired,
    cards: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.nuber,
          number: PropTypes.number,
        }).isRequired,
      ),
    }),
  };

  static defaultProps = {
    cards: {},
  };

  state = {
    openEditModal: false,
  };

  componentDidMount() {
    const { fetchCardById } = this.props;
    fetchCardById(2);
  }

  handleEdit = (id) => {
    console.log(id);
  };

  openModal = () => {
    this.setState({ openEditModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openEditModal: false });
  };

  render() {
    const {
      cards: { data },
    } = this.props;

    const { openEditModal } = this.state;

    return (
      <Fragment>
        <Row />
        <Row>
          <Col s={12}>
            <Button waves="light" onClick={this.openModal}>
              Novo
            </Button>
          </Col>
        </Row>

        <Col s={1} />
        <Col s={10}>
          <Table>
            <thead>
              <tr>
                <th data-field="id">ID</th>
                <th data-field="number">Number</th>
                <th data-field="cpf">CPF</th>
                <th data-field="name">Name</th>
                <th>#</th>
              </tr>
            </thead>

            <tbody>
              {data
                && data.map(card => (
                  <tr key={card.id}>
                    <td>{card.id}</td>
                    <td>{card.number}</td>
                    <td>{card.cpf}</td>
                    <td>{card.name}</td>
                    <td>
                      <Button
                        floating
                        className="green"
                        waves="light"
                        icon="edit"
                        onClick={this.handleEdit(card.id)}
                      />
                      {' '}
                      &nbsp;
                      <Button floating className="green" waves="light" icon="delete" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
        <Col s={1} />

        <Modal header="Modal Header" open={openEditModal}>
          <CartaoEdit />
          <Button onClick={this.handleCloseModal}>Close</Button>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartaoActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cartao);
