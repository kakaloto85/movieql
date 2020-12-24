export const people = [
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