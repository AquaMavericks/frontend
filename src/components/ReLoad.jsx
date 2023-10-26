import React from "react";
function ReLoad() {

  const handleReload = () => {
    window.location.reload();
    
  };

  return (
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3580/3580294.png"
        width="25"
        height="25"
        alt="Home logo"
        onClick={handleReload} 
        style={{ cursor: "pointer" }} 
      />
    </div>
  );
}

export default ReLoad;
