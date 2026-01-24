export function respondWithJSON(res, code, payload) {
    res.header("Content-Type", "application/json");
    const body = JSON.stringify(payload);
    res.status(code).send(body);
}
export function respondWithError(res, code, message) {
    respondWithJSON(res, code, { error: message });
}
export function errorMiddleWare(err, req, res) {
    return respondWithError(res, 500, err.message);
}
//# sourceMappingURL=middleware.js.map