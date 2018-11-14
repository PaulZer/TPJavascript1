class AuthMiddlewares {

    static hasValidAuthorizationToken(req, res, next){
        if(!req.headers.authorization === "tmlp"){
            return next({
                status: 401,
                message: "Vous n'êtes pas connecté"
            });
        }
        next();
    }
}

module.exports = AuthMiddlewares;