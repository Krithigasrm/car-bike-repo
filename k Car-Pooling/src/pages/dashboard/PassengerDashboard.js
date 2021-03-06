
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function PassengerDashboard() {
  return (
      <div>
    <Topbar />
    <div className="container">
      <Sidebar />
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </div>
    </div>
  );
}
