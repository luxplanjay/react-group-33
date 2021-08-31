import { Component } from 'react';
import { Container, Button } from './Collapsible.styled';

export class Collapsible extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <Container>
        <Button type="button" onClick={this.toggle}>
          {isOpen ? 'Закрыть' : 'Показать'}
        </Button>
        {isOpen && children}
      </Container>
    );
  }
}
