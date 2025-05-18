import { css } from "lit";
export const packing_css = css `

.list {
  border:5px solid green;
  background-color: #5a3e2b;
  color: #ffebb3;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap:1em;
} 

  .list>ul {
        list-style:none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.2rem;
        justify-content: center;
        align-content: start;
        // overflow: scroll;
    }


    .list li {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }
    
    .list button {
        border: none;
        background:none;
    }
    .item-list-description{
      font-family: sans-serif;
      font-size: 1.4rem;
    }
    


`;
//# sourceMappingURL=packing-items.css.js.map