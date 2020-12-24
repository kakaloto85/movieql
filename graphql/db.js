export let people = [
    {
        id:1,
        name: "gunwoo",
        age : 23,
        gender : "male"
    },
    {
        id:2,
        name: "youngju",
        age : 23,
        gender : "female"
    }
];
    
export const getById = id => {
    const filteredPeople = people.filter(person => person.id ===id);
    return filteredPeople[0];
}
export const addPerson =(name,age,gender)=>{
    const newPerson ={
        id:people.length+1,
        name,
        age,
        gender
    };
    people.push(newPerson);
    console.log(people);
    return newPerson;
};
export const deletePerson = (id)=>{
    const remainPeople = people.filter(person=>person.id !==id);
    if(people.length>remainPeople.length){
        people=remainPeople
        return true;
    }
    else{
        return false;
    }
}