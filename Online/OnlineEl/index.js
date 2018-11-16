/**
*
* Online
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

const TITLE = 'Online Learning';
const HEROIMG = 'https://ocean.org/wp-content/uploads/OL-00.jpg';
const IMG1 = 'https://ocean.org/wp-content/uploads/OL-01.jpg';
const IMG2 = 'https://ocean.org/wp-content/uploads/OL-02.jpg';
const IMG3 = 'https://ocean.org/wp-content/uploads/OL-03.jpg';
const POSTER = 'https://ocean.org/wp-content/uploads/OL-Poster.jpg';

class OnlineEl extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          <NavItem href="http://literacy.ocean.org/">Join Community</NavItem>
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

    const learn = (
      <span>
        <img src={IMG1} alt="Conferencing" />
        <h3>Multilingual Learning Platforms</h3>
        <p>Web resources, quizzes, videos and badges designed to support educators and help develop an understanding of how humans impact the ocean and how the ocean influences us. Available for elementary, middle and secondary schools.</p>
      </span>
    );

    const social = (
      <span>
        <img src={IMG3} alt="Teaching" />
        <h3>Social Learning</h3>
        <p>Our video conferencing and online portals provide a platform for global student conversations on conservation of ocean and aquatic envirenments. Learning from and with each other, we create a forum for meaningful discussion and dialogue.</p>
      </span>
    );

    const virtual = (
      <span>
        <img src={IMG2} alt="Streaming" />
        <h3>Virtual Visits</h3>
        <p>These video conferences enable student-driven experiences with aquarium habitats, live animals, visual props and specimen dissections.</p>
      </span>
    );

    const items = [learn, social, virtual];

    const quote = {
      q: "It was fascinating and I could see that the kids were enthralled. I haven't seen a class yet so engaged and inquisitive.",
      attr: "Connected North Participant"
    };

    const Content = (
      <div style={{ flexGrow: 1, margin: '0 auto', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 690, padding: '0 30px', margin: '0 auto' }}>
          <h1>Online Learning</h1>
          <p>Online Learning is an interactive environment that furthers understanding and connections to the ocean at <a href="http://education.ocean.org/">education.ocean.org</a>. We engage thousands of individuals, helping participants understand ocean literacy by integrating digital resources and user generated content within carefully structured curriculum. The program creates opportunities for students and educators to learn in an authentic, multilingual, social context with their peers throughout the digital world.</p>
          <p>Program content connects to Ocean Wise<sup>&reg;</sup> direct action and research initiatives and advances participants along the conservation continuum.</p>
        </div>
        <ItemGrid items={items} width={this.state.width} />
        <div style={{ height: 1, maxWidth: 1110, backgroundColor: '#D8D8D8', margin: '0 auto 30px' }} />
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '0 25px' }}>
            <ButtonLink href="mailto:onlinelearning@ocean.org" target="_blank" style={{ marginRight: 20 }}>Book Now</ButtonLink>
          </div>
          <Quote q={quote.q} attr={quote.attr} />
          <ImpactGraphics graphics={graphics} title={'Online Learning'} width={this.state.width} />
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
              onClick={() => { this.toggleDrawer(); window.location = 'http://literacy.ocean.org/' }}
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

OnlineEl.propTypes = {
};

export default OnlineEl;
