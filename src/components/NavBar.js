
export default function NavBar( { onHomeClicked, onSearchClicked}) {
return (
    <div>
        <h2>THIS IS MY NAVBAR</h2>
        <a  onClick={onHomeClicked}>home</a>
        <span>    </span> 
        <a  onClick={onSearchClicked}>search</a>
    </div>
)
}