import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  // scroll style 
  * {
  scrollbar-width: thin;
  scrollbar-color: ${(props)=>props.theme.colors.purple} ${(props)=>props.theme.colors.purple};
  }
  *::-webkit-scrollbar-track
  {
    border: 1px solid ${(props)=>props.theme.colors.background};
    background: ${(props) => props.theme.colors.background};
  }

  *::-webkit-scrollbar
  {
    width: 3px;
    background-color: #F5F5F5;
  }

  *::-webkit-scrollbar-thumb
  {
    background: ${(props) => props.theme.colors.background};	
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    margin:0px;
    font-family: Montserrat;
    img {
      height: auto;
      max-width: 100%;
    }

    //modal styled
    .md-modal {
      .modal-dialog {
        max-width: 650px;

      }
    }
    .modal-dialog{
      animation: popups 1s ease ;
    }
    @keyframes popups {
      0% {transform:scaleY(.01) scaleX(0);}
      100% {transform:scaleY(1) scaleX(1);}
    }
    .modal-dialog {
      font-family: "Montserrat";
      .modal-content {
        border-radius: 13.2692px;
        padding:2px;
        border: unset;
        background : ${(props) => props.theme.isDark ? props.theme.gradients.multiColor2 : props.theme.gradients.buttonBorderLight} !important;
        .modal-bg{
          background : ${(props) => props.theme.isDark ? props.theme.colors.modalBackground :  props.theme.colors.white} !important;
          border-radius : 12px;
        }
      }
      .modal-header {
          padding : 0;
          .modal-title{
            font-weight: 500;
            font-size: 23.8846px;
            width: 100%;
            color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
          }
          border-bottom: unset;
          .close {
              color: ${(props) => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
              width: 25px;
              height: 25px;
              border-radius: 14px;
              font-size: 44px;
              font-weight: 400;
              margin: 0px 15px;
              margin-left: auto;
              padding: unset;
              opacity: 1;
          }
      }
      .modal-body{
        padding : 0;
      }
      .modal-footer {
          padding : 0;
          border-top: unset;
      }
    }
    //modal styled

  }
`

export default GlobalStyle
