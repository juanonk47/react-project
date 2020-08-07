import React from "react";
import "./home.scss";
import appInfo from "../../app-info";

export default () => (
  <React.Fragment>
    <div className={"content-block"}>
      <div className={"dx-card responsive-paddings"}>
        <h6>
          Proyecto para popder consultar los detalles de tu pelicula preferida
        </h6>
        <p>OMDb API</p>
        <p>
          The Open Movie Database The OMDb API is a RESTful web service to
          obtain movie information, all content and images on the site are
          contributed and maintained by our users.
        </p>
        <a target={"_blank"} href={"https://www.omdbapi.com/"}>
          OMDb API
        </a>
      </div>
    </div>
  </React.Fragment>
);
