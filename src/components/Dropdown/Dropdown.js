import React from 'react';
import "./Dropdown.css"


class Dropdown extends React.Component {
  // Задаём значение первоначальное не видно Dropdown
  state = {
      visible: false,
  }

 // Cоздаём на 1 кнопке переключение. условие что toggle оббратное от того что есть

 toggle = () => {this.setState (prevState => ({
  visible: !prevState.visible,
 }))}


  // // Cоздаём на 2 кнопках переключение
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
     {/* Переключатель на 1 кнопке. Когда скрыто - надпись "Показать", когда показывает - надпись скрыть */}
<button type="button" onClick={this.toggle}>{this.state.visible ? "Скрыть" : "Показать"}</button>

 {/* Переключатель на 2 кнопках */}

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