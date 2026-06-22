// data.js
window.players = [
    {
        name: "AntiUnlockJP",
        mainKit: "Sword", // 任意のメインキット
        matchScores: {
            // AntiUnlockJPはMCsyaberuに3勝1敗 [自分の勝ち, 相手の勝ち]
            MCsyaberu: { sword: [3, 1], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "MCsyaberu",
        mainKit: "Sword",
        matchScores: {
            // MCsyaberuはAntiUnlockJPに1勝3敗 [自分の勝ち, 相手の勝ち]
            AntiUnlockJP: { sword: [1, 3], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    }
];
