import "./App.css";
import {useState} from 'react'


function App() {

  const[formData,setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"India",
    streetAddress:"",city:"",state:"", postalCode:"",
    comments:false,candidates:false,offers:false
  })

  function changeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData( (prev) =>({...prev,[name]: type ==="checkbox " ? checked:value}))
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing the value of Form Data");
    console.log(formData);


  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
      <label htmlFor="firstName">FirstName</label>
      <br/>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Rishav"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <label htmlFor="lastName">LasttName</label>
      <br/>
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Soni"
        value={formData.lirstName}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="email">Email Address</label>
       <br/>
        <input 
        type="text"
        name="email"
        id="email"
        placeholder="rishavmithila@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <label htmlFor="country">Country</label>
        <br/>
        <select 
          input="text" 
          id="country"
          name="country"
          value={formData.country} 
          onChange={changeHandler}
          className="outline"

           >
       <option>india</option>
        <option>mexico</option>
        <option>thailand</option>
        <option>canada</option>
        
          </select>

          <br/>

        <label htmlFor="streetAddress">Street Address</label>
       <br/>
        <input 
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="c-57"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="city">City</label>
       <br/>
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="hanuman nagar"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="state">State</label>
       <br/>
        <input 
        type="text"
        name="state"
        id="state"
        placeholder="patna"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        />

        <br/>


        <label htmlFor="postalCode">Postal Code</label>
       <br/>
        <input 
        type="text"
        name="postalCode"
        id="Postalcode"
        placeholder="800020"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <fieldset>

          <legend>By Email</legend>
          <div className="flex ">  
           <input 
            id="comments"
            name="comments"
            type="checkbox"
            checked={formData.comments}
            onChange={changeHandler}

          />

          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified someones posts a comment on a posting</p>
          </div>
          
</div>

          <div className="flex ">  
           <input 
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}

          />

          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified someones posts a comment on a posting</p>
          </div>
          
</div>
     
<div className="flex ">  
           <input 
            id="offers"
            name="offers"
            type="checkbox"
            checked={formData.offers}
            onChange={changeHandler}

          />

          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offers</p>
          </div>
          
</div>
    
          
        </fieldset>

        <br/>

        <fieldset>
          <legend>Push Notification</legend>

          <p>These are delivered via sms to your mobile phone</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}

          
          
          />

          <label htmlFor="pushEverthing">Everything</label>

          <br/>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}

          
          
          />

          <label htmlFor="pushEmail">Same as email</label>
          
          <br/>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            onChange={changeHandler}

          
          
          />

          <label htmlFor="pushNothing">No Push Notificatio</label>
        </fieldset>

        <br/>

        <button className="bg-blue-500 text-white font-bold rounded py-2">Save</button>
        
      </form>
    </div>
  );
}

export default App;
