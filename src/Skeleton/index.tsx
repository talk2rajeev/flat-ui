import React, { useState } from "react";
import "../assets/css/skeleton.css";

export interface SkeletonInterface {}

export const Skeleton: React.FC<SkeletonInterface> = ({}: SkeletonInterface) => {
  return <div className="skeleton">a</div>;
};

export interface GridSkeletonInterface {
  rows: number;
  cols: number;
}
export const GridSkeleton: React.FC<GridSkeletonInterface> = ({
  rows,
  cols,
}: GridSkeletonInterface) => {
  const noOfRows: Array<number> = [];
  const noOfCols: Array<number> = [];
  for (let i = 0; i < rows; i++) {
    noOfRows.push(i);
  }
  for (let i = 0; i < cols; i++) {
    noOfCols.push(i);
  }
  return (
    <div className="rt-grid-skeleton-container">
      {noOfRows.map((row) => (
        <div key={row} className="rt-skeleton-grid-row">
          {noOfCols.map((col) => (
            <div key={row + "" + col} className="rt-skeleton-grid-column"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export interface TextSkeletonSkeletonInterface {
  type: "heading" | "paragraph";
  rows?: number;
  hasShortLastRow?: boolean;
}
export const TextSkeleton: React.FC<TextSkeletonSkeletonInterface> = ({
  rows = 1,
  type,
  hasShortLastRow = false,
}: TextSkeletonSkeletonInterface) => {
  const noOfLine = [];
  for (let i = 0; i < rows; i++) {
    noOfLine.push(i);
  }
  return (
    <div className={`rt-text--${type}`}>
      {noOfLine.map((line) => (
        <div
          key={line}
          className={`rt-text--shimmer ${
            hasShortLastRow && rows === line + 1
              ? "rt-text--shimmer-shortline"
              : ""
          }`}
        ></div>
      ))}
    </div>
  );
};



export interface ImageSkeletonInterface {
  width: number;
  height: number;
  isRound?: boolean
}
export const ImageSkeleton: React.FC<ImageSkeletonInterface> = ({
  width,
  height,
  isRound,
}: ImageSkeletonInterface) => (
  <div className={`rt-image-skeleton ${isRound ? 'rt-image-skeleton-round' : ''}`} style={{ width, height }} />
);



export interface ArticleSkeletonInterface {}
export const ArticleSkeleton: React.FC<ArticleSkeletonInterface> = ({

}: ArticleSkeletonInterface) => {
  return (
    <div className="rt-skeleton-article-container">
      <TextSkeleton type="heading" rows={1} hasShortLastRow />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ImageSkeleton width={130} height={150}/>
        <div style={{flex: 'auto', marginLeft: 20}}>
          <TextSkeleton type="paragraph" rows={8} hasShortLastRow />
        </div>
      </div>
    </div>
  );
};

export interface ArticleSnippetSkeletonInterface {}
export const ArticleSnippetSkeleton: React.FC<ArticleSnippetSkeletonInterface> = ({

}: ArticleSnippetSkeletonInterface) => {
  return (
    <div className="rt--skeleton-article-container">
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ImageSkeleton width={90} height={90}/>
        <div style={{flex: 'auto', marginLeft: 20}}>
          <TextSkeleton type="heading" rows={1} hasShortLastRow />
          <TextSkeleton type="paragraph" rows={3} hasShortLastRow />
        </div>
      </div>
    </div>
  );
};
