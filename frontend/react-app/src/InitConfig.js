import config from "react-global-configuration";

function InitConfig(production) {
  config.set({
    host_url: production
      ? ``
      : `http://localhost:8080`,
    routes: {
      allMappings: `/mapping/all`,
      templates: `/mapping/templates`,
      microservice: `/microservice`,
      mapping: `/mapping/get`,
      updateMapping: `/mapping/update`,
    }
  });
}

export default InitConfig;
