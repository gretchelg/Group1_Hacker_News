import logo from "./image/logo.png"
export default function NavBar( { onHomeClicked, onSearchClicked}) {
    return (
    
        <div>
            <div className="navbar">
            <table  border = "0"  width="100%" height="10px"  bgcolor="#ff6600" >
            <tr>
            < td width= "18px" padding-right="4px">
                <div className="hnlogo">
                <img src ={logo} width="100%" height="100%" /> 
                </div>
            </td>
                <span className ="pagetop">
                    <b className ="hname">
                        <a href="news">   Hacker News  </a>
                    </b>
                    
                    <a className = "topsel" href="newest">    new | </a>
                    <a href ="newcomments">comments | </a>
                    <a href ="ask">ask | </a>
                    <a href ="show">show | </a>
                    <a href ="jobs">jobs | </a>
                    <a href ="submit">submit  </a>
                </span>
                <td>
                    <span classname="pagetop">
                        <a href = "login?goto.news">login</a>
                    </span>
                </td>
            
        </tr>
        </table>
        </div>
    
    {/* 
            <h2>THIS IS MY NAVBAR</h2>
            <a  onClick={onHomeClicked}>home</a>
            <span>    </span> 
            <a  onClick={onSearchClicked}>search</a> */}
    
    
        </div>
    )
    }