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
  };
  p {
    font-size: 30px;
    color: #9B9B9B;
    opacity: 100%;
    line-height: 130%;
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

export const ComissionDivZero = styled.div`
  font-family: 'Circe-Bold';
  display: table-cell;
  font-size: 20px;
  vertical-align: top;
  span {
    padding: 15px 0 0 0;
  };
`;

export const ComissionDivItem = styled.div`
  display: table-cell;
  font-size: 20px;
  vertical-align: top;
  padding-top: 18px;
  padding-left: 150px;
  p {
    font-size: 40px;
    line-height: 120%;
    text-align: left;
  };
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
    text-indent: 17px;
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

/**
 * Footer styles
 */
export const FooterDiv = styled.div`
  border-top: 1px solid #555555;
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

/**
 * Shared elements
 */
export const SyledButton = styled( Button )`
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
`;

export const ColCentered = styled( Col )`
  text-align: center;
`;

export const NoPaddingCol = styled( Col )`
  &&& {
    padding: 0;
  }
`;
