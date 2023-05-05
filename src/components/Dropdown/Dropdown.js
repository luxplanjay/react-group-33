import React from 'react';
import "./Dropdown.css"


class Dropdown extends React.Component {
  // Задаём значение первоначальное не видно Dropdown
  state = {
      visible: false,
  }
  // При нажатии менять будем Dropdown на видно
  show = () => {
      this.setState({visible: true})
  }
  // При нажатии менять будем Dropdown Не на видно
  hide = () => {
      this.setState({visible: false})
  }

  render() {
    return (
      <div className="Dropdown">
        <button type="button" onClick={this.show}>Показать Dropdown</button>
        <button type="button" onClick={this.hide}>Скрыть Dropdown</button>
        {this.state.visible && (
          <div style={{ border: '1px solid black', padding: '16px' }}>
            Тело Dropdown 
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;