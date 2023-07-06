function ModeToggler(){

    let defaultMode=false;

    const lightmode=<h1>Light Mode Enabled!</h1>
    const darkmode=<h1>Dark Mode Enabled!</h1>

    
    function ModeHandler(){
        defaultMode=!defaultMode;

        if(defaultMode===true){
            console.log("light mode is on")
        }
        else{
           console.log("dark. mode is on")
        }
    }

    return(
        <>
        
        {defaultMode ? lightmode : darkmode}
       <button onClick={ModeHandler}>Mode Changer</button>
        
        </>
    )
 
}

export default ModeToggler;
