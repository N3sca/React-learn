
function Button(){
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }else{console.log(`${name} stop clicking me!`)}
    }

    const handleClick2 = (e) => e.target.textContent = "OUCH! 😐";
    //console.log(e) to see all properties from 'e'

    return(
        <>
            <button onClick={() => handleClick("Bro")} onDoubleClick={(e) => handleClick2(e)}>Click me 😁</button>
        </>
    )
    // '() =>'  this is on the statment to prevent auto click on load
}
export default  Button