import React, { Component } from 'react';
import { ReactReader } from 'react-reader';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import { Container, ReaderContainer, FontSizeButton } from './Components';

const storage = global.localStorage || null;

const DEMO_URL =
  'https://gerhardsletten.github.io/react-reader/files/alice.epub';
const DEMO_NAME = 'Alice in wonderland';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location:
        storage && storage.getItem('epub-location')
          ? storage.getItem('epub-location')
          : 2,
      localName: null,
      largeText: false,
    };
    this.rendition = null;
  }

  onLocationChanged = (location) => {
    this.setState(
      {
        location,
      },
      () => {
        storage && storage.setItem('epub-location', location);
      }
    );
  };

  onToggleFontSize = () => {
    const nextState = !this.state.largeText;
    this.setState(
      {
        largeText: nextState,
      },
      () => {
        this.rendition.themes.fontSize(nextState ? '140%' : '100%');
      }
    );
  };

  getRendition = (rendition) => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? '140%' : '100%');
  };

  render() {
    const { location, localName } = this.state;
    return (
      <Container>
        <ReaderContainer>
          <ReactReader
            url={DEMO_URL}
            title={localName || DEMO_NAME}
            location={location}
            locationChanged={this.onLocationChanged}
            getRendition={this.getRendition}
          />
          <FontSizeButton onClick={this.onToggleFontSize}>
            <FormatSizeIcon />
          </FontSizeButton>
        </ReaderContainer>
      </Container>
    );
  }
}

export default Reader;
