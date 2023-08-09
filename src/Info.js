import React, { Component } from "react";
import tmnt from "./tmnt.jpg";

class Info extends Component {
  render() {
    return (
      <div>
        <h2>INFO</h2>
        <img alt="tmnt image" src={tmnt} />
        <p>The franchise began as a comic book, Teenage Mutant Ninja Turtles, which Eastman and Laird conceived as a parody of elements popular in superhero comics at the time. 
          The first issue was published in 1984 by Eastman and Laird's company Mirage Studios and was a surprise success. In 1987, Eastman and Laird licensed the characters to Playmates Toys, 
          which developed a line of Turtles action figures. About US$1.1 billion of Turtles toys were sold between 1988 and 1992, making them the third-bestselling toy figures ever at the time.</p>
        
        <p>The action figures were promoted with an animated series, which premiered in 1987 and ran for almost a decade. 
          Several films were released; the first, released in 1990, became the highest-grossing independent film up to that point. 
          Numerous video games have also been released, including several developed by Konami. 
          In some European regions, the franchise was titled Teenage Mutant Hero Turtles due to the violent connotations of the word "ninja".</p>

          <p>Eastman sold his share of the Turtles franchise to Laird in 2000. 
            In 2009, Laird sold it to Viacom, now Paramount Global. 
            The series has continued with a new comic series, the live-action films Teenage Mutant Ninja Turtles (2014) and Out of the Shadows (2016), 
            the animated series Rise of the Teenage Mutant Ninja Turtles (2018) with the movie in (2022) and the animated film Mutant Mayhem (2023).</p>
      </div>
    );
  }
}
 
export default Info;