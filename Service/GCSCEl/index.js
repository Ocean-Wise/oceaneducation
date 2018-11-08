/**
*
* GCSC
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Clear from 'material-ui/svg-icons/content/clear';
import Menu from 'material-ui/svg-icons/navigation/menu';
import grey50 from 'material-ui/styles/colors';
import ModalVideo from 'react-modal-video';

import Header from './Header';
import Footer from '../Footer';
import MenuHeader from './MenuHeader';
import H1 from './H1';
import Ul from './Ul';
import Li from './Li';
import Button from './Button';
import ButtonLink from './ButtonLink';
import Input from './Input';
import A from './A';
import IconButton from './IconButton';
import MenuItem from './MenuItem';
import Container from './Container';
import NavItem from './NavItem';
import Img from './Img';
import Logo from './Logo';
import Blockquote from './Blockquote';
import Thumbnail from './Thumbnail';
import VidButton from './VidButton';
import playIcon from './play.svg';

import G1 from './graphics/1.png';
import G2 from './graphics/2.png';
import G3 from './graphics/3.png';
import G4 from './graphics/4.png';
import G5 from './graphics/5.png';
import G6 from './graphics/6.png';
import G7 from './graphics/7.png';

const TITLE = 'Great Canadian Shoreline Cleanup';
const HEROIMG = 'https://ocean.org/wp-content/uploads/GCSC-00.jpg';
const IMG1 = 'https://ocean.org/wp-content/uploads/GCSC-01.jpg';
const IMG2 = 'https://ocean.org/wp-content/uploads/GCSC-02.jpg';
const IMG3 = 'https://ocean.org/wp-content/uploads/GCSC-03.jpg';
const POSTER = 'https://ocean.org/wp-content/uploads/GCSC-Poster.jpg';

import '../styles/modal-video.css';

class GCSCEl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerWidth,
      mobile: false,
      mobileGraphics: false,
      tablet: false,
      desk: false,
      open: false,
      vidOpen: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  }

  toggleModal = () => {
    this.setState({ vidOpen: !this.state.vidOpen });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width < 813) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false, tablet: false, desk: true });
    }
    if (this.state.width < 1300) {
      this.setState({ mobileGraphics: true });
    } else {
      this.setState({ mobileGraphics: false });
    }
  }

  /**
   *
   * Clamp restrains a number between the passed minimum and maximum values
   *
   **/
  clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
  }

  render() {
    const { mobile, tablet, desk } = this.state;

    const source = this.state.mobile ? 'https://ocean.org/wp-content/uploads/af57071c6f37d38d5c97dbd861dffa68.svg' : 'https://ocean.org/wp-content/uploads/5429d577a15cbaa4c286951cd4e772ff.svg';

    let Nav;
    let exitTop;
    let exitRight;
    if (this.state.mobile) {
      Nav = (
        <nav style={{ position: 'absolute', right: 10, top: 10, zIndex: 10 }}>
          <IconButton style={{ padding: 0 }} onClick={() => this.toggleDrawer()}>
            <Menu style={{ height: 34, width: 34 }} color="#fff" />
          </IconButton>
        </nav>
      );

      exitTop = 10;
      exitRight = 10;
    } else {
      Nav = (
        <nav style={{ position: 'absolute', right: 15, top: 30, zIndex: 10 }}>
          <NavItem href="https://ocean.org/initiatives/">Initiatives</NavItem>
          <NavItem href="https://ocean.org/take-action/">Take Action</NavItem>
          <NavItem href="https://ocean.org/about/">About</NavItem>
          <NavItem href="https://education.ocean.org/shoreline">Join Community</NavItem>
          <IconButton style={{ padding: 0, top: 9 }} onClick={() => this.toggleDrawer()}>
            <Menu style={{ height: 34, width: 34 }} color="#fff" />
          </IconButton>
        </nav>
      );

      exitTop = 40;
      exitRight = 15;
    }

    const graphics = this.state.mobileGraphics ? '' : (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G1} alt="Students" style={{ width: '410px', height: '150px', marginTop: 10 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G2} alt="Camps" style={{ width: '280px', height: '150px', marginTop: 20 }} />
          <img src={G3} alt="Clubs" style={{ width: '280px', height: '150px', marginTop: 20 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G4} alt="Education" style={{ width: '280px', height: '150px', marginTop: 20 }} />
          <img src={G5} alt="Sleepovers" style={{ width: '280px', height: '150px', marginTop: 20 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G6} alt="Parties" style={{ width: '280px', height: '150px', marginTop: 20 }} />
          <img src={G7} alt="Placements" style={{ width: '280px', height: '150px', marginTop: 20 }} />
        </div>
      </div>
    );

    const mobileGraphics = this.state.mobileGraphics ? (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G1} alt="Students" style={{ width: '410px', height: '150px', marginTop: 10 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G2} alt="Camps" style={{ width: '280px', height: '150px', marginTop: 20 }} />
          <img src={G3} alt="Clubs" style={{ width: '280px', height: '150px', marginTop: 20 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G4} alt="Education" style={{ width: '280px', height: '150px', marginTop: 20 }} />
          <img src={G5} alt="Sleepovers" style={{ width: '280px', height: '150px', marginTop: 20 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={G6} alt="Parties" style={{ width: '280px', height: '150px', marginTop: 20 }} />
          <img src={G7} alt="Placements" style={{ width: '280px', height: '150px', marginTop: 20 }} />
        </div>
      </div>
    ) : '';

    const containerHeight = document.getElementById('hero-image') === null ? 500 : this.clamp(document.getElementById('hero-image').height, 0, 500) === 0 ? 500 : this.clamp(document.getElementById('hero-image').height, 0, 500);

    const flexDir = this.state.mobile ? 'column' : 'row';
    const imageWidth = this.state.mobile ? '100%' : '350px';

    return (
      <MuiThemeProvider>
        <div>
          <Container height={containerHeight}>
            <Img id="hero-image" src={HEROIMG} alt="Ocean wise" />
            <Logo src={source} alt="Logo" />
            {Nav}
            <Header>
              <H1>{TITLE}</H1>
            </Header>
          </Container>
          <Drawer
            openSecondary
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
            width={this.state.mobile ? 225 : 650}
            docked={false}
            containerStyle={{ backgroundColor: 'black' }}
          >
            <IconButton style={{ float: 'right', color: 'white', padding: 0, top: exitTop, right: exitRight }} onClick={() => this.toggleDrawer()}>
              <Clear style={{ height: 34, width: 34 }} color="#fff" />
            </IconButton>
            <MenuItem
              onClick={() => { this.toggleDrawer(); window.location = 'https://ocean.org/take-action/'; }}
              style={{ color: 'white' }}
            >
              Take Action
            </MenuItem>
            <MenuItem
              onClick={() => { this.toggleDrawer(); window.location = 'https://ocean.org/initiatives'; }}
              style={{ color: 'white' }}
            >
              Initiatives
            </MenuItem>
            <MenuItem
              onClick={() => { this.toggleDrawer(); window.location = 'https://ocean.org/about'; }}
              style={{ color: 'white' }}
            >
              About
            </MenuItem>
            <MenuItem
              onClick={() => { this.toggleDrawer(); window.location = 'https://education.ocean.org/shoreline'; }}
              style={{ color: 'white' }}
            >
              Join Community
            </MenuItem>

            <MenuHeader pad>Follow Us</MenuHeader>
            <Ul>
              <Li>
                <a href="http://www.facebook.com/pages/Ocean-Wise/110729392295180">
                  <img src="https://ocean.org/wp-content/uploads/facebook.svg" alt="Facebook" />
                </a>
              </Li>
              <Li>
                <a href="https://twitter.com/Oceanwise">
                  <img src="https://ocean.org/wp-content/uploads/twitter.svg" alt="Twitter" />
                </a>
              </Li>
              <Li>
                <a href="https://www.instagram.com/oceanwise/">
                  <img src="https://ocean.org/wp-content/uploads/instagram.svg" alt="Instagram" />
                </a>
              </Li>
              <Li>
                <a href="https://www.youtube.com/channel/UC0hLWXESQRctgaVPT-8N7Rw">
                  <img src="https://ocean.org/wp-content/uploads/youtube.svg" alt="Youtube" />
                </a>
              </Li>
              <Li>
                <a href="https://www.snapchat.com/add/oceanwise">
                  <img src="https://ocean.org/wp-content/uploads/snapchat.svg" alt="Snapchat" />
                </a>
              </Li>
            </Ul>

            <MenuHeader>Get Newsletter</MenuHeader>
            <form action="https://vanaqua.createsend.com/t/r/s/urxdtd/" method="post">
              <label><span>Enter your email</span>
              <Input type="email" placeholder="Enter your email" name="cm-urxdtd-urxdtd" required="" /></label>
              <Button>Subscribe</Button>
            </form>

            <MenuHeader style={{ marginTop: 25 }}>© 2017 Ocean Wise</MenuHeader>
            <Ul>
              <Li><A href="https://ocean.org/media-releases/">Media</A></Li>
              <Li><A href="https://ocean.org/terms-conditions/">Terms</A></Li>
              <Li><A href="https://ocean.org/privacy-policy/">Privacy</A></Li>
            </Ul>
          </Drawer>
          <div style={{ fontFamily: '\'Helvetice Neue\', helvetica, arial, sans-serif', padding: '15px 40px', display: 'flex', flexDirection: flexDir }}>
            <div>
              <ButtonLink href="https://education.ocean.org/pages/GCSC.html">Go Back</ButtonLink>
              <p style={{ paddingRight: 20 }}>The Great Canadian Shoreline Cleanup<sup>&reg;</sup> is a joint program of Ocean Wise<sup>&reg;</sup> and WWF-Canada that aims to build an understanding of ocean literacy by engaging Canadians to care for their shorelines. As one of Canada's largest volunteer-powered conservation programs, we engage with tens of thousands of people including:</p>
              <p style={{ paddingRight: 20 }}>
                <span style={{ fontWeight: 700, color: '#39395a' }}>Schools & Youth</span> | A service learning opportunity for students of all ages, to build a connection to nature and play an important role in ocean health through citizen science. Resources to extend learning beyond the shoreline are provided to support teachers and group leaders.
              </p>
              <p style={{ paddingRight: 20 }}>
                <span style={{ fontWeight: 700, color: '#39395a' }}>Workplace</span> | This program supports corporate social responsibility (CSR) and employee engagement. Organizations looking for meaningful activities in their community can lead cleanups that their teams, customers and partners can participate in.
              </p>
              <p style={{ paddingRight: 20 }}>
                <span style={{ fontWeight: 700, color: '#39395a' }}>Community</span> | We support volunteers in every province and territory all year long and anywhere that land connects to water, with the goal of keeping Canadian shorelines healthy and clean.
              </p>
              <p><ButtonLink href="https://education.ocean.org/shoreline" target="_blank">Visit Shoreline Cleanup Community</ButtonLink></p>
              <Blockquote>
                It was such an fun and innovative way to do a park cleanup while participating in a citizen science project and learning about pollution in our water ways.
                <span>Holly, Site Coordinator, St. John's Newfoundland and Labrador</span>
              </Blockquote>
              {graphics}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ModalVideo channel="youtube" isOpen={this.state.vidOpen} videoId="7ykQq_KwwcI" onClose={this.toggleModal} />
              <Thumbnail onClick={this.toggleModal}>
                <img style={{ margin: '5px auto', width: 350 }} src={IMG1} alt="Garbage" />
                <VidButton>
                  <img src={playIcon} alt="Play" width={18} style={{ marginLeft: 5 }} />
                </VidButton>
              </Thumbnail>
              <img style={{ margin: '5px auto', width: 350 }} src={IMG2} alt="Plastic" />
              <img style={{ margin: '5px auto', width: 350 }} src={IMG3} alt="Teamwork" />
            </div>
          </div>
          {mobileGraphics}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

GCSCEl.propTypes = {
};

export default GCSCEl;