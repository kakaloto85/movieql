import {getById,people,addPerson, deletePerson} from "./db";
const resolvers = {
    Query:{
        people: ()=> people,
        person: (_,{id}) => getById(id)
    },
    Mutation:{
        addPerson:(_,{name,age,gender}) => addPerson(name,age,gender),
        deletePerson:(_,{id})=>deletePerson(id)
    }
};

export default resolvers