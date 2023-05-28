import React, { useState, useEffect } from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-20 h-20 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      {/* Your fallback content goes here */}
    </div>
  );
};

export default Loading;
