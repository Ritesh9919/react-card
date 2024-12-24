import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 flex max-w-md">
        <img
          src={user.picture.large}
          alt="User"
          className="rounded-full w-24 h-24 mr-6"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-700 mb-1">
            <strong>Gender:</strong> {user.gender}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
