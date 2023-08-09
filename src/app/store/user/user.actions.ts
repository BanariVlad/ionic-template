export class UserLogin {
  static readonly type = '[User] Login';
  constructor(public user: any) {}
}

export class UserLogout {
  static readonly type = '[User] Logout';
  constructor() {}
}
