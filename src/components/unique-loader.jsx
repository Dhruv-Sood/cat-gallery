'use client'

import React from 'react'

export function UniqueLoaderJsx({ size = 50, color = 'white' }) {
  return (
    (<div className="flex items-center justify-center" aria-label="Loading">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="70 200">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="2s"
            repeatCount="indefinite" />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="40 120">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="-360 50 50"
            dur="1.5s"
            repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="8" fill={color}>
          <animate
            attributeName="opacity"
            from="1"
            to="0.3"
            dur="1s"
            repeatCount="indefinite" />
        </circle>
      </svg>
    </div>)
  );
}