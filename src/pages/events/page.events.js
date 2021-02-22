/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EventCard from '../../components/event/component.event.card';
import Utility from '../../utility/Utility';
import './page.events.css';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: Utility.getCurrentWeekByDay(5),
      currentIndex: 10,
    };

    this.parseDate();
    this.parseCurrentDate(this.state.currentDate);
    this.getDateItems();
  }

  componentDidMount() {
    // console.log(this.props.events.date);
    // this.init();
  }

  async init() {
    const info = await this.props.eventList();
    console.log(info);
  }

  parseCurrentDate(date) {
    if (!date) {
      return '';
    }
    const dateValue = new Date(date);
    const txt = dateValue.toString().split(' ')[0];
    console.log('date:', txt, dateValue.getDate());
    return `${txt} ${dateValue.getDate()}`;
  }

  update() {
    this.setState({ ts: new Date() });
  }

  getDateItems() {
    const { currentDate, eventMap } = this.state;
    const { index } = eventMap[currentDate];
    this.state.currentIndex = index;
    this.update();
  }

  handleUpdateDate(index) {
    if (!index) {
      return;
    }
    this.state.currentIndex = this.state.currentIndex + index;
    this.update();
  }

  parseDate() {
    const { eventDate } = this.props.events;
    const eventMap = {};
    eventDate.forEach((event, index) => {
      const event_date = Utility.FormatDate(event.event_date, 'yyyy-MM-dd');
      event.index = index;
      eventMap[event_date] = event;
    });
    this.state.eventMap = eventMap;
    console.log(eventMap);
  }

  render() {
    const { info, eventDate } = this.props.events;
    const { fights } = info || {};
    const { currentIndex } = this.state;

    return (
      <div className="pageBody">
        <div className="row margin-top_10">
          <div className=" margin-left-10 margin-bottom-10 font-size-30 font-bold">UFC Events & Fight Cards</div>
        </div>
        <div className="row">
          <div className="btns">
            {eventDate && currentIndex && currentIndex - 1 >= 0 && (
              <div className="btn btn-dark eBtn" onClick={() => this.handleUpdateDate(-1)}>
                <i className="bi bi-caret-left-fill"></i>
                {this.parseCurrentDate(eventDate[currentIndex - 1].event_date)}
              </div>
            )}
            {eventDate && currentIndex && (
              <div className="btn btn-dark eBtn" onClick={() => this.handleUpdateDate(0)}>
                {this.parseCurrentDate(eventDate[currentIndex].event_date)}
              </div>
            )}
            {eventDate && currentIndex && currentIndex + 1 < eventDate.length && (
              <div className="btn btn-dark eBtn" onClick={() => this.handleUpdateDate(1)}>
                {this.parseCurrentDate(eventDate[currentIndex + 1].event_date)}
                <i className="bi bi-caret-right-fill"></i>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
        <div className={'row currentDate'}>
          <div className="dateText">{new Date(eventDate[currentIndex].event_date).toDateString()}</div>
        </div>
        <div className="row">
          {fights.map((row, index) => {
            return (
              <div key={index} className="col-4 padding-rl-5">
                <EventCard info={row} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ ...state }), { ...actions })(Events);
