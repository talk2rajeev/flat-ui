import React from "react";
import "../assets/css/breadcrumb.min.css";

type Saperator = "oblique" | "singleArrow" | "doubleArrow";
type ClickType = (item: string) => void;

interface BreadCrumbInterface {
  list: Array<string>;
  saperator: Saperator;
  onClick: ClickType;
}

export const BreadCrumb = ({
  list,
  saperator,
  onClick,
}: BreadCrumbInterface) => {
  return (
    <div className={`rt-breadcrumb`}>
      {list.map((item: string, index: number) => (
        <BreadcrumbItem
          key={item}
          item={item}
          onclick={onClick}
          index={index}
          saperator={saperator}
        />
      ))}
    </div>
  );
};

const BreadcrumbItem = ({
  item,
  index,
  onclick,
  saperator,
}: {
  item: string;
  index: number;
  onclick: ClickType;
  saperator: Saperator;
}) => {
  if (index > 0) {
    switch (saperator) {
      case "oblique":
        return (
          <>
            <SaperatorIcon>
              <span>/</span>
            </SaperatorIcon>
            <span className="rt-leftmargin5" />
            <BreadcrumbLabel onclick={onclick} item={item} saperator={saperator}/>
          </>
        );
      case "singleArrow":
        return (
          <>
            <SaperatorIcon>
              <span>&#8250;</span>
            </SaperatorIcon>
            <span className="rt-leftmargin5" />
            <BreadcrumbLabel onclick={onclick} item={item} saperator={saperator}/>
          </>
        );
      case "doubleArrow":
        return (
          <>
            <SaperatorIcon>
              <span>&#187;</span>
            </SaperatorIcon>
            <span className="rt-leftmargin5" />
            <BreadcrumbLabel onclick={onclick} item={item} saperator={saperator}/>
          </>
        );
      default:
        return <BreadcrumbLabel onclick={onclick} item={item} saperator={saperator}/>;
    }
  }
  return (
    <div
      onClick={() => onclick(item)}
      className={`rt-breadcrumb-item rt-breadcrumb--${saperator}`}
    >
      {item}
    </div>
  );
};

const SaperatorIcon = ({ children }: { children: React.ReactElement }) => {
  return <span className="rt-breadcrumb--saperator-icon">{children}</span>;
};

const BreadcrumbLabel = ({
  item,
  onclick,
  saperator,
}: {
  item: string;
  onclick: ClickType;
  saperator: Saperator;
}) => (
  <div
    onClick={() => onclick(item)}
    className={`rt-breadcrumb-item rt-breadcrumb--${saperator}`}
  >
    {item}
  </div>
);
