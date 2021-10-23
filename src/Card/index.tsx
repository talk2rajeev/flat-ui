import React from "react";
import "../assets/css/card.css";
import "../assets/css/skeleton.css";

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
  loading?: boolean
}

export const Card: React.FC<CardInterface> = ({
  children,
  header,
  coverImage,
  withBorderRadius,
  withBoxShaddow,
  withShaddowOnHover,
  loading = false
}: CardInterface) => {
    
    const headerClass = header ? "rt-card--header" : null;
    const withBoxShaddowClass = withBoxShaddow ? "rt-card--box-shaddow" : null;
    const withBorderRadiusClass = withBorderRadius ? "rt-card--border-radius": null;
    const withShaddowOnHoverClass = withShaddowOnHover ? "rt-card--box-shaddow-hover" : null;
    const loadingClass = loading ? "loading" : null;

    const classes = [headerClass, withBoxShaddowClass, withBorderRadiusClass, withShaddowOnHoverClass, loadingClass];
    const classesWithoutNull = classes.filter(classname => classname!==null)

    return (
        <div className={`rt-card ${classesWithoutNull.join(" ")}`}>
            {coverImage && <Cover {...coverImage} />}
            {header && <Header {...header} />}
            <div className="rt-card--body rt-card-padding">
                {children}
            </div>
        </div>
    );
};

const Header = (header: CardInterface['header']) => {
    return <div className={`rt-card--header-wrapper rt-card-padding ${header?.borderBottom ? "rt-card--with-bottom-header" : ""}`}>
        <div className="rt-card--header">
            <h4 className="header-text skeleton">{header?.title}</h4>
        </div>
    </div>
}

const Cover = (coverImage: CardInterface['coverImage']) => {
    return <div className="rt-card--cover-image-wrapper">
        <div className="rt-card--cover-image skeleton">
            <img src={coverImage?.image} alt={coverImage?.alt} />
        </div>
    </div>
}

