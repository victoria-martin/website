const dev = { apiUrl: "http://localhost:3000" };

const prod = {
  // apiUrl: window.location.hostname === 'staging.yoonix.io'
  //   ? 'https://api.staging.yoonix.io'
  //   : 'https://api.yoonix.be',
  apiUrl: "https://victoria-martin-website.herokuapp.com/",
};

export default process.env.NODE_ENV === "production" ? prod : dev;
