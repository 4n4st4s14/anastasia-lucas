import React, { Component } from "react";
import Navpills from "./Navpills";
import Developer from "./pages/Developer";
import About from "./pages/About";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Developer"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage(){

  if(this.state.currentPage == "About"){
      return <About />
    }else if(this.state.currentPage == "Contact"){
      return <Contact />
    } else if(this.state.currentPage == "Developer"){
          return <Developer />
          }
  }


  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
      {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
