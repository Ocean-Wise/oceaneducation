/**
*
* ChildrenAndYouth
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import H1 from './H1';
import Ul from './Ul';
import Li from './Li';
import Button from './Button';
import Input from './Input';
import A from './A';
import Social from './Social';
import Animate1 from './Animate1';
import Animate2 from './Animate2';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerWidth,
      mobile: false,
      tablet: false,
      desk: false,
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

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width < 813) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false, tablet: false, desk: true });
    }
  }

  render() {
    const { mobile, tablet, desk } = this.state;

    const divider = !this.state.mobile ? <div style={{ borderRight: '1px solid white', height: 170, marginTop: 15 }}></div> : '';
    const flexDir = this.state.mobile ? 'column' : 'row';
    const theWidth = this.state.mobile ? 'unset' : 600;
    const secondStyle = this.state.mobile ? { paddingLeft: 20, marginTop: 50 } : { paddingLeft: 20, width: 440 };

    return (
      <footer class="content-info" style={{ fontFamily: '\'Helvetica Neue\', helvetica, sans-serif' }}>
        <Social>
          <div style={{ paddingTop: 60, width: theWidth, height: 120, textAlign: 'center', zIndex: 5 }}>
            <Button donate href="http://support.ocean.org/makeadonation" target="_blank" class="button button--white">Donate</Button>
          </div>
          {divider}
          <div style={{ textAlign: 'center', width: theWidth, height: 120, paddingTop: 35, zIndex: 5 }}>
            <p style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: 20, fontWeight: 700 }}>Follow Us</p>
            <Ul class="social-icons" role="menu">
              <Li class="social-icons__icon social-icons__icon--facebook"><a href="http://www.facebook.com/pages/Ocean-Wise/110729392295180"><img height={30} src="https://ocean.org/wp-content/uploads/facebook-white.svg" alt="Facebook" data-pagespeed-url-hash="809399021" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a></Li>
              <Li class="social-icons__icon social-icons__icon--twitter"><a href="https://twitter.com/Oceanwise"><img height={30} src="https://ocean.org/wp-content/uploads/twitter-white.svg" alt="Twitter" data-pagespeed-url-hash="3763457700" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a></Li>
              <Li class="social-icons__icon social-icons__icon--instagram"><a href="https://www.instagram.com/oceanwise/"><img height={30} src="https://ocean.org/wp-content/uploads/instagram-white.svg" alt="Instagram" data-pagespeed-url-hash="415834971" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a></Li>
              <Li class="social-icons__icon social-icons__icon--youtube"><a href="https://www.youtube.com/channel/UC0hLWXESQRctgaVPT-8N7Rw"><img height={30} src="https://ocean.org/wp-content/uploads/youtube-white.svg" alt="Youtube" data-pagespeed-url-hash="108786984" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a></Li>
              <Li class="social-icons__icon social-icons__icon--snapchat"><a href="https://www.snapchat.com/add/oceanwise"><img height={30} src="https://ocean.org/wp-content/uploads/snapchat-white.svg" alt="Snapchat" data-pagespeed-url-hash="1149850353" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a></Li>
            </Ul>
          </div>
          <Animate1 />
          <Animate2 />
        </Social>
        <div style={{ backgroundColor: 'black', width: '100%' }}>
          <div class="container" style={{ textAlign: 'center', paddingTop: 145, paddingBottom: 145 }}>
            <div class="row" style={{ display: 'inline-flex', flexDirection: flexDir }}>
              <div class="footer-form col-5" style={{ paddingRight: 20 }}>
                <div style={{ color: 'white', float: 'left', marginLeft: 15, marginBottom: 5 }}>Get Newsletter</div>
                <form action="https://vanaqua.createsend.com/t/r/s/urxdtd/" method="post" class="form form--newsletter" novalidate="">
                  <label><span class="acc-helper">Enter your email</span>
                  <Input class="form__input" type="email" placeholder="Enter your email" name="cm-urxdtd-urxdtd" required="" /></label>
                  <Button style={{ float: 'left' }}>Subscribe</Button>
                </form>
              </div>
              <div class="footer-menu col-5 col-med-push-2" style={secondStyle}>
                <div style={{ color: 'white' }}>© 2017 Ocean Wise</div>
                <div class="widget nav_menu-2 widget_nav_menu">
                  <div class="menu-footer-container">
                    <Ul id="menu-footer-1" class="menu">
                      <Li class="menu-item menu-item-type-post_type_archive menu-item-object-ocean_pr menu-item-1017"><A href="https://ocean.org/media-releases/">Media</A></Li>
                      <Li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-178"><A href="https://ocean.org/terms-conditions/">Terms</A></Li>
                      <Li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-179"><A href="https://ocean.org/privacy-policy/">Privacy</A></Li>
                    </Ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
