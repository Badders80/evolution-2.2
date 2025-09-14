import React from "react";

/**
 * Not found page shown for unmatched routes.
 */
export default function NotFound() {
  return (
    <div className="text-center p-6 bg-[#006400] text-white min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bw-gradual mb-4">Page Not Found</h1>
        <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
