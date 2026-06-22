// data.js
window.players = [
    {
        name: "AntiUnlockJP",
        mainKit: "Sword",
        matchScores: {
            // 戦っていないキット（axe, bow, uhc）はすべて [0, 0] に設定
            MCsyaberu:    { sword: [3, 1], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "MCsyaberu",
        mainKit: "Sword",
        matchScores: {
            AntiUnlockJP: { sword: [1, 3], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            biribirijin:  { sword: [4, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    },
    {
        name: "biribirijin",
        mainKit: "Sword",
        matchScores: {
            AntiUnlockJP: { sword: [0, 0], axe: [0, 0], bow: [0, 0], uhc: [0, 0] },
            MCsyaberu:    { sword: [0, 4], axe: [0, 0], bow: [0, 0], uhc: [0, 0] }
        }
    }
];
