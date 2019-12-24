import React, { Component } from "react";
import TechItem from "../techItem"

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.JS", "React.JS", "React Native", "Javascript"]
  };
  // armazenando os dados do input
  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };
// controlando stado imutavel criando novo estado e adicionando novos items
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }
// ação de remover tecnoloia filtrando o valor diferente 
  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem 
                tech={tech} 
                key={tech} 
                onDelete={() => this.handleDelete(tech)}/>
            ))}
          </ul>
          <input
            type="text"
            name=""
            id=""
            value={this.state.newTech}
            onChange={this.handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}
export default TechList;
