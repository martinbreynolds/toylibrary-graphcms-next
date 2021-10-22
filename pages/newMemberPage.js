export default function NewMember() {
    
    const newMember = async (event) => {
        event.preventDefault()
        await fetch("/api/newMember", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            firstName: event.target.fName.value,
            lastName: event.target.lName.value,
            email: event.target.name.value
           }),
        });
    }
    
    return (
      <div >
        <h1 className="text-blue-600 text-6xl text-center">
          New Member
        </h1>
        <form onSubmit={newMember}>
            <label htmlFor='fName'>First Name</label>
            <input id='fName' autoComplete='First Name' type='text' required/>
            <label htmlFor='lName'>Last Name</label>
            <input id='lName' autoComplete='Last Name' type='text' required/>
            <label htmlFor='email'>Email Address</label>
            <input id='email' autoComplete='Email Address' type='email' required/>

            <button type='submit'>Create New Member</button>
        </form>
      </div>
    );
  }