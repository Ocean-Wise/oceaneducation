/**
*
* Public
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Clear from 'material-ui/svg-icons/content/clear';
import Menu from 'material-ui/svg-icons/navigation/menu';
import grey50 from 'material-ui/styles/colors';

import Header from './Header';
import Footer from '../Footer';
import MenuHeader from './MenuHeader';
import H1 from './H1';
import Ul from './Ul';
import Li from './Li';
import Button from './Button';
import Input from './Input';
import A from './A';
import IconButton from './IconButton';
import MenuItem from './MenuItem';
import Container from './Container';
import NavItem from './NavItem';
import Img from './Img';
import Logo from './Logo';
import Blockquote from './Blockquote';
import ButtonLink from './ButtonLink';
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

const TITLE = 'Community Education';
const HEROIMG = 'https://ocean.org/wp-content/uploads/PP-00.jpg';
const IMG1 = 'https://ocean.org/wp-content/uploads/PP-01.jpg';
const IMG2 = 'https://ocean.org/wp-content/uploads/PP-02.jpg';
const IMG3 = 'https://ocean.org/wp-content/uploads/PP-03.jpg';
const POSTER = 'https://ocean.org/wp-content/uploads/PP-Poster.jpg';

class PublicEl extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          <NavItem href="https://education.ocean.org/oceanmatters">Join Community</NavItem>
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

    // <div style={{ fontFamily: '\'Helvetice Neue\', helvetica, arial, sans-serif', padding: '15px 40px', display: 'flex', flexDirection: flexDir }}>
    //   <div style={{ marginRight: window.innerWidth > 768 ? 50 : 0 }}>
    //     <p>P</p>
    //     <h4 style={{ textTransform: 'uppercase', color: '#39395a' }}>These include:</h4>
    //     <p>
    //       <span style={{ fontWeight: 700, color: '#39395a' }}>Film Forum</span> |
    //     </p>
    //     <p>
    //       <span style={{ fontWeight: 700, color: '#39395a' }}>Monthly Lecture</span> |
    //     </p>
    //     <p>
    //       <span style={{ fontWeight: 700, color: '#39395a' }}></span> |
    //     </p>
    //     <p>
    //       <span style={{ fontWeight: 700, color: '#39395a' }}></span> |
    //     </p>
    //     <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    //       <ButtonLink href="" target="_blank">Contact Us</ButtonLink>
    //       <ButtonLink href="" target="_blank">Get Involved</ButtonLink>
    //     </div>
    //   </div>
    //   <div style={{ display: 'flex', flexDirection: 'column' }}>
    //     <img style={{ margin: '5px auto', width: 350 }} src={IMG1} alt="Diving" />
    //     <img style={{ margin: '5px auto', width: 350 }} src={IMG2} alt="Lecturing" />
    //     <img style={{ margin: '5px auto', width: 350 }} src={IMG3} alt="Presenting" />
    //   </div>
    // </div>
    // <div style={{ display: 'flex', flexDirection: 'column' }}>
    //   <Blockquote>
    //
    //     <span></span>
    //   </Blockquote>
    // </div>
    // {graphics}
    // {mobileGraphics}

    const film = (
      <span>
        <img src="https://via.placeholder.com/150" alt="Film Forum" />
        <h3>Film Forum</h3>
        <p>A Global Initiative: Each public event features an ocean-theme documentary movie, followed by a discussion with experts. These events take place at the Vancouver Aquarium and in partner institutions around the globe.</p>
      </span>
    );

    const lecture = (
      <span>
        <img src={IMG2} alt="Lecturing" />
        <h3>Monthly Lecture</h3>
        <p>This monthly lecture series delivers perspectives on our oceans and climate change. They explore how all facets of modern society are affected by our changing environment.</p>
      </span>
    );

    const nature = (
      <span>
        <img src={IMG3} alt="Presenting" />
        <h3>Nature Café</h3>
        <p>These informal workshops and discussions explore anything and everything to do with our oceans, sustainability and the natural world.</p>
      </span>
    );

    const science = (
      <span>
        <img src={IMG1} alt="Diving" />
        <h3>Science Socials</h3>
        <p>These social occasions are fun, science-themed events such as trivia, discussion groups, or storytelling evenings.</p>
      </span>
    );

    const items = [film, lecture, nature, science];

    const quote = {
      q: "This event was excellent. I enjoyed the diversity of the experts and depth of their knowledge in their particular field of research and work",
      attr: "Hazel, Student"
    };

    const Content = (
      <div style={{ flexGrow: 1, margin: '0 auto', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 690, padding: '0 30px', margin: '0 auto' }}>
          <h1>Community Education</h1>
          <p>Public Programs are gateways to the ocean conservation community. They enable interactive dialog and discovery. We offer individuals opportunities to further their knowledge and explore their curiosity of the ocean and science.</p>
        </div>
        <ItemGrid items={items} width={this.state.width} />
        <div style={{ height: 1, maxWidth: 1110, backgroundColor: '#D8D8D8', margin: '0 auto 30px' }} />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '0 25px' }}>
          <ButtonLink href="https://education.ocean.org/oceanmatters/contact" target="_blank" style={{ marginRight: 20 }}>Contact Us</ButtonLink>
          <ButtonLink href="https://education.ocean.org/oceanmatters" target="_blank" style={{ marginRight: 20 }}>Get Involved</ButtonLink>
        </div>
        <Quote q={quote.q} attr={quote.attr} />
        <ImpactGraphics graphics={graphics} title={'Community Education'} width={this.state.width} />
      </div>
    );

    return (
      <MuiThemeProvider>
        <div>
          <Container height={containerHeight} image={HEROIMG}>
            <a href="https://ocean.org/" style={{ position: 'absolute', zIndex: 50, top: 15, left: window.innerWidth > 812 ? 20 : '-27px' }}><Logo src={source} alt="Logo" /></a>
            {Nav}
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
              onClick={() => { this.toggleDrawer(); window.location = 'https://education.ocean.org/oceanmatters'; }}
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

PublicEl.propTypes = {
};

export default PublicEl;
