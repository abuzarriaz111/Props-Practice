const  Same= ({data}) => {
    return (
      <div className="container shadow " >
        {
        data.map ((value)=>{
          return(
            <div className="card shadow  customstyle "  style={{width:200 }}>
            <img src={value.imgsrc} className="" alt="helo"></img>
            <h4>{value.name}</h4>
            <p>{value.model}</p>
            </div>
          )})}
      </div>
      );
}
 
export default Same;