// ==========================================
// 対戦履歴データ（新規結果は一番下に追記）
// 
// 【書き方】
// date: "日付"
// kit: "Sword" | "Axe" | "Bow" | "UHC"
// p1: プレイヤー1, s1: p1の取得セット数, r1: 勝敗後の順位(#)
// p2: プレイヤー2, s2: p2の取得セット数, r2: 勝敗後の順位(#)
// ==========================================

const rawMatchLogs = [
  { date: "2026/08/01 17:48", kit: "Sword", p1: "MCsyaberu", s1: 3, r1: 1, p2: "dadan11pvp", s2: 1, r2: 2 },
  { date: "2026/08/01 18:12", kit: "UHC",   p1: "MCsyaberu", s1: 3, r1: 1, p2: "UnsaidLand4664", s2: 0, r2: 2 },
  { date: "2026/08/01 18:41", kit: "Sword", p1: "AntiUnlockJP", s1: 3, r1: 2, p2: "dadan11pvp", s2: 1, r2: 3 },
  { date: "2026/08/04 00:13", kit: "UHC",   p1: "MCsyaberu", s1: 3, r1: 1, p2: "UnsaidLand4664", s2: 0, r2: 2 },
  { date: "2026/08/04 00:40", kit: "Axe",   p1: "UnsaidLand4664", s1: 3, r1: 1, p2: "Reiteirei", s2: 1, r2: 2 },
  { date: "2026/08/04 00:49", kit: "Sword", p1: "UnsaidLand4664", s1: 3, r1: 4, p2: "Reiteirei", s2: 2, r2: 5 },
  { date: "2026/08/04 01:03", kit: "Bow",   p1: "Reiteirei", s1: 3, r1: 1, p2: "UnsaidLand4664", s2: 0, r2: 2 },
  { date: "2026/08/04 23:10", kit: "Bow",   p1: "MCsyaberu", s1: 3, r1: 2, p2: "UnsaidLand4664", s2: 0, r2: 3 },
  { date: "2026/08/04 23:30", kit: "Axe",   p1: "chikuwa03224837", s1: 3, r1: 2, p2: "Reiteirei", s2: 1, r2: 3 },
  { date: "2026/08/04 23:35", kit: "Axe",   p1: "MCsyaberu", s1: 3, r1: 3, p2: "Reiteirei", s2: 0, r2: 4 },
  { date: "2026/08/04 23:46", kit: "Axe",   p1: "chikuwa03224837", s1: 3, r1: 1, p2: "UnsaidLand4664", s2: 1, r2: 2 },
  { date: "2026/08/04 23:46", kit: "Bow",   p1: "MCsyaberu", s1: 3, r1: 1, p2: "Reiteirei", s2: 0, r2: 2 },
  { date: "2026/08/05 22:42", kit: "Sword", p1: "Shokai3197050", s1: 3, r1: 5, p2: "Reiteirei", s2: 1, r2: 6 },
  { date: "2026/08/05 22:51", kit: "Axe",   p1: "Shokai3197050", s1: 3, r1: 4, p2: "Reiteirei", s2: 1, r2: 5 },
  { date: "2026/08/07 21:41", kit: "Axe",   p1: "MCsyaberu", s1: 3, r1: 2, p2: "UnsaidLand4664", s2: 2, r2: 3 },
  { date: "2026/08/09 15:37", kit: "Sword", p1: "Act abso", s1: 3, r1: 6, p2: "Reiteirei", s2: 1, r2: 7 },
  { date: "2026/08/09 16:02", kit: "Sword", p1: "Shokai3197050", s1: 3, r1: 5, p2: "Act abso", s2: 0, r2: 6 },
  { date: "2026/08/09 18:07", kit: "Sword", p1: "Shokai3197050", s1: 3, r1: 4, p2: "UnsaidLand4664", s2: 2, r2: 5 },
  { date: "2026/08/09 18:32", kit: "Sword", p1: "Shokai3197050", s1: 3, r1: 3, p2: "dadan11pvp", s2: 2, r2: 4 },
  { date: "2026/08/09 18:55", kit: "UHC",   p1: "MCsyaberu", s1: 3, r1: 1, p2: "UnsaidLand4664", s2: 1, r2: 2 },
  { date: "2026/08/09 19:17", kit: "Sword", p1: "Shokai3197050", s1: 0, r1: 2, p2: "AntiUnlockJP", s2: 0, r2: 3 },
  { date: "2026/08/10 18:49", kit: "Sword", p1: "Reiteirei", s1: 3, r1: 7, p2: "VoteableArt9345", s2: 1, r2: 8 },
];
