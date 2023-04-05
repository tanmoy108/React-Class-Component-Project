import { Component } from "react";
import CardContainer from "./CardContainer";
import "./CardList.css";

class CardList extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="cardList">
          {this.props.arrayProps.map((value) => {
            const { name, id, email } = value;
            return <CardContainer id={id} name={name} email={email} />;
          })}
        </div>
      </>
    );
  }
}

export default CardList;
