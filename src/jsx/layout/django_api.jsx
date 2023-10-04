import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Django() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {details.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.channel}</p>
        </div>
      ))}
    </div>
  );

}

export default Django;