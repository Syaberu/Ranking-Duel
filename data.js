// data.js
window.players = [
    {
        name: "AntiUnlockJP",
        mainKit: "Sword", // 任意のメインキット
        matchScores: {
            // AntiUnlockJPはMCsyaberuに3勝1敗 [自分の勝ち, 相手の勝ち]
            MCsyaberu: { sword: [3, 1], axe: [3, 1], bow: [3, 1], uhc: [3, 1] }
        }
    },
    {
        name: "MCsyaberu",
        mainKit: "Sword",
        matchScores: {
            // MCsyaberuはAntiUnlockJPに1勝3敗 [自分の勝ち, 相手の勝ち]
            AntiUnlockJP: { sword: [1, 3], axe: [1, 3], bow: [1, 3], uhc: [1, 3] }
        }
    }
];
