import './component.ranking.item.css';

const Ranking = (props) => {
  const { weight, rankings } = props;

  return (
    <div className="item">
      <div className="row">
        <div className="col-10 font-size-20 font-bold">{weight}</div>
      </div>
      <div className="itemBody">
        <div className="row">
          <div className="col-3">Rank</div>
          <div className="col-3">Fighter</div>
          <div className="col-3">Record</div>
          <div className="col-3">Last 3</div>
        </div>
        {rankings &&
          rankings.map((item, index) => {
            return (
              <div className={`row ${index % 2 === 0 ? 'one' : 'two'}`} key={index}>
                <div className="col-3">{item.champion ? '★' : index}</div>
                <div className="col-3">{item.name}</div>
                <div className="col-3">{item.record}</div>
                <div className="col-3">{item.last_three}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Ranking;
