import React, { useState } from "react";
import "../assets/css/skeleton.css";

export interface SkeletonInterface {}

export const Skeleton: React.FC<SkeletonInterface> = ({}: SkeletonInterface) => {
  

  return (
    <div className="skeleton">
        a
    </div>
  );
};


export interface GridSkeletonInterface {
  rows: number,
  cols: number,
}
export const GridSkeleton: React.FC<GridSkeletonInterface> = ({
  rows,
  cols,
}: GridSkeletonInterface) => {
  const noOfRows: Array<number> = [];
  const noOfCols: Array<number> = [];
  for (let i = 0; i < rows; i++ ) {
    noOfRows.push(i);
  }
  for (let i = 0; i < cols; i++ ) {
    noOfCols.push(i);
  }
  return (
    <div className="rt-grid-skeleton-container">
        {
          noOfRows.map((row) =><div key={row} className="rt-skeleton-grid-row">
            {
              noOfCols.map((col) => <div key={row+''+col} className="rt-skeleton-grid-column"></div>)
            }
          </div>)
        }
    </div>
  );
};


export interface TextSkeletonSkeletonInterface {
  type: 'heading' | 'paragraph',
  rows?: number,
  hasShortLastRow?: boolean,
}
export const TextSkeleton: React.FC<TextSkeletonSkeletonInterface> = ({
  rows = 1, 
  type,
  hasShortLastRow = false
}: TextSkeletonSkeletonInterface) => {
  const noOfLine = [];
  for (let i = 0; i < rows; i++ ) {
    noOfLine.push(i);
  }
  return (
    <div className={`rt-text--${type}`}>
      {
        noOfLine.map((line) => <div key={line} className={`rt-text--shimmer ${hasShortLastRow && rows === line + 1 ? 'rt-text--shimmer-shortline' : ''}`}></div>)
      }
    </div>
  );
};

