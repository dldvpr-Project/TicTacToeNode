import {buildSchema} from "type-graphql";

const schema =  buildSchema({
    resolvers: [__dirname + "/resolvers/*.resolver.ts"],
});

export default schema;
