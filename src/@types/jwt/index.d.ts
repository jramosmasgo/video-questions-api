import * as jwt from "jsonwebtoken";

declare module "jsonwebtoken" {
  export interface UserIDPayload extends jwt.JwtPayload {
    id: string;
  }
}
