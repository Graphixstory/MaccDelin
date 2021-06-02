// import { createConnections } from "./create-connection";
// const createConnections = require("./create-connection");
// import { adminSchema } from "./admin-service/models/admin.model";
// import { editorSchema } from "./editor-service/models/editor.model";
// let db: any;

// export function getDatabase(): Promise<any> {
//   if (this.db) return Promise.resolve(db);
//   return createDatabases();
// }

// async function createDatabases() {
//   const { db1, db2 } = await createConnections(
//     "mongodb://localhost/MaccDelin-Admin",
//     "mongodb://localhost/MaccDelin-Editor"
//   );
//   const AdminModel = db1.model("admin", adminSchema);
//   const EditorModel = db2.model("editor", editorSchema);
//   db = {
//     AdminModel,
//     EditorModel,
//     connections: {
//       db1,
//       db2,
//     },
//   };
//   return db;
// }

// import { createConnections } from "./create-connection";
// const createConnections = require("./create-connection");
// import { adminSchema } from "./admin-service/models/admin.model";
// const adminSchema = require("../../admin-service/models/admin.model");
// import { editorSchema } from "./editor-service/models/editor.model";
// const editorSchema = require("../../editor-service/models/editor.model");
// const mongoose = require("mongoose");
// const getDatabase = () => {
//   if (this.db) return Promise.resolve(db);
//   return createDatabases();
// };

// module.exports = getDatabase;

// async function createDatabases() {
// const { db1, db2 } = createConnections(
//   "mongodb://localhost/MaccDelin-Admin",
//   "mongodb://localhost/MaccDelin-Editor"
// );
// const editorDB = mongoose.createConnection(
//   "mongodb://localhost/MaccDelin-Editor",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
// );
// const EditorModel = editorDB.model(
//   "editor",
//   require("../../editor-service/models/editor.model")
// );

// module.exports = EditorModel;

// const adminDB = mongoose.createConnection(
//   "mongodb://localhost/MaccDelin-Admin",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
// );
// exports.AdminModel = adminDB.model(
//   "admin",
//   require("../../admin-service/models/admin.model")
// );

// module.exports = AdminModel;

// const AdminModel = db1.model("admin", adminSchema);
// const EditorModel = db2.model("editor", editorSchema);
// db = {
//   AdminModel,
//   EditorModel,
//   connections: {
//     db1,
//     db2,
//   },
// };
//   db = {
//     EditorModel,
//     AdminModel,
//     connections: {
//       editorDB,
//       adminDB,
//     },
//   };
//   return db;
// }
// module.exports = EditorModel;
// module.exports = AdminModel;