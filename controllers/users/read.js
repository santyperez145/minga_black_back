export default function (req,res) {
    try {
        return res.status(200).json({
            succes:true,
            response:'despues',
            message:'/users'
        })
    } catch (error) {
        return res.status(500).json({
            succes:false,
            response:null,
            message:error.message
        })
    }
}