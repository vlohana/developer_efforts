import { css } from "lit";
export const form_css = css `

    form {
        border: 5px solid blue;
        display: flex;
        justify-content: start;
        align-items: center;
        align-content:center;
        background-color: orange;
        gap:0.1rem;
    }
    slot[name="item-list-text"]{
        color:grey;
        font-size:2rem;
        font-weight: bold;
        padding:1em;
    }
    select,input,button{
        border-radius: 20rem;
        padding: 1.5em 4.5em;
        margin-left: 1.5em;
        margin-bottom:2em;
        margin-top:2.2em;
        font-family: inherit;
        background-color: #ffebb3;
        border: none;
    }

`;
//# sourceMappingURL=form-page.css.js.map