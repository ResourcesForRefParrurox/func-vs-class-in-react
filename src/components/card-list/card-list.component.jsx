// import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

// code beigns here

// ! this is a functional component
const CardList = ({ monsters }) => (
  // const { monsters } = props;
  // console.log(this.props);

  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

// ! this is a class component
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     // console.log(this.props);
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { id, name, email } = monster;
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }
export default CardList;
