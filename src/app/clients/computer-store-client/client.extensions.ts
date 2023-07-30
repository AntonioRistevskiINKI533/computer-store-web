import { environment as env } from "../../../environments/environment";

export class BaseStaffDevelopmentClient {
    [x: string]: any;
  
    constructor() {
        
    }

    getBaseUrl() {
        return env.apiUrl;
    }
}
