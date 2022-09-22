import CourseCard from "../CourseCard";
import Search from "../Search";
import TopNav from "../TopNav";
import "./HomePage.css";

function HomePage(props) {
  return (
    <>
      <TopNav onAddToCart={props.onAddToCart} count={props.count}></TopNav>
      <div className="home-container">
        <p className="home-text">
          Learn new skills online<br></br> with top educators
          <Search />
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
      <CourseCard
        productArray={props.productArray}
        onAddToCart={props.onAddToCart}
      ></CourseCard>
    </>
  );
}

export default HomePage;
