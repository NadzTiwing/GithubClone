class NewDepartment{
    
    constructor(initials, name){
        this.initials = initials;
        this.name = name;
        
        //check if it exists
        let departments=[];
        let classDepts = new Departments();
        let depts = classDepts.getAll();
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
        //insert new data and prevent insertion of duplicated names
        if(!isDuplicated){
            departments.push({
                id:initials,
                name:name
            });
        }
        window.localStorage.setItem('departments', JSON.stringify(departments));
        
    }
    
    
}

class Departments {
    getAll(){
        const deptsStr = window.localStorage.getItem('departments');
        return JSON.parse(deptsStr) || [];
    }

    deleteAll(){
        window.localStorage.clear();
    }

    deleteDept(id){
        let deptsStr = window.localStorage.getItem('departments');
        let depts = JSON.parse(deptsStr);
        let newDepts = depts.filter(dep => dep.id !== id );
        
        window.localStorage.setItem('departments', JSON.stringify(newDepts));
        //window.localStorage.removeItem('name');
    }

    updateDept(id, name){
        let depts = this.getAll();
        depts.map( dept =>{
            if(dept.id === id) dept.name= name;
            return dept;
        })
        window.localStorage.setItem('departments', JSON.stringify(depts));
    }
}

// export default {NewDepartment, Departments};