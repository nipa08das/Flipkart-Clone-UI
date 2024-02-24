import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({iconName,name,link}) => {
  return (
    <div className="py-2 bg-transparent rounded-sm">
      <div>
        <FontAwesomeIcon icon={{iconName}} className="text-gray-400" />
      </div>
      <div>
        <Link to={{link}}><p>{name}</p></Link>
      </div>
    </div>
  );
};

export default Dashboard;
