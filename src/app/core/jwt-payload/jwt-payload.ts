export interface JWTPayload{
    iss: string,
    sub: string,
    id: number,
    userName: string,
    iat: number,
    exp: number
}