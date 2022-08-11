import TopNav from "../TopNav";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <TopNav></TopNav>
      <div className="home-container">
        <p className="home-text">
          Learn new skills online<br></br> with top educators
          <input className="search" type="text" placeholder="What do you want to learn? &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &#x1F50E;&#xFE0E;"></input>
          </p>
        <img
          className="image"
          src="https://international.humber.ca/assets/images/Home/globalsystemschallenge.jpg"
        ></img>
      </div>
      <div className="home-info">
        <h3>A large selection of courses</h3>
        <p>Choose from courses with new courses published every month.</p>
      </div>
    </>
  );
}

export default HomePage;
