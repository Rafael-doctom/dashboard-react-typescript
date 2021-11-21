import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizning:border-box;
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }

    ul, li, a{
        list-decoration:none;
        text-transform:none;
        list-style:none;
    }
`;