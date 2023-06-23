import { connect } from "mongoose";
connect(process.env.LINK_DB)

.then(()=>console.log("connected to database"))
.catch((error)=>console.log(error))