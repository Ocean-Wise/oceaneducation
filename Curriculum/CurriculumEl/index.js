/**
*
* Curriculum
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
import ItemGrid from '../ItemGrid';
import Quote from '../Quote';
import ImpactGraphics from '../ImpactGraphics';

import STUDENT from './graphics/1.png';
import PROGRAMS from './graphics/2.png';
import CONNECTED from './graphics/3.png';
import SUPPORTING from './graphics/4.png';
import EXP from './graphics/5.png';
import BENNET from './graphics/6.png';
import FRENCH from './graphics/7.png';

const graphics = [STUDENT, PROGRAMS, CONNECTED, SUPPORTING, EXP, BENNET, FRENCH];

const TITLE = 'Curriculum Programs';
const HEROIMG = 'https://ocean.org/wp-content/uploads/CP-00.jpg';
const IMG1 = 'https://ocean.org/wp-content/uploads/CP-01.jpg';
const IMG2 = 'https://ocean.org/wp-content/uploads/CP-02.jpg';
const IMG3 = 'https://ocean.org/wp-content/uploads/CP-03.jpg';
const POSTER = 'https://ocean.org/wp-content/uploads/CP-Poster.jpg';

class CurriculumEl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerWidth,
      mobile: false,
      tablet: false,
      mobileGraphics: false,
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
          <NavItem href="https://education.ocean.org/members/login.html?pushpath=education.ocean.org/homelearners">Join Community</NavItem>
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

    const lab = (
      <span>
        <img src={IMG2} alt="Learning" />
        <h3>Aquaquest Learning Labs and Classrooms</h3>
        <p>These workshops advance ocean literacy with students. They create an appreciation of ocean health, as well as personal connections with marine life and their ecosystems.</p>
        <ButtonLink href="http://www.vanaqua.org/learn/schools/programs/4-7/wetlab-community" target="_blank">Book Now</ButtonLink>
      </span>
    );

    const vaExp = (
      <span>
        <img src={IMG1} alt="Investigating" />
        <h3>Vancouver Aquarium Experience</h3>
        <p>Guided tours through the aquarium connect students to global ecosystems and establish a sense of place in their communities.</p>
      <ButtonLink href="http://www.vanaqua.org/learn/schools" target="_blank">Book Now</ButtonLink>
      </span>
    );

    const coastal = (
      <span>
        <img src={IMG3} alt="Exploring" />
        <h3>Coastal Ecosystems</h3>
        <p>These are outdoor, hands-on introduction to the skills and tools that marine scientists use on a daily basis. Students explore how scientific investigation can play a major role in preserving marine life, and how our actions have an impact on the world around us.</p>
        <ButtonLink href="http://www.vanaqua.org/learn/summer-programs/coastal-connections" target="_blank">Book Now</ButtonLink>
      </span>
    );

    const items = [lab, vaExp, coastal];

    const quote = {
      q: "We are starting inquiry projects next week that study our global impact... particularly the ocean. And it all started from that field trip to the Aquarium!",
      attr: "Teacher, Maillard Middle School"
    };

    const Content = (
      <div style={{ flexGrow: 1, margin: '0 auto', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 690, padding: '0 30px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3em', marginBottom: 0 }}>Curriculum Programs</h1>
          <p style={{ color: '#535353' }}>Curriculum Programs deliver multi-sensory workshops to students of all ages. We engage over 20.000 students per year in inquiry-based learning, led by a group of professional educators and biologists.</p>
          <p style={{ color: '#535353' }}>Our content connects to the Ocean Wise<sup>&reg;</sup> direct action and research initiatives and advance participants along the conservation continuum. Our programs are aligned with the British Columbia provincial curriculum.</p>
        </div>
        <ItemGrid items={items} width={this.state.width} />
        <Quote q={quote.q} attr={quote.attr} />
        <ImpactGraphics graphics={graphics} title={'Curriculum Programs'} width={this.state.width} />
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
              onClick={() => { this.toggleDrawer(); window.location = 'https://education.ocean.org/members/login.html?pushpath=education.ocean.org/homelearners'; }}
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

CurriculumEl.propTypes = {
};

export default CurriculumEl;
