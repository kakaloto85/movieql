const gunwoo = {
    name: "gunwoo",
    age : 23,
    gender : "male"
};

const resolvers = {
    Query:{
        person:() => gunwoo
    }
};

export default resolvers