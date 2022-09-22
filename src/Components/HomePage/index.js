import CourseCard from "../CourseCard";
import Search from "../Search";
import TopNav from "../TopNav";
import "./HomePage.css";

function HomePage(props) {
  return (
    <>
      <TopNav onAddToCart={props.onAddToCart} count={props.count}></TopNav>
      <div className="home-container">
        <div className="search-text">
          <div className="home-text-container">
            <p className="home-text">
              Learn new skills online<br></br> with top educators
            </p>
          </div>
          <div className="search-component">
            <Search />
          </div>
        </div>

        <div className="home-image-container">
          <img
            className="image"
            src="https://international.humber.ca/assets/images/Home/globalsystemschallenge.jpg"
          ></img>
        </div>
      </div>
      <div className="home-info">
        <h3>A large selection of courses</h3>
        <p>Choose from courses with new courses published every month.</p>
      </div>
      <CourseCard
        productArray={props.productArray}
        onAddToCart={props.onAddToCart}
      ></CourseCard>
    </>
  );
}

export default HomePage;
