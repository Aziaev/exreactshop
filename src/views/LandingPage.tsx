import * as React from 'react';
import { Button, Col, Container, Icon, Input, NavItem, Row } from 'react-materialize';
import {
  footerAbout,
  footerAnalytics,
  footerInstruments,
  footerLinks,
  footerText,
  footerTrading
} from '../constants/landing';
import logo from '../assets/img/logo.svg';
import { CustomA, CustomNavbar, firstContainer, FooterContainer } from '../style/index';
import '../assets/css/custom.css';

const navbarLogo = <img src={logo}/>;

export default () => (
  <div>
    <CustomNavbar right brand={navbarLogo}>
      <NavItem>Русский</NavItem>
      <NavItem>Сайт Exness</NavItem>
    </CustomNavbar>
    <div className="mycontainer" style={firstContainer}>
      <Container>
        <Row>
          <Col s={12}>
            <h1>Подлинная свобода распоряжения своими средствами на Форекс</h1>
            <p>Пополняйте счет и выводите прибыль без комиссий</p>
            <Button flat style={{ color: '#ffffff' }}>
              Пополнить счет
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="mycontainer" style={firstContainer}>
      <Container>
        <Row>
          <Col s={12}>
            <h1>0%</h1>
            <p>Комиссия за переводы</p>
            <p>Для всех типов счетов</p>
            <p>Выводя со счета форекс-брокера EXNESS $1000,
              вы получаете на свой кошелек или банковский счет ровно $1000.</p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="mycontainer" style={firstContainer}>
      <Container>
        <Row>
          <Col s={12}>
            <h1>Доступные платежные системы</h1>
            <Input s={4} label="Мобильный телефон"/>
            <Input s={4} label="Адрес электронной почты"/>
            <Button s={4} flat>
              Пополнить счет
            </Button>
          </Col>

          <Col s={12}>
            <p>По некоторым <a href="/">способам ввода/вывода средств</a> действуют ог
              раничения по размеру минимальной суммы операции для осуществления
              транзакции без комиссий</p>
          </Col>
        </Row>
      </Container>
    </div>
    <FooterContainer>
      <div>
        <Container>
          <Row>
            <Col s={12}>
              <Icon>facebook</Icon>
              <Icon>instagram</Icon>
              <Icon>ok</Icon>
              <Icon>twitter</Icon>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col s={2}>
              <ul className="footer-navList" style={{color: '#FFFFFF'}}>
                {footerAbout.map( ( item, index ) => <li key={index}><CustomA href="/">{item}</CustomA></li> )}
              </ul>
            </Col>
            <Col s={3}>
              <ul className="footer-navList">
                {footerTrading.map( ( item, index ) => <li key={index}><CustomA href="/">{item}</CustomA></li> )}
              </ul>
            </Col>
            <Col s={2}>
              <ul className="footer-navList">
                {footerInstruments.map( ( item, index ) => <li key={index}><CustomA href="/">{item}</CustomA></li> )}
              </ul>
            </Col>
            <Col s={2}>
              <ul className="footer-navList">
                {footerAnalytics.map( ( item, index ) => <li key={index}><CustomA href="/">{item}</CustomA></li> )}
              </ul>
            </Col>
            <Col s={1}>
              <ul className="footer-navList">
                {footerLinks.map( ( item, index ) => <li key={index}><CustomA href="/">{item}</CustomA></li> )}
              </ul>
            </Col>
          </Row>
          <Row>
            <p>{footerText[ 0 ]}</p>
            <p>{footerText[ 1 ]} <CustomA href="/">Подробнее</CustomA></p>
            <p>{footerText[ 2 ]}</p>
          </Row>
        </Container>
      </div>
    </FooterContainer>
  </div>
);
