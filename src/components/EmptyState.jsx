// src/components/EmptyState.jsx
import React from "react";

export default function EmptyState() {
  return (
    <div className="emptystate">
      <p className="emptystate__text">Add your first contact!</p>
      <p className="emptystate__description">
        <span>Your saved contacts will appear here once you add them.</span>
      </p>
    </div>
  );
}