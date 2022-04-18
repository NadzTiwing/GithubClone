class Department{
    
    constructor(initials, name){
        const deptsStr = window.localStorage.getItem('departments');
        this.initials = initials;
        this.name = name;
        
        //check if it exists
        let departments=[];
        let depts = JSON.parse(deptsStr);
        let isDuplicated = false;
        if(depts){
            for(let i=0; i<depts.length; i++){
                let data={
                    id:depts[i].id,
                    name:depts[i].name
                }
                if(depts[i].name === name) isDuplicated= true;
                departments.push(data);
            }
        }
        //insert new data
        if(!isDuplicated){
            departments.push({
                id:initials,
                name:name
            });
        }
        window.localStorage.setItem('departments', JSON.stringify(departments));
        
    }
    // get name(){
    //     return this._name;
    // }
    // set name(value){
    //     this._name=value;
    // }
    getAllDepts(){
        const deptsStr = window.localStorage.getItem('departments');
        return JSON.parse(deptsStr);
    }
    
    deleteDept(id){
        let deptsStr = window.localStorage.getItem('departments');
        let depts = JSON.parse(deptsStr);
        let newDepts = depts.filter(dep => dep.id !== id );
        
        window.localStorage.setItem('departments', JSON.stringify(newDepts));
        //window.localStorage.removeItem('name');
    }
    deleteAll(){
        window.localStorage.clear();
    }
    // addDept(){
        
    // }

}