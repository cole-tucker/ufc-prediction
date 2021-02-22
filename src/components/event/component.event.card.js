import './component.event.card.css';

const RowItem = ({ left, center, right, canTow }) => {
  return (
    <div className={`row text-center ${canTow ? 'tow' : 'one'}`}>
      <div className="col-4">{left}</div>
      <div className="col-4 center" style={{ backgroundColor: '#1d1d1d', color: '#b3b3b3' }}>
        {center}
      </div>
      <div className="col-4">{right}</div>
    </div>
  );
};

const EventCard = ({ info }) => {
  
  const [left, right] = info.participants;
  return (
    <div className="card">
      <div className="title">{info.weight_class}</div>
      <div className="row row-bottom username">
        <div className="col-6 font-size-18 padding-rl-0 ">
          <div className="left">{left.name}</div>
        </div>
        <div className="col-6 font-size-18 padding-rl-0 ">
          <div className="right">{right.name}</div>
        </div>
      </div>
      <RowItem left={left.record} right={right.record} center="Record" canTow />
      <RowItem left={left.age} right={right.age} center="Age" />
      <RowItem left={left.height} right={right.height} center="Height" canTow />
      <RowItem left={left.weight} right={right.weight} center="Weight" />
      <RowItem left={left.reach} right={right.reach} center="Reach" canTow />
      <RowItem left={left.stance} right={right.stance} center="Stance" />
      <RowItem left={left.dob} right={right.dob} center="DOB" canTow />
      <div className="row text-center" style={{ marginTop: '15px', color: '#949494' }}>
        <div className="col-12">Betting Consensus</div>
      </div>

      <div className="row">
        <div className="col-6 ">
          <span style={{ marginLeft: '10px' }}>{left.name}</span>
        </div>
        <div className="col-6 text-right">
          <span style={{ marginRight: '10px' }}>{right.name}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <span style={{ marginLeft: '10px' }}>{left.money_line}</span>
        </div>
        <div className="col-6 text-right">
          <span style={{ marginRight: '10px' }}>{right.money_line}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
