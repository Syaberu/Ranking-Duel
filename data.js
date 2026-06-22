// data.js
window.players = [
    {
        name: "AntiUnlockJP",
        mainKit: "Sword",
        matchScores: {
            MCsyaberu:    { sword: [3, 1], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Reiteirei:    { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Ahirusan4414: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "MCsyaberu",
        mainKit: "Sword",
        matchScores: {
            AntiUnlockJP: { sword: [1, 3], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [4, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Reiteirei:    { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Ahirusan4414: { sword: [2, 2], axe: [0, 0], bow: [0, 0], uhc: [0, 0] } // 2-2 引き分け
        }
    },
    {
        name: "biribirijin",
        mainKit: "Sword",
        matchScores: {
            AntiUnlockJP: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            MCsyaberu:    { sword: [0, 4], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Reiteirei:    { sword: [4, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Ahirusan4414: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "Reiteirei",
        mainKit: "Sword",
        matchScores: {
            AntiUnlockJP: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            MCsyaberu:    { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [0, 4], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Ahirusan4414: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "Ahirusan4414",
        mainKit: "Sword", // 仮のメインキット
        matchScores: {
            AntiUnlockJP: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            MCsyaberu:    { sword: [2, 2], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }, // 2-2 引き分け
            biribirijin:  { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            Reiteirei:    { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    }
];
