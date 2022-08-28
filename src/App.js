import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import picture from "./slayer.jpg"
import HandleName from './Component/Profile/HandleName';

function App() {

const Follow = ()=> alert("You are in")

  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
            <ProfilePhoto image= {picture} />

            </div>
            <div className="card-body">
            <FullName />
            <Address adress="from holanda" adress1="@samiCH666" follow="22M" />
            <HandleName Follow={Follow} />
            </div>
          </div>
        
      

        </div>
      
      </div>
    </div>
  );
}

export default App;
