// data.js
window.players = [
    {
        name: "AntiUnlockJP",
        mainKit: "Sword",
        matchScores: {
            MCsyaberu:    { sword: [3, 1], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Reiteirei:    { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "MCsyaberu",
        mainKit: "Sword",
        matchScores: {
            AntiUnlockJP: { sword: [1, 3], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [4, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Reiteirei:    { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "biribirijin",
        mainKit: "Sword",
        matchScores: {
            AntiUnlockJP: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            MCsyaberu:    { sword: [0, 4], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Reiteirei:    { sword: [4, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] } // 4-0 で勝利
        }
    },
    {
        name: "Reiteirei",
        mainKit: "Sword", // 仮のメインキットとしてSwordを設定
        matchScores: {
            AntiUnlockJP: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            MCsyaberu:    { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [0, 4], axe: [0, 0], bow: [0, 0], uhc: [0, 0] } // 0-4 で敗北
        }
    }
];
