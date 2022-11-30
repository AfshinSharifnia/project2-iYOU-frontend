import React, { useEffect, useState } from "react";

const AdminPage = ({ user }) => {
  ///
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    async function getInfo() {
      console.log("getinfo called");
      const response = await fetch(
        // `http://localhost:4000/api/profile/myProfile`,
        `/api/profile/people?userId=${user.basecampId}`, //pass basecampID
        // `/api/profile/myProfile`,
      );
      if (response.ok) {
        const userInfoData = await response.json();
        setUserInfo(userInfoData);
        console.log("getinfo response: ", userInfoData);
      }
    }
    if (user) getInfo();
  }, [user]);

  ///
  return <div>AdminPage</div>;
};

export default AdminPage;
