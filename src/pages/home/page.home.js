import React from 'react';
require('./page.home.css');

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.PKInfo = {
      image: 'https://www.oddsshark.com/sites/default/files/styles/featured_node_image/public/ufc_node_0.jpg?itok=SZVyWbjN',
      title: 'Usman vs Burns Odds, Fight Prediction and Betting Preview',
      desc:
        'Kamaru “The Nigerian Nightmare” Usman and Gilbert “Durinho” Burns were set to headline UFC 251 on July 11, but Burns tested positive for COVID-19. The fight was postponed for over seven months but now the two have a date at UFC 258 on...',

      list: [
        {
          title: 'A Brief History of the UFC',
          desc: `The first-ever UFC event (a pay-per-view affair) was held at the McNichols Sports Arena in Denver, Colorado. It was in 1993 and the winner was Royce Gracie of the legendary Gracie family – they’re like the Kardashians of MMA. After UFC 1, the sport began to generate interest from sponsors and its fan base began to grow. Fighting for a place in the professional sports landscape, UFC expanded from just pay-per-view and created The Ultimate Fighter, a reality television show for Spike TV about up-and-coming MMA fighters. Due to the UFC’s mainstream exposure, fighters like Georges St-Pierre became household names.

Dana White, who has held the position of UFC president since 2001, has contributed to the sport’s mainstream appeal by ensuring cards feature prominent fighters and events are heavily promoted. As of 2018, there had been over 400 events and female stars like Ronda Rousey and Cris Cyborg have become just as popular as their male counterparts. Names like Conor McGregor, Daniel Cormier, T.J. Dillashaw and Rose Namajunas have become as popular as other stars of the sports world like Tom Brady, LeBron James, Serena Williams and Sidney Crosby.

`,
        },
        {
          title: 'How to Bet on the UFC',
          desc: `When it comes to betting on the UFC, there are two main types of bets you can make. Both betting options give you a chance to place smart wagers on the matchups and fighters of your choice.
          `,
        },
        {
          title: 'Moneyline',
          desc: `A moneyline bet is a wager you place on the fighter you believe will win the fight. Each fighter is given the label of underdog or favorite depending on if they are predicted to win or lose the match. For this example, we’ll use made-up fighters.

Frankie “Frankenstein” Frankowitz is listed at -600 and his opponent Manny “Manners” McManus is listed at +450. In this scenario, Frankenstein is the favorite and Manners is the underdog. In order to win $100 on Frankenstein, you’d have to bet $600. But if you bet $100 on Manners, you’d net $450 if he wins. FYI, he’s called Manners because he’s super polite.
          `,
        },
        {
          title: 'OVER/UNDER',
          desc: `UFC betting odds will be provided for OVER/UNDER round betting wagers. This is a bet you can make on how many rounds a bout will last. For a three-round contest, a bet will usually be OVER/UNDER 1.5 rounds. For five-round matchups, the OVER/UNDER is typically 2.5 rounds. An example would be if M. Bison and Colonel William F. Guile from Street Fighter were squaring off for a five-round contest.

The UFC betting odds for this pretend fight are +120 if the match goes over 2.5 rounds, and -140 if the match goes under 2.5 rounds. If you think it’ll be a quick fight, you would take the UNDER and have to wager $140 to make $100. If you think the fight will last more than 2.5 rounds, you would take the OVER and you’d have to wager $100 to win $120. If Colonel Guile KOs Bison in the middle of the second round, if you bet the UNDER, you’d win your wager. Sonic Boom!
          
For a more in-depth “how to bet on the UFC” page, check out our Best UFC Betting Sites.
 `,
        },
        {
          title: 'The Difference Between UFC and MMA',
          desc: `The difference between mixed martial arts and the Ultimate Fighting Championship is that MMA is the sport and UFC is an organization. Mixed martial arts is the style of fighting used in the UFC. It’s the same as how the NFL is a league and football is the sport. MMA is a combination of different styles of fighting like wrestling, boxing, jiu-jitsu and kickboxing.

Mixed martial arts has been around since the early 1900s but it wasn’t until the 1980s that it gained steam. In 1993, upon the formation of the Ultimate Fighting Championship, MMA became the powerhouse it is today. The UFC is headquartered in Las Vegas. John Wick would probably be the face of the UFC if he was a real person because he knows how to fight and would probably win all his fights. Don’t touch his dog.
 `,
        },
        {
          title: 'UFC Terminology',
          desc: `When learning how to bet on the UFC, you should familiarize yourself with the terminology.
        
        `,
        },
      ],
    };
  }

  render() {
    const { image } = this.state.PKInfo;
    return (
      <div className="pageBody">
        {/* <div className="picture image">
          <iframe src="https://seamush.shinyapps.io/ufc_prediction/"></iframe>
        </div>
        <div className="ufc-title">{this.state.PKInfo.title}</div>
        <div className="ufc-desc">{this.state.PKInfo.desc}</div> */}
        <div className="ufc-news">
          {this.state.PKInfo.list.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.title}</h2>
                <div>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
