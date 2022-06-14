const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="profile">
      <div className="container">
        <h1>User Profile</h1>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
