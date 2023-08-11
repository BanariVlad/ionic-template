export class SetTheme {
  static readonly type = '[Theme] Dark';

  constructor(public isDark: boolean) {}
}
