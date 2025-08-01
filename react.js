let score=0;
let wicket=0;
let score_arr=[];
let hit=0;
let inputRef=React.createRef();
// function Runs(){
//     score+=1 // intially it will get increment in backend but not able to see in UI
//     //to see the UI for that we need to use original renderd fucntion again here
//     reactEle.render(<App/>);
// }



//Writing Common component to increase score

function Score_val(num){
    hit=num;
    
        reactEle.render(<App/>)
    }
    

// Component to Dispaly Wickets

function Addwicket(){
    hit="W"
    
        reactEle.render(<App/>)
    }


// Display result over by over

const Over_Result=() =>(
    <div>
        
        {score_arr.map((sc,index)=>(
            <>
            {index % 6 === 0?<br/>:null}
             <span key={index}>{sc===0||sc==="W"?(sc==="W"?(<strong style={{color:"red"}}>W</strong>):(<strong>.</strong>)): (sc)}</span>&nbsp;&nbsp;
              </>
        ))}
       
    </div>

)

// creating event to prevent default

function Handler(Event){
    Event.preventDefault();

    // on submit score or wicket should increase

    if(hit=="W"){
        wicket+=1
    }
    else{
        score +=hit
    }

    

    score_arr.unshift(
    // <span>{hit}{','}{inputRef.current.value}</span>
    <span>{`${hit}, ${inputRef.current.value}`}</span>
);

// once submit again we need to set inputs to default values for that
hit=0
inputRef.current.value=""
    reactEle.render(<App/>)
}

// Create a Component to map array to display after submit

const Coment=()=>(
    <>
    {score_arr.map((val,index)=>(
        <p key={index}>{val}</p>
    ))}
    </>
    
)

// /Creating Form

const Forms=()=>(
    <form onSubmit={Handler}>
        <input value={hit}/>
        <input ref={inputRef} placeholder="Enter Comment"/>
        <button>Submit</button>
    </form>
)



function Button_Click(){
    return (<>
    <div>
        <button onClick={()=>{Score_val(0)}}>0</button>
    <button onClick={()=>{Score_val(1)}}>1</button>
    <button onClick={()=>{Score_val(2)}}>2</button>
    <button onClick={()=>{Score_val(3)}}>3</button>
    <button onClick={()=>{Score_val(4)}}>4</button>
    <button onClick={()=>{Score_val(5)}}>5</button>
    <button onClick={()=>{Score_val(6)}}>6</button>
    <button onClick={Addwicket}>Wicket</button>
    </div>
    </>)
}
// This is Main App that we Render to Virtual Dom
const App=()=>(
    <>
    <h1>Score Card</h1>
    <h2>Total-Score:{score}/{wicket}</h2>
    <Button_Click/>
    <br/>
    <Forms/>
    <hr></hr>
    <Coment/>
    
    
    </>
)

const reactEle=ReactDOM.createRoot(document.getElementById("root"));
reactEle.render(<App/>)