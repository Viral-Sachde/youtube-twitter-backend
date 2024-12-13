//promise method

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler).catch((err) => next(err))
    }
}


export { asyncHandler }


// try catch method
// const asyncHandler = (fn) => async (req, res, next) => {

//     try {

//     } catch (error) {
//         res.status(error.code).json(
//             {
//                 success: false,
//                 message: error.message
//             }
//         )
//     }
// }