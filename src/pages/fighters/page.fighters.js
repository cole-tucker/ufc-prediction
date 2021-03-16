import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import LetterItem from '../../components/letter/component.letter';
import './page.fighters.css';

class Fighters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fighterMap: {},
      letter: 'A',
      items: props.events.fighters,
    };
  }

  componentDidMount() {
    this.parseFighters();
  }

  parseFighters() {
    const fighterMap = {};
    const { fighters } = this.props.events;

    fighters.forEach((item) => {
      const { last_name } = item;
      const letter = last_name.split('')[0].toUpperCase();
      if (!fighterMap[letter]) {
        fighterMap[letter] = [];
      }
      fighterMap[letter].push(item);
    });

    this.setState({ fighterMap: fighterMap });
  }

  handleSelectItem(letter) {
    this.setState({ letter });
  }

  // Last,First	W	L	Age	HT	WT	Stance	Reach
  render() {
    const { fighterMap, letter } = this.state;
    console.log(letter, fighterMap);
    return (
      <div className="pageBody">
        <div className="row">
          <div className="col-11 font-size-30 font-bold header-text">UFC FIGHTERS</div>
        </div>
        <LetterItem onSelect={this.handleSelectItem.bind(this)} />

        <div className="fHeader">
          <div className="col-3">Last,First</div>
          <div className="col-1">W</div>
          <div className="col-1">L</div>
          <div className="col-1">Age</div>
          <div className="col-1">HT</div>
          <div className="col-1">WT</div>
          <div className="col-1">Stance</div>
          <div className="col-1">Reach</div>
        </div>
        {fighterMap &&
          fighterMap[letter] &&
          fighterMap[letter].map((item, index) => {
            return (
              <div className={`pLetter ${index % 2 === 0 ? 'one' : 'two'}`} key={index}>
                <div className="col-3">{item.last_name + ' ' + item.first_name}</div>
                <div className="col-1">{item.wins}</div>
                <div className="col-1">{item.losses}</div>
                <div className="col-1">{item.age}</div>
                <div className="col-1">{item.height}</div>
                <div className="col-1">{item.weight}</div>
                <div className="col-1">{item.stance}</div>
                <div className="col-1">{item.reach}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default connect((state) => ({ ...state }), { ...actions })(Fighters);
