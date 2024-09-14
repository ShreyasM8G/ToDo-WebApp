import React from 'react';
import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
function App() {
	let navigate=useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault(event);
    const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
			
		})

    const data = await response.json();
	console.log(data.status)
	if (data.status ==='ok') {
		
		navigate('../Login')
}};
function Change(){
	navigate('../Login')
}
return (
    <div >
      <h1>Register</h1>

      <form onSubmit={registerUser} >
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register"/>
				<input type="submit" value="login" onClick={Change}/>
			</form>
    </div>
  );
  }


export default App;
