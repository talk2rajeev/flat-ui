import React from "react";
import "../assets/css/card.css";

type CardHeaderType = {
  title: string;
  borderBottom: boolean;
};
type CoverImage = {
  image: string;
  alt: string;
};
export interface CardInterface {
  children: React.ReactNode;
  header?: CardHeaderType;
  coverImage?: CoverImage;
  withBorderRadius?: boolean;
  withBoxShaddow?: boolean;
  withShaddowOnHover?: boolean;
}

export const Card: React.FC<CardInterface> = ({
  children,
  header,
  coverImage,
  withBorderRadius,
  withBoxShaddow,
  withShaddowOnHover,
}: CardInterface) => {
    
    const headerClass = header ? "rt-card--header" : "";;
    const withBoxShaddowClass = withBoxShaddow ? "rt-card--box-shaddow" : "";
    const withBorderRadiusClass = withBorderRadius ? "rt-card--border-radius": "";
    const withShaddowOnHoverClass = withShaddowOnHover ? "rt-card--box-shaddow-hover" : "";

    const classes = [headerClass, withBoxShaddowClass, withBorderRadiusClass, withShaddowOnHoverClass];

    return (
        <div className={`rt-card ${classes.join(" ")}`}>
            {coverImage && <Cover {...coverImage} />}
            {header && <Header {...header} />}
            <div className="rt-card--body">
                {children}
            </div>
        </div>
    );
};

const Header = (header: CardInterface['header']) => {
    return <div className={`rt-card--header-wrapper ${header?.borderBottom ? "rt-card--with-bottom-header" : ""}`}>
        <div className="rt-card--header">
            <h4 className="header-text">{header?.title}</h4>
        </div>
    </div>
}

const Cover = (coverImage: CardInterface['coverImage']) => {
    return <div className="rt-card--cover-image-wrapper">
        <div className="rt-card--cover-image">
            <img src={coverImage?.image} alt={coverImage?.alt} />
        </div>
    </div>
}
