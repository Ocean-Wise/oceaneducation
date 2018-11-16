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
import Grid from '@material-ui/core/Grid';

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
import CLUB from './graphics/2.png';
import CAMP from './graphics/3.png';
import SLEEP from './graphics/4.png';
import EDU from './graphics/5.png';
import EXP from './graphics/6.png';
import PARTY from './graphics/7.png';
import HEROIMG from './graphics/hero.jpg';

const graphics = [STUDENT, CLUB, CAMP, SLEEP, EDU, EXP, PARTY];

const TITLE = 'Children and Youth';
// const HEROIMG = 'https://ocean.org/wp-content/uploads/CAMP-1.jpg';
const IMG1 = 'https://ocean.org/wp-content/uploads/CY-01.jpg';
const IMG2 = 'https://ocean.org/wp-content/uploads/CY-02.jpg';
const IMG3 = 'https://ocean.org/wp-content/uploads/CY-03.jpg';
const POSTER = 'https://ocean.org/wp-content/uploads/CY-Poster.jpg';

class ChildrenAndYouthEl extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          <NavItem href="https://education.ocean.org/aquacamp">Join Community</NavItem>
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
    const imageWidth = this.state.mobile ? '100%' : '320px';

    const camp = (
      <span>
        <img src={IMG3} alt="Camps & Clubs" />
        <h3>Camps & Clubs</h3>
        <p>Programs embrace nature play, science, art and hands-on experiences to foster a love of our natural world.</p>
        <ButtonLink href="http://www.vanaqua.org/learn/camps" target="_blank">Book Now</ButtonLink>
      </span>
    );

    const sleep = (
      <span>
        <img src={IMG2} alt="Sleepovers" />
        <h3>Sleepovers</h3>
        <p>Participants spend the night at the Vancouver Aquarium and visit the Wet Lab to explore the three corners of the world.</p>
        <ButtonLink href="http://www.vanaqua.org/experience/activities/sleepovers" target="_blank">Book Now</ButtonLink>
      </span>
    );

    const birthday = (
      <span>
        <img src="https://via.placeholder.com/150" alt="Birthday Parties" />
        <h3>Birthday Parties</h3>
        <p>Participants tour the Aquarium with an experienced educator and engage in a multisensory exploration of the BC intertidal zone in our Wet Lab.</p>
        <ButtonLink href="http://www.vanaqua.org/plan/birthdays" target="_blank">Book Now</ButtonLink>
      </span>
    );

    const youth = (
      <span>
        <img src={IMG1} alt="Youth Leadership" />
        <h3>Youth Leadership</h3>
        <p>Participants are immersed in conservation and sustainability workshops led by our educators, experts and scientists. We alse mentor the next generation of ocean champions through work experience volunteer placements each year.</p>
        <ButtonLink href="https://education.ocean.org/youth" target="_blank">Learn More</ButtonLink>
      </span>
    );

    const items = [camp, sleep, birthday, youth];

    const quote = {
      q: "AquaCamps are the best because we learn all about marine life and how to take care of the ocean. I learned that the sea turtle only eats green food like broccoli, spinach and kale. The camp leaders always have exciting games like sea star tag and camouflage. AquaCamps are a lot of fun!",
      attr: "Cole, Age 6 - AquaCamper since 2013"
    };

    // Padding on mobile needs to be lessened
    const Content = (
      <div style={{ flexGrow: 1, margin: '0 auto', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 690, padding: '0 30px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3em', marginBottom: 0 }}>Children and Youth Programs</h1>
          <p style={{ color: '#535353' }}>Children and Youth Programs are immersive ocean education experiences that foster love for our oceans through fun and interactive activities. The team engages over 9,000 children, youth and families in marine science annually.</p>
          <p style={{ color: '#535353' }}>Our team of educators are passionate about inspiring the next generation of young leaders. Our approach is supported by the accepted social science assertions that adults develop concern for the environment based on experiences of awe and wonder as a child.</p>
        </div>
        <ItemGrid items={items} width={this.state.width} />
        <Quote q={quote.q} attr={quote.attr} />
        <ImpactGraphics graphics={graphics} title={'Children & Youth Program'} width={this.state.width} />
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
              onClick={() => { this.toggleDrawer(); window.location = 'https://education.ocean.org/aquacamp'; }}
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

ChildrenAndYouthEl.propTypes = {
};

export default ChildrenAndYouthEl;
