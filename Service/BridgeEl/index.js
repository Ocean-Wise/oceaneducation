/**
*
* Bridge
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Clear from 'material-ui/svg-icons/content/clear';
import Menu from 'material-ui/svg-icons/navigation/menu';
import grey50 from 'material-ui/styles/colors';
import ModalVideo from 'react-modal-video';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItemMUI from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Header from './Header';
import Footer from '../Footer';
import MenuHeader from './MenuHeader';
import H1 from './H1';
import Ul from './Ul';
import Li from './Li';
import Button from './Button';
import ButtonLink from './ButtonLink';
import InputEmail from './Input';
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

const TITLE = 'Ocean Bridge';
const HEROIMG = 'https://ocean.org/wp-content/uploads/OB-00.jpg';
const IMG1 = 'https://ocean.org/wp-content/uploads/OB-01.jpg';
const IMG2 = 'https://ocean.org/wp-content/uploads/OB-02.jpg';
const IMG3 = 'https://ocean.org/wp-content/uploads/OB-03.jpg';
// const POSTER = 'https://ocean.org/wp-content/uploads/OB-Poster.jpg';

import '../styles/modal-video.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    right: 10,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

function trans(en = true, val) {
  let out;
  switch(val) {
    case 'initiatives':
      out = 'Initiatives';
      break;
    case 'takeAction':
      out = en ? 'Take Action' : 'Passer à L\'action';
      break;
    case 'about':
      out = en ? 'About' : 'Sur';
      break;
    case 'joinCommunity':
      out = en ? 'Join Community' : 'Rejoindre la Communauté';
      break;
    case 'follow':
      out = en ? 'Follow Us' : 'Suivez Nous';
      break;
    case 'newsletter':
      out = en ? 'Get Newsletter' : 'Recevoir la Newsletter';
      break;
    case 'enterEmail':
      out = en ? 'Enter your email' : 'Entrer votre Email';
      break;
    case 'subscribe':
      out = en ? 'Subscribe' : 'Souscrire';
    case 'copy':
      out = '© 2017 Ocean Wise';
      break;
    case 'media':
      out = en ? 'Media' : 'Médias';
      break;
    case 'terms':
      out = en ? 'Terms' : 'Termes';
      break;
    case 'privacy':
      out = en ? 'Privacy' : 'Politique de Confidentialité';
      break;
    case 'enter':
      out = en ? 'Join the Community' : 'Entrer dans la Communauté';
      break;
    case 'intro':
      out = en ? 'Ocean Bridge connects Canadian youth from coast to coast to coast' : 'Portail Océan rapproche les jeunes canadiens d\'un océan à l\'autre';
      break;
    case 'para1':
      out = en ? 'empowering them to make a difference towards ocean conservation. Each year a national team of 40 youth (ages 18-30) form a national team engaged in co-creating and delivering service projects for their home communities and two immersive expeditions to address Ocean Health and Ocean Literacy in Canada.' : ' pour les mobiliser à avoir un impact positif sur nos océans. Chaque année, 40 jeunes (de 18 à 30 ans) formeront une équipe nationale qui réalisera des projets de service dans leurs communautés et participeront à deux expéditions immersives axées sur la santé et la connaissance des océans.';
      break;
    case 'para2':
      out = en ? 'Ocean Bridge is comprised of three key elements to support youth as they adopt a culture of service for our oceans:' : 'Portail Océan comprend 3 éléments clés pour encourager les jeunes au services nos océans:';
      break;
    case 'community':
      out = en ? 'Community & Capacity Building' : 'Développement des communautés et des compétences';
      break;
    case 'communityPara':
      out = en ? 'Regular video conference sessions and an interactive online environment connect youth as a national team and with the broader community of ocean conservation. As individuals, youth build capacity as ocean leaders through weekly mentorship and coaching sessions.' : 'Des rencontres régulières par vidéoconférence et une plateforme interactive en ligne permettront aux jeunes de se connecter à la communauté de conservation des océans. Chaque jeune développera sa capacité comme champion des océans avec des séances hebdomadaire de mentorat et de formation.';
      break;
    case 'oceanHealth':
      out = en ? 'Ocean Health Extended Service' : 'Service prolongé en santé des océans';
      break;
    case 'oceanHealthPara':
      out = en ? 'In spring, youth participate in a 10-day immersive wilderness expedition delivering a marine conservation service project of their design. The national team spends the months leading up to this extended service co-creating their project with the local community and each other. By living, working and reflecting as a team in an iconic natural setting, youth develop social capital, respoct for diversity and a heightened sense of responsibility and pride.' : 'Au printemps, les jeunes feront une expédition d\'immersion en nature de 10 jours. L\'équipe nationale préparera le projet de service en conservation avec la communauté locale avant l\'expédition. En vivant, travaillant et réfléchissant en tant qu\'équipe dans un milieu naturel emblématique, les jeunes développeront un capital social, un respect pour la diversité et un sens accru de responsabilité et de fierté.';
      break;
    case 'oceanLiteracy':
      out = en ? 'Ocean Literacy Extended Service' : 'Service prolongé sur la connaissance des océans';
      break;
    case 'oceanLiteracyPara':
      out = en ? 'This immersive element brings the national team together in the fall at a leading nature connection insitution in one of Canada\'s most populous urban centers. During this 5-day urban expedition, youth deliver education outreach activities created by them to engage their peers in ocean conservation. Youth will share their skills and stories in their words and in ways that are meaningful to them.' : 'En automne, l\'équipe nationale se réunira au coeur d\'un centre urbain canadien. Durant cette expédition urbaine de 5 jours, les jeunes mèneront les activités de sensibilisation pour encourager d\'autres jeunes à s\'engager en conservation des océans. Ils auront ainsi l\'occasion de parler de leurs aptitudes et leurs expériences dans leurs propres mots et d\'une mainère signifiante pour eux.';
      break;
    case 'leadersWanted':
      out = en ? 'Ocean Leaders Wanted!' : 'Les leaders de l\'océan voulaient';
      break;
    case 'trans':
      out = en ? 'Français' : 'English';
      break;
    case 'back':
      out = en ? 'Go Back' : 'Retourner';
      break;
    default:
      out = '';
      break;
  }
  return out;
};

class BridgeEl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerWidth,
      mobile: false,
      tablet: false,
      desk: false,
      open: false,
      vid1Open: false,
      vid2Open: false,
      lang: 'en',
      labelWidth: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.setState({
     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  }

  toggleModal1 = () => {
    this.setState({ vid1Open: !this.state.vid1Open });
  }

  toggleModal2 = () => {
    this.setState({ vid2Open: !this.state.vid2Open });
  }

  toggleLang = () => {
    this.setState({ en: !this.state.en });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width < 813) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false, tablet: false, desk: true });
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
    const { mobile, tablet, desk, lang } = this.state;
    const { classes } = this.props;

    let en = true;
    if (lang !== 'en') en = false;

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
          <NavItem href="https://ocean.org/initiatives/">{trans(en, 'initiatives')}</NavItem>
          <NavItem href="https://ocean.org/take-action/">{trans(en, 'takeAction')}</NavItem>
          <NavItem href="https://ocean.org/about/">{trans(en, 'about')}</NavItem>
          <NavItem href="https://education.ocean.org/oceanbridge">{trans(en, 'joinCommunity')}</NavItem>
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

    const community = (
      <span>
        <img src={IMG3} alt="Community & Capacity Building" />
        <h3>{trans(en, 'community')}</h3>
        <p>{trans(en, 'communityPara')}</p>
      </span>
    );

    const health = (
      <span>
        <img src={IMG2} alt="Ocean Health Extended Service" />
        <h3>{trans(en, 'oceanHealth')}</h3>
        <p>{trans(en, 'oceanHealthPara')}</p>
      </span>
    );

    const literacy = (
      <span>
        <img src={IMG1} alt="Ocean Literacy Extended Service" />
        <h3>{trans(en, 'oceanLiteracy')}</h3>
        <p>{trans(en, 'oceanLiteracyPara')}</p>
      </span>
    );

    const items = [community, health, literacy];

    const quote = {
      q: "Visiting Haida Gwaii with Ocean Bridge opened my eyes to a new world of service learning opportunities... I have never met so many individuals in one place with whon I've shored so many interests, and I am so thankful to have their support and be motivated by their passions to persue further education in the environmental field and focus more time on implementing service projects in my community.",
      attr: "Hannah Kosick, Ocean Bridge 2018"
    };

    const Content = (
      <div style={{ flexGrow: 1, margin: '0 auto', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <form className={classes.root} autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-lang-simple"
            >
              Lang
            </InputLabel>
            <Select
              value={this.state.lang}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="lang"
                  id="outlined-lang-simple"
                />
              }
            >
              <MenuItemMUI value={'en'}>English</MenuItemMUI>
              <MenuItemMUI value={'fr'}>Français</MenuItemMUI>
            </Select>
          </FormControl>
        </form>
        <div style={{ maxWidth: 690, padding: '0 30px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3em', marginBottom: 0 }}>Ocean Bridge</h1>
          <p style={{ color: '#535353' }}>{trans(en, 'para1')}</p>
          <p style={{ color: '#535353' }}>{trans(en, 'para2')}</p>
        </div>
        <ItemGrid items={items} width={this.state.width} />
        <div style={{ height: 1, maxWidth: 1110, backgroundColor: '#D8D8D8', margin: '30px auto' }} />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '0 25px' }}>
          <ButtonLink href="https://education.ocean.org/oceanbridge" target="_blank" style={{ marginRight: 20 }}>{trans(en, 'enter')}</ButtonLink>
          <ModalVideo channel="youtube" isOpen={this.state.vid2Open} videoId="crCMygsLYps" onClose={this.toggleModal2} />
          <ButtonLink onClick={this.toggleModal1}>{trans(en, 'leadersWanted')}</ButtonLink>
        </div>
        <Quote q={quote.q} attr={quote.attr} bridge />
      </div>
    );

    return (
      <MuiThemeProvider>
        <div>
          <Container height={containerHeight}>
            <Img id="hero-image" src={HEROIMG} alt="Ocean wise" />
            <Logo src={source} alt="Logo" />
            {Nav}
            <ModalVideo channel="youtube" isOpen={this.state.vid1Open} videoId="mVAnUPvWQLs" onClose={this.toggleModal1} />
            <VidButton onClick={this.toggleModal2}>
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
              {trans(en, 'takeAction')}
            </MenuItem>
            <MenuItem
              onClick={() => { this.toggleDrawer(); window.location = 'https://ocean.org/initiatives'; }}
              style={{ color: 'white' }}
            >
              {trans(en, 'initiatives')}
            </MenuItem>
            <MenuItem
              onClick={() => { this.toggleDrawer(); window.location = 'https://ocean.org/about'; }}
              style={{ color: 'white' }}
            >
              {trans(en, 'about')}
            </MenuItem>
            <MenuItem
              onClick={() => { this.toggleDrawer(); window.location = 'https://education.ocean.org/oceanbridge'; }}
              style={{ color: 'white' }}
            >
              {trans(en, 'joinCommunity')}
            </MenuItem>

            <MenuHeader pad>{trans(en, 'follow')}</MenuHeader>
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

            <MenuHeader>{trans(en, 'newsletter')}</MenuHeader>
            <form action="https://vanaqua.createsend.com/t/r/s/urxdtd/" method="post">
              <label><span>{trans(en, 'enterEmail')}</span>
              <InputEmail type="email" placeholder={trans(en, 'enterEmail')} name="cm-urxdtd-urxdtd" required="" /></label>
              <Button>{trans(en, 'subscribe')}</Button>
            </form>

            <MenuHeader style={{ marginTop: 25 }}>{trans(en, 'copy')}</MenuHeader>
            <Ul>
              <Li><A href="https://ocean.org/media-releases/">{trans(en, 'media')}</A></Li>
              <Li><A href="https://ocean.org/terms-conditions/">{trans(en, 'terms')}</A></Li>
              <Li><A href="https://ocean.org/privacy-policy/">{trans(en, 'privacy')}</A></Li>
            </Ul>

          </Drawer>
          {Content}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

BridgeEl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BridgeEl);
