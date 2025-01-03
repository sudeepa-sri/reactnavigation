import { Component } from "react";
import './Forms.css';

class Forms extends Component {
  render() {
    return (
      <>
        
        <div className="slam">
          <form>
          <fieldset>
            <legend>SlamBook</legend>
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-row">
              <label htmlFor="nickname">Nickname:</label>
              <input type="text" id="nickname" placeholder="Enter your nickname" />
            </div>

            <div className="form-row">
              <label htmlFor="address">Address:</label>
              <textarea id="address" placeholder="Enter your address"></textarea>
            </div>

            <div className="form-row">
              <label htmlFor="memories">Memories:</label>
              <textarea id="memories" placeholder="Memories of ours"></textarea>
            </div>

            <div className="form-row">
              <label>Gender:</label>
              <input type="radio" name="gender" value="male" /> Male
              <input type="radio" name="gender" value="female" /> Female
            </div>

            <div className="form-row">
              <label>Favourite Actor:</label>
              <input type="checkbox" name="favouriteactor" value="Vijay" /> Vijay
              <input type="checkbox" name="favouriteactor" value="Ajith" /> Ajith
              <input type="checkbox" name="favouriteactor" value="Suriya" /> Suriya
            </div>

            <div className="form-row">
              <label htmlFor="school">School:</label>
              <select id="school">
              <option>choose school</option>
                <option>BVMHSS</option>
                <option>KVMHSS</option>
                <option>GSMHSS</option>
              </select>
            </div>

            <div className="submitbutton">
                 <button type="button" onClick={() => alert('Successfully submitted')}>Submit</button>
            </div>

            </fieldset>
          </form>
        </div>
      </>
    );
  }
}

export default Forms;
