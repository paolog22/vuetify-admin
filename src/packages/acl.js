
export default function(Vue){
    Vue.acl = {
        can(permissionsArray){
            let userPermissions = JSON.parse(localStorage.getItem('permissions'));
            //let userRoles = JSON.parse(localStorage.getItem('roles'));
    
            if (permissionsArray.indexOf('&') !== -1 && permissionsArray.indexOf('|') !== -1 ){
                throw new SyntaxError('Use "&" for AND or "|" for OR, but not both', 'acl.js')
            } else if (permissionsArray.indexOf('&') !== -1){
                let permissions = permissionsArray.split('&');
                let accsess = true;
    
                for (let key in permissions){
                    console.log(userPermissions.indexOf(permissions[key]));
                    if (userPermissions.indexOf(permissions[key]) == -1){
                        accsess = false;
                    }
                } 
    
                return accsess;
            } else if (permissionsArray.indexOf('|') !== -1){
                let permissions = permissionsArray.split('|');
    
                for (let key in permissions){
                    console.log(userPermissions.indexOf(permissions[key]));
                    if (userPermissions.indexOf(permissions[key]) != -1){
                        return true;
                    }
                } 
    
                return false;
            } else {
                if (userPermissions.indexOf(permissionsArray) == -1){
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
    

    Object.defineProperties(Vue.prototype, {
        $can: {
            get(){
                return Vue.acl.can;
            }
        }
    })
}