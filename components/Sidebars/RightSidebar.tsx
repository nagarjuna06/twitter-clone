import RecommendUsers from "../Cards/RecommendUsers";
import SignIn from "../Buttons/SignIn";

const RightSidebar = () => {
  return (
    <div className="flex justify-start">
      <SignIn />
      <RecommendUsers />
    </div>
  );
};

export default RightSidebar;
