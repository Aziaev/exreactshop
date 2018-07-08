import styled from 'styled-components';
import { Button, Col, Input, Row } from 'react-materialize';
import background from '../assets/img/back_null_percents.jpg';

/**
 * Header block styles
 */
export const HeaderDiv = styled.div`
  background: url(${background}) no-repeat 80% 0%;
  background-size: cover;
  text-align: left;
  vertical-align: bottom;
  padding: 48px 56px;
  font-family: 'Circe-ExtraLight';
  h1 {
    font-size: 66px;
    color: #FFFFFF;
    line-height: 110%;
    @media (max-width: 992px) {
      font-size: 42px;
    }
  };
  p {
    font-size: 30px;
    color: #BCBCBC;
    opacity: 100%;
    line-height: 130%;
    @media (max-width: 992px) {
      font-size: 18px;
    }
  };
`;

export const HeaderRow = styled( Row )`
  padding: 80px 0 40px 0;
`;

const HeaderText = styled.span`
  font-family: 'Circe-Regular';
  text-transform: uppercase;
  font-size: 11px;
  line-height: 146%;
  float: right;
  padding: 9px 0 0 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LangSelector = HeaderText.extend`
  color: #FFFFFF;
`;
export const ExnessLink = HeaderText.extend`
  color: #FFCF00;
`;

export const CounterSink = styled.span`
  margin-left: 5px;
  font-size: 16px;
  color: #AAAAAA;
`;

export const StyledButtonHeader = styled( Button )`
  font-family: 'Circe-Regular';
  margin-top: 15px;
  background-color: #FFCF00;
  height: 72px;
  text-align: left;
  font-size: 11px;
  padding: 0 2rem;
  width: 304px;
  span {
    padding-left: 5px;
    float: right;
  }
  :hover {
    background-color: #FFCF00;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

/**
 * Comission block styles
 */
export const ComissionDiv = styled.div`
  font-family: 'Circe-Regular';
  padding: 48px 56px 0 48px;
  color: #000000;
  background-color: #FFCF00;
  margin-bottom: -20px;
  text-align: center;
  display: table;
  table-layout: fixed;
  border-spacing: 10px;
  width: 100%;
`;

export const ComissionDivItemVertical = styled.div`
  font-family: 'Circe-Bold';
  display: table-cell;
  font-size: 20px;
  vertical-align: top;
  transform: rotate(270deg);
	float: left;
	margin-left: -95px;
  margin-top: 145px;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const ComissionDivZero = styled.div`
  font-family: 'Circe-Bold';
  display: table-cell;
  font-size: 20px;
  vertical-align: top;
  span {
    padding: 15px 0 0 0;
  };
  @media (max-width: 860px) {
    p {display: none;}
    text-align: center;
    display: block;
  }
  @media (max-width: 500px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ComissionDivItem = styled.div`
  display: table-cell;
  vertical-align: top;
  padding-left: 150px;
  @media (max-width: 1200px) {
    &&& margin-top: 0;
    font-size: 32px;
  }
  @media (max-width: 1024px) {
    margin-top: 0;
    padding-left: 100px;
  }
  @media (max-width: 860px) {
    display: block;
    padding-left: 0;
  }
  p {
    font-size: 40px;
    line-height: 120%;
    text-align: left;
    @media (max-width: 1200px) {
      font-size: 32px;
    }
    @media (max-width: 956px) {
      font-size: 24px;
    }
    @media (max-width: 860px) {
      text-align: center;
    }
  };
`;

/**
 * Payment block styles
 */
export const PaymentDiv = styled.div`
  padding: 20px 0;
  font-family: 'Circe-Regular';
  color: #616161;
  background-color: #dedede;
  margin-bottom: -20px;
  text-align: center;
  p {
    @media (max-width: 860px) {
      display: hidden;
    }
  }
`;

export const PaymentH1 = styled.h1`
  font-size: 40px;
`;

export const PaymentP = styled.p`
 padding-top: 0;
 font-size: 14px;
 color: #000000;
`;

export const PaymentInput = styled( Input )`
  :first-child {
    text-indent: 2rem;
    border: none;
    background-color: #EFEFEF;
    height: 72px;
  }
  :first-child:focus {
    &&& {
      border: 1px solid #DEDEDE;
      box-shadow: 0 0 8px 2px #BBBBBB;
      color: #000000
      border: none;
      background-color: #FFFFFF;
    };
  }
`;

export const PaymentImg = styled.img`
  margin: 0 30px 15px 0;
  height: 45px;
`;

export const RowMobile = styled(Row)`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const RowDesktop = styled(Row)`
  @media (max-width: 768px) {
    display: none;
  }
`;

/**
 * Footer styles
 */
export const FooterDiv = styled.div`
  font-size: 16px;
  color: #616161;
  background-color: #000000;
  margin-bottom: -20px;
`;

export const FooterLiA = styled.a`
  font-family: 'Circe-Light';
  color: #616161;
  text-decoration: underline;
`;

export const FooterLiAWhite = styled.a`
  font-family: 'Circe-Light';
  color: #FFFFFF;
  text-decoration: underline;
`;

export const FooterA = styled.a`
  color: #616161;
  text-decoration: underline;
`;

export const FooterP = styled.p`
  font-family: 'ArialMT';
  font-size: 11px;
`;

export const FooterImg = styled.img`
  padding: 20px;
`;

export const FooterColTerms = styled( Col )`
  text-align: left;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const FooterColMobileHidden = styled( Col )`
  text-align: center;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const FooterColMobileShown = styled( Col )`
  text-align: center;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const FooterMenuItem = styled.div`
  display: inline-block;
  font-family: 'Circe-Bold';
  font-size: 12px;
  color: #FFFFFF;
  text-decoration: none;
  margin: 2px;
`;

/**
 * Shared elements
 */
export const StyledButton = styled( Button )`
  font-family: 'Circe-Regular';
  margin-top: 15px;
  background-color: #FFCF00;
  height: 72px;
  text-align: left;
  font-size: 11px;
  padding: 0 2rem;
  span {
    padding-left: 5px;
    float: right;
  }
  :hover {
    background-color: #FFCF00;
  }
`;

export const CustomSocialImg = styled.img`
  padding: 29px 10px;
  @media (max-width: 430px) {
    padding: 15px 5px;
  }
  margin-bottom: -1px;
`;

export const ColCentered = styled( Col )`
  text-align: center;
`;

export const NoPaddingCol = styled( Col )`
  &&& {
    padding: 0;
  }
`;
