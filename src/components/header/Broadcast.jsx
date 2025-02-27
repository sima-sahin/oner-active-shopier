import { useEffect, useState } from "react";

const Broadcast = () => {
  const broadcast = ["CLICK TO JOIN THE LOYALTY CLUB", "FREE EXPRESS SHIPPING OVER €99", "EASY RETURNS"];
  const [title, setTitle] = useState(broadcast[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prev) => {
        const currentIndex = broadcast.indexOf(prev);
        const nextIndex = (currentIndex + 1) % broadcast.length;
        return broadcast[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [title])

  return (
    <div className="w-screen h-max-8 bg-black text-white text-center py-3 text-xs tracking-normal">
      {title}
    </div>
  )
}

export default Broadcast;
