import * as React from 'react';
import { Col, Container, Row } from 'react-materialize';
import { about, analytics, faq, footerText, instruments, trading } from '../constants/landing';
import sysec from '../assets/img/sysec.png';
import beliz from '../assets/img/beliz.png';
import nqa from '../assets/img/icon-nqa.png';
import sm from '../assets/img/icon-sm.png';
import cascade from '../assets/img/cascade.png';
import logo from '../assets/img/logo.svg';
import vklogo from '../assets/img/VK@2x.png';
import oklogo from '../assets/img/Ok@2x.png';
import twitterlogo from '../assets/img/Twitter@2x.png';
import fblogo from '../assets/img/Facebook@2x.png';
import youtubelogo from '../assets/img/Youtube@2x.png';
import linkedlogo from '../assets/img/LinkedIn@2x.png';
import ksinlogo from '../assets/img/Ksin@2x.png';
import instagramlogo from '../assets/img/Instagram@2x.png';
import gpluslogo from '../assets/img/Google@2x.png';
import fp from '../assets/img/icon-ps-fp.png';
import cash from '../assets/img/icon-ps-cash.png';
import pm from '../assets/img/icon-ps-pm.png';
import wm from '../assets/img/icon-ps-wm.png';
import net from '../assets/img/icon-ps-net.png';
import visa from '../assets/img/icon-ps-visa.png';
import pspw from '../assets/img/icon-ps-pw.png';
import uk from '../assets/img/icon-ps-uk.png';
import zero from '../assets/img/zero.svg';
import {
  ColCentered,
  ComissionDiv,
  ComissionDivItem,
  ComissionDivItemVertical,
  ComissionDivZero,
  CounterSink,
  CustomSocialImg,
  ExnessLink,
  FooterA,
  FooterColMobileHidden,
  FooterColMobileShown,
  FooterColTerms,
  FooterDiv,
  FooterImg,
  FooterLiA,
  FooterLiAWhite,
  FooterMenuItem,
  FooterP,
  HeaderDiv,
  HeaderRow,
  LangSelector,
  NoPaddingCol,
  PaymentDiv,
  PaymentH1,
  PaymentImg,
  PaymentInput,
  PaymentP,
  RowDesktop,
  RowMobile,
  StyledButton,
  StyledButtonHeader
} from '../style/index';
import '../assets/css/custom.css';
import '../assets/fonts/Circe-Light.woff';

