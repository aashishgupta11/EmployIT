export const catchAsyncErrors =(fromLoginRegisterApplication) =>{
    return(req,res,next) => {
        Promise.resolve(fromLoginRegisterApplication(req,res,next)).catch(next);
    };
};