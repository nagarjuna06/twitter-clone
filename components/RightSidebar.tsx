import RecommendUsers from "./RecommendUsers";
import SignIn from "./SignIn";

const RightSidebar = () => {
  return (
    <div className="flex justify-start">
      <SignIn />
      <RecommendUsers />
    </div>
  );
};

export default RightSidebar;
