import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html{
    height:100%;

    body:(
        display:flex;
        flex-direction:column;
        height:100%;
        margin:0;

        #root(
            background:radial-gradient(red, blue);
            color:'blue';
            font-family:sans-serif;
            height:100%;
            justify-content:center;
            padding:15px;
        )
    )
}

`