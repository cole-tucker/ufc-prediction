/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './page.rankings.css';
import RankingItem from '../../components/ranking/component.ranking.item';

class Rankings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: props.events.rankings,
    };
  }

  componentDidMount() {
    console.log('111111111');

    // this.state.currentItem = this.props.events.rankings;
  }

  update() {
    this.setState({ ts: new Date() });
  }
  handleSelectItem(source, index) {
    console.log(source.target.selectedIndex);
    const { selectedIndex } = source.target;
    if (selectedIndex === 0) {
      this.state.currentItem = this.props.events.rankings;
    } else {
      this.state.currentItem = [this.props.events.rankings[selectedIndex]];
    }
    this.update();
  }

  render() {
    const { currentItem } = this.state;
    return (
      <div className="pageBody">
        <div className="row margin-bottom-10">
          <div className="col-9 font-size-30 font-bold header-text">UFC Ranking</div>
          <div className="col-3">
            <select type="text" className="form-control btn-dark" onChange={this.handleSelectItem.bind(this)}>
              <option className="dark" value="">
                All
              </option>
              {this.props.events.rankings &&
                this.props.events.rankings.map((item, index) => (
                  <option key={index} className="dark" value={item.weight}>
                    {item.weight}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {currentItem && currentItem.map((item, index) => <RankingItem key={index} {...item} />)}
      </div>
    );
  }
}

export default connect((state) => ({ ...state }), { ...actions })(Rankings);
