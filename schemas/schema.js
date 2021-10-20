import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import person from "./person";
import practice from "./practice";
import link from "./link";
import session from "./session";
import subsession from "./subsession";
import attachment from "./attachment";
import picture from "./picture";
import certify from "./certify";
import mainArea from "./mainArea";

import term from "./term";


export default createSchema({
  name: "levelUp",
  types: schemaTypes.concat([
    person, 
    practice, 
    picture,
    certify,
    mainArea,
    attachment,
    subsession, 
    session, 
    link,
    term,
  ]),
});
