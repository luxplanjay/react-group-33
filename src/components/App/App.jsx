import { Component } from 'react';
import ReactPlayer from 'react-player';
// import { FaTrash } from 'react-icons/fa';
// import { Collapsible } from 'components/Collapsible/Collapsible';
import { Container } from './App.styled';
// import { Tooltip } from 'components/Tooltip/Tooltip';
// import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
// import { DropdownMenuItem } from 'components/DropdownMenu/DropdownMenuItem';
import { VideoList } from 'components/VideoList/VideoList';
import videos from '../../videos.json';

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <Container>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />

        {selectedVideo && <ReactPlayer url={selectedVideo} />}

        {/* <DropdownMenu>
          <DropdownMenuItem onSelect={() => alert('Delete')}>
            <FaTrash size={16} color="blue" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Edit')}>Edit</DropdownMenuItem>
        </DropdownMenu> */}

        {/* <Tooltip label="TOOOOOOOOOOLTIP">
          <button>Hello</button>
        </Tooltip>
        <Tooltip label="Collapsible tooltip">
          <span>
            <FaAddressBook size={40} color="orange" />
          </span>
        </Tooltip>

        <Collapsible>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae placeat, omnis
            officia minima quia ea cum impedit non nostrum! Beatae sint unde facere delectus voluptas
            tenetur similique explicabo iusto?
          </div>
        </Collapsible> */}
      </Container>
    );
  }
}
