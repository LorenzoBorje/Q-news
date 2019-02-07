import React, { Component } from 'react';
import Masthead from './components/masthead';
import Main from  './components/main';
// import Footer from './components/footer';

import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: [{
        title: 'Bombers, fighters in Beijing’s “Happy New Year” video to Taipei',
        link: 'https://beta.scmp.com/news/china/military/article/2185054/pla-bombers-jet-fighters-star-beijings-happy-lunar-new-year',
        summary: '"Propaganda film leaves little to the imagination as images of military aircraft are set against shots of Taiwanese landmarks"',
        source: 'South China Morning Post'
      }, {
        title: 'Twin blasts at cathedral kills 20 in Mindanao, the south of the Philippines',
        link: 'https://en.m.wikinews.org/wiki/Bombs_kill_at_least_20_at_cathedral_in_Mindanao,_Philippines',
        summary: 'Twin bombings yesterday struck the Jolo Cathedral in Mindanao, Philippines. The second blast affected first responders following the first; between the two blasts, at least 20 were killed.',
        source: 'Wikinews'
      }, {
        title: 'US study finds correlation between gun ownership, youth suicide',
        link: 'https://en.wikinews.org/wiki/US_study_finds_correlation_between_youth_suicide,_household_gun_ownership',
        summary: `A new study published in the American Journal of Preventive Medicine in January, declared household gun ownership rates within the United States to be "the strongest single predictor of a state's youth suicide rate".`,
        source: 'Wikinews'
      }, {
        title: 'Chicago Architecture Biennial to reveal curatorial direction',
        link: 'https://www.instagram.com/p/BtepQJLhiSN/',
        summary: `North America's answer to Venice returns this fall`,
        source: '@ChicagoArchitectureBiennial'
      }, {
        title: 'Facebook to merge Instagram, Messenger, Whatsapp',
        link: 'https://www.recode.net/2019/2/1/18207046/facebook-messenger-instagram-whatsapp-scott-galloway-kara-swisher-pivot-ftc-regulation-ftc-russia',
        summary: `The company’s planned merger of Instagram, WhatsApp, and Facebook Messenger into one system should alarm regulators, NYU’s Scott Galloway says.`,
        source: 'Recode.net'
      }, {
        title: 'Apple in 2018, the Sixcolors report card',
        link: 'https://sixcolors.com/post/2019/01/apple-in-2018-the-six-colors-report-card/',
        summary: `This is the fourth year `,
        source: 'Six Colors'

      }]
    }
  }

  render() {
    return (
      <div className="App">
        <Masthead />
        <Main stories={this.state.stories}/>
        {/* <Footer /> */}
      </div>
    );
  }
}

