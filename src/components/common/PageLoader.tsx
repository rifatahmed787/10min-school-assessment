import React from "react";

const PageLoader = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close animate-pulse"></div>
            <div className="control minimize animate-bounce"></div>
            <div className="control maximize animate-pulse"></div>
          </div>
        </div>
        <div className="text">Please Wait...</div>
      </div>
    </section>
  );
};

export default PageLoader;
