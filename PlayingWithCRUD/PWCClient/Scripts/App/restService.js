angular.module('restDemo').service('restService', ['$resource', '$q', function ($resource, $q) {
    var fGetArray = function (url) {
        var deffered = $q.defer();
        var serverRestAPI = $resource(url, {}, { get: { method: 'GET', IsArray: true } });
        serverRestAPI.get(function (response) {
            //console.log.response();
            return deffered.resolve(response.value);
        },
            function (error) {
                return deffered.reject(error);
            }
        );
        return deffered.promise;
    }
    var fGetIntStringObject = function (url) {
        var deffered = $q.defer();
        var serverRestAPI = $resource(url, { age:20, name:'Miral'}, { get:{method:'GET', isArray: false}});
        serverRestAPI.get(function (response) {
            //console.log.response();
            return deffered.resolve(response.value);
        },
            function (error) {
                return deffered.reject(error);
            }
        );
        return deffered.promise;
    }
    var fPost_Object = function (url) {
        var deffered = $q.defer();
        var serverRestAPI = $resource(url);
        var newPerson = { PersonID: 5, PersonName: "Rafi", PersonPhoneNo: "9018309831", PersonAge: 23}
        serverRestAPI.save(newPerson, function (response) {
            //console.log.response();
            return deffered.resolve(response.$resolve);
        },
            function (error) {
                return deffered.reject(error);
            }
        );
        return deffered.promise;
    }
    var fPut_Id_Object = function (url) {
        var deffered = $q.defer();
        var serverRestAPI = $resource(url, { id: 0 }, { anything: { method: 'PUT', isArray: false } });
        var updatedPerson = { PersonID:0, PersonName: "Miral", PersonPhoneNo: "9018309831", PersonAge: 23 }
        serverRestAPI.anything(updatedPerson, function (response) {
            //console.log.response();
            return deffered.resolve(response.$resolve);
        },
            function (error) {
                return deffered.reject(error);
            }
        );
        return deffered.promise;
    }
    var fDeleteId = function (url) {
        var deffered = $q.defer();
        var serverRestAPI = $resource(url, { id: 10 }, { fuckU: { method: 'DELETE', isArray: false } });
        serverRestAPI.fuckU(function (response) {
            //console.log.response();
            return deffered.resolve(response.$resolve);
        },
            function (error) {
                return deffered.reject(error);
            }
        );
        return deffered.promise;
    }

    return {
        Get_Array: fGetArray,
        Get_IntString_Object: fGetIntStringObject,
        Post_Object: fPost_Object,
        Put_Id_Object: fPut_Id_Object,
        Delete_Id: fDeleteId
    }
}]);