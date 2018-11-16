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
import ItemGrid from '../ItemGrid';
import Quote from '../Quote';
import ImpactGraphics from '../ImpactGraphics';

import G1 from './graphics/1.png';
import G2 from './graphics/2.png';
import G3 from './graphics/3.png';
import G4 from './graphics/4.png';
import G5 from './graphics/5.png';
import G6 from './graphics/6.png';
import G7 from './graphics/7.png';

const graphics = [G1, G2, G3, G4, G5, G6, G7];

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

    const containerHeight = document.getElementById('hero-image') === null ? 500 : this.clamp(document.getElementById('hero-image').height, 0, 500) === 0 ? 500 : this.clamp(document.getElementById('hero-image').height, 0, 500);

    const flexDir = this.state.mobile ? 'column' : 'row';
    const imageWidth = this.state.mobile ? '100%' : '350px';

    const school = (
      <span>
        <img src={IMG1} alt="Schools & Youth" />
        <h3>Schools & Youth</h3>
        <p>A service learning opportunity for students of all ages, to build a connection to nature and play an important role in ocean health through citizen science. Resources to extend learning beyond the shoreline are provided to support teachers and group leaders.</p>
      </span>
    );

    const work = (
      <span>
        <img src={IMG2} alt="Workplace" />
        <h3>Workplace</h3>
        <p>This program supports corporate social responsibility (CSR) and employee engagement. Organizations looking for meaningful activities in their community can lead cleanups that their teams, customers and partners can participate in.</p>
      </span>
    );

    const community = (
      <span>
        <img src={IMG3} alt="Community" />
        <h3>Community</h3>
        <p>We support volunteers in every province and territory all year long and anywhere that land connects to water, with the goal of keeping Canadian shorelines healthy and clean.</p>
      </span>
    );

    const items = [school, work, community];

    const quote = {
      q: "It was such an fun and innovative way to do a park cleanup while participating in a citizen science project and learning about pollution in our water ways.",
      attr: "Holly, Site Coordinator, St. John's Newfoundland and Labrador"
    };

    const Content = (
      <div style={{ flexGrow: 1, margin: '0 auto', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 690, padding: '0 30px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3em', marginBottom: 0 }}>Shoreline Cleanup</h1>
          <p style={{ color: '#535353' }}>The Great Canadian Shoreline Cleanup<sup>&reg;</sup> is a joint program of Ocean Wise<sup>&reg;</sup> and WWF-Canada that aims to build an understanding of ocean literacy by engaging Canadians to care for their shorelines. As one of Canada's largest volunteer-powered conservation programs, we engage with tens of thousands of people including:</p>
        </div>
        <ItemGrid items={items} width={this.state.width} />
        <div style={{ height: 1, maxWidth: 1110, backgroundColor: '#D8D8D8', margin: '30px auto' }} />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '0 25px' }}>
          <ButtonLink href="https://education.ocean.org/shoreline" target="_blank" style={{ marginRight: 20 }}>Find Out More</ButtonLink>
          <p>Or join a cleanup in your neighbourhood at <a href="https://shorelinecleanup.ca/" target="_blank">ShorelineCleanup.ca</a></p>
        </div>
        <Quote q={quote.q} attr={quote.attr} />
        <ImpactGraphics graphics={graphics} title={'Shoreline Cleanup'} width={this.state.width} />
      </div>
    );

    return (
      <MuiThemeProvider>
        <div>
          <Container height={containerHeight}>
            <Img id="hero-image" src={HEROIMG} alt="Ocean wise" />
            <Logo src={source} alt="Logo" />
            {Nav}
            <ModalVideo channel="youtube" isOpen={this.state.vidOpen} videoId="7ykQq_KwwcI" onClose={this.toggleModal} />
            <VidButton onClick={this.toggleModal}>
              <img src={playIcon} alt="Play" width={18} style={{ marginLeft: 5 }} />
            </VidButton>
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
          {Content}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

GCSCEl.propTypes = {
};

export default GCSCEl;
