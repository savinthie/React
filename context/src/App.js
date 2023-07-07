import { UserProvider, useUser } from "./UserContext";


const UserLogin = () => {
  const {user}=useUser();
  return(
    <p>
      Hello <span className='userNameClass'>{user.name}</span>
    </p>
  );
};

const Header=()=>{
  return(
    <header>
      <h2>Blog App</h2>
      <UserLogin />
    </header>
  );
};

const Page = ()=> {
  const {user}=useUser();
  return(
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum....................Lorem ipsum....................
        Lorem ipsum....................Lorem ipsum....................
        Lorem ipsum....................Lorem ipsum....................
        Lorem ipsum....................Lorem ipsum....................
        Lorem ipsum....................Lorem ipsum.................... 
      </p>
      <p>Written by {user.name}</p>
      
    </div>
  );
};










function App(){
  return(
    <div className='App'>
      <Header />
      <Page />
    </div>
  );


}

function Root(){
  return(
    <UserProvider>
      <App />
    </UserProvider>
  
  )
}

export default Root;
