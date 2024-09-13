import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Hasanale")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="text-center bg-red-500 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;
