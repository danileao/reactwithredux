import React, { Component, Fragment } from 'react'

import {
  Navbar,
  NavItem,
  SideNav,
  SideNavItem,
  Button,
  Icon,
  Row,
  Col
} from 'react-materialize'

import './Menu.css'
import Routes from '../../routers/routes'

export default class Menu extends Component {
  state = {
    openSide: false
  }

  handleSidebar = e => {
    e.preventDefault()
    this.setState({ openSide: !this.state.openSide })
  }

  render () {
    const { openSide } = this.state

    return (
      <Fragment>
        <Navbar style={{ background: '#41715f' }}>
          <NavItem>
            <Button
              id='icon_menu'
              onClick={this.handleSidebar}
              floating
              waves='yellow'
            >
              <Icon>menu</Icon>
            </Button>
          </NavItem>
          <NavItem onClick={() => console.log('test click')}>
            PS - Front
          </NavItem>

          <NavItem style={{ float: 'right' }}>
            <Icon>account_circle</Icon>
          </NavItem>
        </Navbar>
        <SideNav
          fixed={openSide}
          trigger={<Icon />}
          options={{ closeOnClick: true, draggable: true }}
          onClick={this.handleSidebar}
        >
          <SideNavItem>
            <Icon style={{ float: 'right' }}>arrow_back</Icon>
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Cadastro</SideNavItem>
          <SideNavItem waves href='/cartao'>
            Cartão
          </SideNavItem>
          <Button>Cartão</Button>
        </SideNav>
        <Button waves='light' node='a' href='/cartao'>
          Acessar Cartão
        </Button>
        <Row>
          <Col s={12} className='grid-example'>
            <Routes />
          </Col>
        </Row>
      </Fragment>
    )
  }
}
