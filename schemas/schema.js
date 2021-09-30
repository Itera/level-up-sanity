import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import person from "./person";
import practice from "./practice";

export default createSchema({
  name: "mySchema",
  types: schemaTypes.concat([person, practice]),
});
