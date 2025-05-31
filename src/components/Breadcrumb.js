// Breadcrumb.js (with console logs)
import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "../components/i18n";
import { useTranslation } from 'react-i18next';

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs();
  const { t, i18n } = useTranslation();

  // console.log("Breadcrumbs:", breadcrumbs); // Log the breadcrumbs array

  return (
    <nav className="breadcrumb">
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        // console.log("Match:", match); // Log the match object
        // console.log("Breadcrumb:", breadcrumb); // Log the breadcrumb object

        // Skip the language segment
        if (match.pathname === `/${i18n.language}`) {
          return null;
        }

        const breadcrumbLabel = breadcrumb.props.children;

        if (!breadcrumbLabel) {
          return null;
        }

        return (
          <React.Fragment key={match.pathname}>
            <NavLink to={match.pathname}>
              {t(breadcrumbLabel)}
            </NavLink>
            {index === breadcrumbs.length - 1 ? null : (<span>{">"}</span>)}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;