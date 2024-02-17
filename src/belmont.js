const Location = ({data}) => {
    return ( 
        <div className="container shadow mt-5 ">
        {
            data.map((value)=>{
                return(
                
                    <div className="row align-items-center ">
                        <div className="col-3">
                        <img src={value.imgsrc}  className="imgset" alt="helo"></img>
                        </div>
                        <div className="col-3">
                            <h4>{value.name}</h4>
        
                        </div>
                        <div className="col-3">
                            <p>{value.infrom}</p>
        
                        </div>
                      
                    </div>

         ) }) }
       </div>
       


     );
}
 
export default Location;