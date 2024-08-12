let employee = {
    eid: "6235",
    ename: "Subhajeet",
    eaddress: "India",
    salary: 50000,
    dept:{
        did:1,
        dname: "ASE",
        contact:{
            phno: "123456789",
            email: "xyz@abc.com"
        }
    }
}
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

console.log("=====================================================");