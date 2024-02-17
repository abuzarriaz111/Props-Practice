const Man = ({ data }) => {
  return (
    <div className="container shadow coment_card">
      <div className="d-flex ">
        <img src={data.imgsrc} alt="img" style={{height:100,width:100}}></img>
        <div className="custom_text">
          <h6>{data.name}<span>.ULCA</span></h6>
          <p>{data.comnt}</p>
          <div className="footer">
            <a>like.</a>
            <a>Reply</a>
            <p>.2 seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Man;
