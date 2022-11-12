//Carlos Arellano - 101339585

import { useState } from "react";
import "./App.css";

function App() {
  //Hooks
  const [fullName, setfullName] = useState("");
  const [displayfullName, setdisplayfullName] = useState(false);
  const [email, setEmail] = useState("");
  const [displayEmail, setdisplayEmail] = useState(false);
  const [address, setAddress] = useState("");
  const [displayAddress, setdisplayAddress] = useState(false);
  const [address2, setAddress2] = useState("");
  const [displayAddress2, setdisplayAddress2] = useState(false);
  const [city, setCity] = useState("");
  const [displayCity, setdisplayCity] = useState(false);
  const [province, setProvince] = useState("");
  const [displayProvince, setdisplayProvince] = useState(false);
  const [postCode, setPostCode] = useState("");
  const [displayPostCode, setdisplayPostCode] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    // Display output
    setdisplayfullName(true);
    setdisplayEmail(true);
    setdisplayAddress(true);
    setdisplayAddress2(true);
    setdisplayCity(true);
    setdisplayProvince(true);
    setdisplayPostCode(true);
    setdisplayfullName(true);
  };

  return (
    <>
      <h1>Carlos Arellano - 101339585</h1>
      {/* Submit form */}
      <form onSubmit={HandleSubmit}>
        <h2>Data Entry Form</h2>
        <div className="top_section">
          <div>
            {/* Email*/}
            <label htmlFor="email">Email</label>
            <input type="email" className="email_input" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          {/* Full Name*/}
          <div>
            <label htmlFor="Full Name">Name</label>
            <input type="text" className="name_input" placeholder="Full Name" value={fullName} onChange={(e) => setfullName(e.target.value)} required/>
          </div>
        </div>
        {/* Address1 */}
        <label htmlFor="address1">Address</label>
        <input type="text" className="address1_input" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} required />
         {/* Address2 */}
        <label htmlFor="address2">Address 2</label>
        <input type="text" className="address2_input" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
        <div className="bottom_section">
           {/* City */}
          <div>
            <label htmlFor="City">City</label>
            <input type="text" className="city_input" value={city} onChange={(e) => setCity(e.target.value)} required/>
          </div>
           {/* Province */}
          <div>
            <label htmlFor="province" className="province_input_label">
              Province
            </label>
            <select className="province_input" value={province} onChange={(e) => setProvince(e.target.value)}>
            <option value="Choose">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value=" Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
           {/* Postal Code */}
          <div>
            <label htmlFor="postal_code">Postal Code</label>
            <input type="text" className="input_postal_code" value={postCode} onChange={(e) => setPostCode(e.target.value)} required/>
          </div>
        </div>
         {/* check box */}
        <input type="checkbox" required/> Agree Terms &amp; Condition?
        {/* submit btn */}
        <input type="submit" value="Submit" className="btn_submit" required />
      </form>

      {/* Display output */}
      <div className="output">
        <div>{displayfullName ? `Full name: ${fullName}` : ''}</div>
        <div>{displayEmail && `Email: ${email}`}</div>
        <div>{displayAddress && `Address: ${address}`}</div>
        <div>{displayAddress2 && `Adddress 2: ${address2}`}</div>
        <div>{displayCity && `City: ${city}`}</div>
        <div>{displayProvince && `Province: ${province}`}</div>
        <div>{displayPostCode && `Postal code: ${postCode}`}</div>
      </div>
    </>
  );
}

export default App;
