import RightBar from "./Components/RightBar";
import Maincontent from "./Pages/Maincontent";
import "./styles.scss";

function Dashboard() {
  return (
    <>
      <div className="dashboardcontent">
        <Maincontent />
        <RightBar />
      </div>
    </>
  );
}

export default Dashboard;
