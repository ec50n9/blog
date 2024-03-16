import { request } from "..";
import type { KingUserInfo } from "./types";

export const getKingUserInfo = () =>
  request<KingUserInfo>("/get-king-user-info");
