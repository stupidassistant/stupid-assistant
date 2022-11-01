import Configstore from "configstore";
import pkg from "../package.json";

export const configstore = new Configstore(pkg.name);