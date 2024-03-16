export interface BaseDO {
  created_by: string;
  created_time: number;
  updated_by?: string;
  updated_time?: number;
}

export interface JwtUserInfo {
  uid: string;
  is_admin: boolean;
}
