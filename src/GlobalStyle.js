const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
      *, *::after, *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Source Sans Pro', sans-serif;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      button {
        border: none;
        outline: none;
        cursor: pointer;
      }

      input, select, textarea {
        outline: none;
      }
`;

export default GlobalStyle;