export default () => (
  <div>
    <HeaderDiv>
      <Row>
        <img src={logo}/>
        <ExnessLink>Сайт Exness</ExnessLink>
        <LangSelector>Русский<CounterSink>⌵</CounterSink></LangSelector>
      </Row>
      <HeaderRow>
        <NoPaddingCol s={12}>
          <h1>Подлинная свобода распоряжения своими средствами на Форекс</h1>
          <p>Пополняйте счет и выводите прибыль без комиссий</p>
          <StyledButtonHeader flat>
            Пополнить счет<span>❯</span>
          </StyledButtonHeader>
        </NoPaddingCol>
      </HeaderRow>
    </HeaderDiv>
    <ComissionDiv>
      <Row>
        <NoPaddingCol s={12}>
          <ComissionDivItemVertical>Для всех типов счетов</ComissionDivItemVertical>
          <ComissionDivZero>
            <img src={zero}/>
            <p>Комиссия за переводы</p>
          </ComissionDivZero>
          <ComissionDivItem>
            <p>Выводя со счета форекс-брокера EXNESS $1000,
              вы получаете на свой кошелек или банковский счет ровно $1000.</p>
          </ComissionDivItem>
        </NoPaddingCol>
      </Row>
    </ComissionDiv>
    <PaymentDiv>
      <Container>
        <Row>
          <Col s={12}>
            <PaymentH1>Доступные платежные системы</PaymentH1>
          </Col>
        </Row>
        <RowMobile>
          <div style={{ height: '66px' }}>
            <ColCentered s={12}>
              <span style={{ float: 'left' }}><h4>{'<'}</h4></span>
              <img style={{ width: 'auto' }} src={uk}/>
              <span style={{ float: 'right' }}><h4>{'>'}</h4></span>
            </ColCentered>
          </div>
          <Col s={6} offset="s3">
            <StyledButton flat style={{ width: '100%' }}>
              Открыть счет<span> ❯ </span>
            </StyledButton>
          </Col>
        </RowMobile>
        <RowDesktop>
          <ColCentered s={12}>
            <PaymentImg src={fp}/>
            <PaymentImg src={cash}/>
            <PaymentImg src={pm}/>
            <PaymentImg src={wm}/>
            <PaymentImg src={net}/>
            <PaymentImg src={visa}/>
            <PaymentImg src={pspw}/>
            <PaymentImg src={uk}/>
          </ColCentered>
        </RowDesktop>
        <RowDesktop>
          <PaymentInput s={4} placeholder="Мобильный телефон"/>
          <PaymentInput s={4} placeholder="Адрес электронной почты"/>
          <Col s={4}>
            <StyledButton flat style={{ width: '100%' }}>
              Пополнить счет<span> ❯ </span>
            </StyledButton>
          </Col>
        </RowDesktop>
        <Row>
          <Col s={6} offset="s3">
            <PaymentP>По некоторым <a href="/">способам ввода/вывода средств</a> действуют ог
              раничения по размеру минимальной суммы операции для осуществления
              транзакции без комиссий</PaymentP>
          </Col>
        </Row>
      </Container>
    </PaymentDiv>
    <FooterDiv>
      <Row>
        <ColCentered s={12}>
          <CustomSocialImg src={vklogo}/>
          <CustomSocialImg src={oklogo}/>
          <CustomSocialImg src={twitterlogo}/>
          <CustomSocialImg src={fblogo}/>
          <CustomSocialImg src={youtubelogo}/>
          <CustomSocialImg src={linkedlogo}/>
          <CustomSocialImg src={ksinlogo}/>
          <CustomSocialImg src={instagramlogo}/>
          <CustomSocialImg src={gpluslogo}/>
        </ColCentered>
      </Row>
    </FooterDiv>
    <FooterDiv style={{ paddingBottom: '40px' }}>
      <Container>
        <FooterColMobileShown>
          <FooterMenuItem>О компании</FooterMenuItem>
          <FooterMenuItem>Торговля</FooterMenuItem>
          <FooterMenuItem>Инструменты</FooterMenuItem>
          <FooterMenuItem>Партнерство</FooterMenuItem>
        </FooterColMobileShown>
      </Container>
    </FooterDiv>
    <FooterDiv style={{ borderTop: '1px solid #555555' }}>
      <Container>
        <Row>
          <FooterColMobileHidden l={2}>
            <ul className="footer-navList">
              <li>
                <FooterLiAWhite href="/">О компании</FooterLiAWhite>
              </li>
              {about.map( ( item, index ) => <li key={index}>
                <FooterLiA href="/">{item}</FooterLiA>
              </li> )}
            </ul>
          </FooterColMobileHidden>
          <FooterColMobileHidden l={3}>
            <ul className="footer-navList">
              <li>
                <FooterLiAWhite href="/">Торговля</FooterLiAWhite>
              </li>
              {trading.map( ( item, index ) => <li key={index}>
                <FooterLiA href="/">{item}</FooterLiA>
              </li> )}
            </ul>
          </FooterColMobileHidden>
          <FooterColMobileHidden l={2}>
            <ul className="footer-navList">
              <li>
                <FooterLiAWhite href="/">Инструменты</FooterLiAWhite>
              </li>
              {instruments.map( ( item, index ) => <li key={index}>
                <FooterLiA href="/">{item}</FooterLiA></li> )}
            </ul>
          </FooterColMobileHidden>
          <FooterColMobileHidden l={2}>
            <ul className="footer-navList" style={{ paddingTop: '25px' }}>
              {analytics.map( ( item, index ) => <li key={index}>
                <FooterLiA href="/">{item}</FooterLiA>
              </li> )}
            </ul>
          </FooterColMobileHidden>
          <FooterColMobileHidden l={1}>
            <ul className="footer-navList">
              {faq.map( ( item, index ) => <li key={index}>
                <FooterLiAWhite href="/">{item}</FooterLiAWhite>
              </li> )}
            </ul>
          </FooterColMobileHidden>
        </Row>
        <Row>
          <FooterColTerms l={8}>
            <FooterP>{footerText[ 0 ]}</FooterP>
            <FooterP>{footerText[ 1 ]} <FooterA href="/">Подробнее</FooterA></FooterP>
            <FooterP>{footerText[ 2 ]}</FooterP>
          </FooterColTerms>
          <FooterColMobileHidden l={4}>
            <FooterImg src={sysec}/>
            <FooterImg src={beliz}/>
            <FooterImg src={nqa}/>
            <FooterImg src={sm} style={{ paddingBottom: '40px' }}/>
            <FooterImg src={cascade}/>
          </FooterColMobileHidden>
        </Row>
      </Container>
    </FooterDiv>
  </div>
);
