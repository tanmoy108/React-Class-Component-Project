import { Component } from "react";

class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props;

    return (
      <>
        <div className="cardContainer" key={id}>
          <img src={`https://robohash.org/${id}?set=set2`} alt={`id-${id}`} />
          <h2>{name}</h2>
          <p>{email} </p>
        </div>
      </>
    );
  }
}
export default CardContainer;
