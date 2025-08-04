import { use, useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setOnline(false);
    });

    window.addEventListener("online", (e) => {
      setOnline(true);
    });
  }, []);

  return isOnline;
};

export default useOnlineStatus;
