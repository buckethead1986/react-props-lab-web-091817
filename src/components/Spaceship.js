// // Code The Spaceship Component Here
// import React from "react";
//
// export default class Spaceship extends React.Component {
//   render() {
//     const { name, speed, hasRockets, colors } = this.props;
//
//     return (
//       <div className="spaceship">
//         <h1>SpaceShip Name: {name}</h1>
//         <p> Spaceship speed: {speed}</p>
//         <p> Pew Pew: {rockets(hasRockets)}</p>{" "}
//         {/*ternary operator also works.
//         Just checking if functions can be used*/}
//         <p>Colors: </p>
//         <ul>
//           {colors.map(color => {
//             return <li>{color}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
//
// Spaceship.defaultProps = {
//   speed: "slow",
//   hasRockets: false,
//   colors: ["Black", "Red"]
// };
//
// function rockets(hasRockets) {
//   if (hasRockets) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

//Other way, not assigning props at the beginning as const

import React from "react";

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>SpaceShip!</h1>
        <p>Spaceship name: {this.props.name}</p>
        <p>Spaceship speed: {this.props.speed}</p>
        <p>Spaceship Rockets: {this.props.hasRockets ? "Yes" : "No"}</p>
        <p>
          Spaceship colors:{" "}
          {this.props.colors.map(color => {
            return <li>{color}</li>;
          })}
        </p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  speed: "slow",
  colors: ["black", "red"]
};

export default Spaceship;
