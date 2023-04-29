import axios from 'axios'
class HelloWordService {
    executeHelloWordService() {
        return axios.get('http://localhost:8080/hello-world')
        
    }

    executeHelloWordBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
  
    }

    executeHelloWordPathVariableService(name) {
    
    //    let username = 'in28minutes'
    //    let password = 'dummy'

   //    let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            // {
            //     headers : {
            //         authorization: basicAuthHeader
            //     }
            // }
        );
        
    }

}

export default new HelloWordService