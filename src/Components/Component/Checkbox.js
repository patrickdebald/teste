import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/Checkbox';

class Tabela extends Component {
  state = {
    checked: true
  };

   

  onChange(ev) {
    this.setState({checked: ev.target.checked});
  }

  render() {
    return (
      <Checkbox
        label="Click me"
        checked={this.state.checked}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}
export default Example;