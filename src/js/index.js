import configureApplication from "./load";
import {geography_config} from './configurations/geography_sa';
import {geography_config as gcro_config} from './configurations/geography_gcro';

let profileId = 1;
let baseUrl;
let config = geography_config;

if (window.location.href.search("wazi.webflow.io") >= 0)
    baseUrl = "https://wazimap-ng.openup.org.za";
else if (window.location.href.search("openup.org.za/wazimap-ng-ui") >= 0)
    baseUrl = "https://wazimap-ng.openup.org.za";
else if (window.location.href.search("localhost") >= 0)
    baseUrl = "https://staging.wazimap-ng.openup.org.za"
else if (window.location.href.search("gcro.openup.org.za") >= 0) {
    baseUrl = "https://api.gcro.openup.org.za";
    config = gcro_config;
    profileId = 1;
}
else if (window.location.href.search("geo.vulekamali.gov.za") >= 0) {
    baseUrl = "https://staging.wazimap-ng.openup.org.za";
    config = geography_config;
    profileId = 2;
}
else
    baseUrl = "https://staging.wazimap-ng.openup.org.za"

configureApplication(baseUrl, profileId, config);
