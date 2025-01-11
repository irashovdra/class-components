import { Component } from "react";

export class Counter extends Component {
  state = {
    number: 0,
  };

  increament = () => {
    // this.state.number = this.state.number + 1;
    // this.state.number += 1; ТАК ПРАЦЮВАТИ НЕ БУДЕ,
    // ДЛЯ ЗМІНИ STATE Є СПЕЦІАЛЬНИЙ МЕТОД setState()
    // this.setState({
    //   number: 1, ТАКИЙ ПІДХІД ЗМІНИ STATE ПРОСТО
    // ЗАМІНИТЬ ЗНАЧЕННЯ НА 1
    // });
    // А НАМ ПОТРІБНО ДО ПОПЕРЕДНЬОГО ЗНАЧЕННЯ NUMBER
    // ДОДАТИ 1, ТА РЕЗУЛЬТАТ ЗАПИСАТИ У NUMBER
    this.setState((prevNumber) => ({
      number: prevNumber.number + 1,
    }));
    return this.state.number;
  };

  decreament = () => {
    // this.setState({
    //   number: 0,
    // });
    // return this.state.number;
    this.setState((prevNumber) => ({
      number: prevNumber.number - 1,
    }));
    return this.state.number;
  };

  render() {
    console.log(this.props);
    return (
      <>
        <h3>{this.props.text}</h3>
        <p>{this.state.number}</p>
        <button onClick={this.increament}>Add 1</button>
        <button onClick={this.decreament}>Minus 1</button>
      </>
    );
  }
}
