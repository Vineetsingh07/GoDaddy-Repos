import React from "react";

const RepoDetailStats = ({ icon: Icon, label, value, iconClass, textClass }) => (
  <div className="flex items-center space-x-2 p-4 bg-emerald-500 rounded-xl shadow-sm">
    <Icon className={`${iconClass} text-3xl`} />
    <p className={`${textClass} font-semibold text-lg sm:text-xl`}>
      {label}: {value}
    </p>
  </div>
);

export default RepoDetailStats;
