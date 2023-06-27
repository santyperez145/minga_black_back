import Author from "../../models/Author.js"

export default async(req,res)=> {
    try {
        let all = await Author.find()
        if (all.length>0) {
            return res.status(200).json({
                response:all,
                succes:true,
                message:'you have requested GET /api/authors'
            })
        } else {
            return res.status(404).json({
                response:null,
                succes:false,
                message:'not found authors'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            response:null,
            succes:false,
            message:error.message
        })
    }
}