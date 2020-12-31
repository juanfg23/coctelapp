


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );



class Foo extends Component {
    // Nota: esta sintaxis es experimental y todavía no está estandarizada.
    handleClick = () => {
      console.log('Se hizo click');
    }
    render() {
      return <button onClick={this.handleClick}>Clickéame</button>;
    }
  }
  