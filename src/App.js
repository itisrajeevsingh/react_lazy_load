import React from "react";
import data from "./data";
import LazyLoad from "react-lazyload";

const Spinner = () => (
  <div className="post loading">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const UserProfile = ({ id, name, email, website, company, phone }) => (
  <div className="post">
    <LazyLoad
      once={true}
      placeholder={<img src={`https://avatars.dicebear.com/api/male/${id}.svg`} alt="..." />}
    >
      <div className="post-img">
        <img src={`https://avatars.dicebear.com/api/male/${id}.svg`} alt="..." />
      </div>
    </LazyLoad>
    <div className="post-body">
    <br></br>
      <h3>Name: {name}</h3>
      <br></br>
      <p>Email : {email}</p>
      <p>Website : {website}</p>
       <p>Company : {company.name} </p>
       <br></br>
       <h4>Call At : {phone} </h4>
    </div>
  </div>
);

const App = () => (
  <div className="App">
    <h2>React Lazy Load from Fake Rest API - By Rajeev Ranjan</h2>
    <div className="post-container">
      {
        data.map(user => (
        <LazyLoad
          key={user.id}
          height={100}
          offset={[-100, 100]}
          placeholder={<Spinner />}
        >
          <UserProfile key={user.id} {...user} />
        </LazyLoad>
      ))}
    </div>
  </div>
);

export default App;
    