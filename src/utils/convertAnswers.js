export const convertAnswer = (n, answer) => {
    switch (n) {
        case 1:
            return answer === 0 ? "Да" : "Нет";
        case 2:
            return answer;
        case 3:
            if (answer === 0) return "0-2 млн руб/мес";
            if (answer === 1) return "2-5 млн руб/мес";
            if (answer === 2) return "5-10 млн руб/мес";
            if (answer === 3) return "+10 млн руб/мес";
            break;
        case 4:
            return answer;
        case 5:
            return answer;
        case 6:
            return answer === 0 ? "Да" : "Нет";
        case 7:
            return answer === 0 ? "Да" : "Нет";
        case 8: {
            let res = "";
            if (answer.includes(0)) res += "Amazon ";
            if (answer.includes(1)) res += "Walmart ";
            if (answer.includes(2)) res += "Spotify ";
            return res;
        }
        case 9:
            return answer === 0 ? "Да" : "Нет";
        case 10:
            return answer === 0 ? "Да" : "Нет";
        case 11:
            return answer === 0 ? "Да" : "Нет";
        case 12:
            return answer === 0 ? "Да" : "Нет";
        case 13:
            return answer === 0 ? "Да" : "Нет";
        case 14:
            if (answer === 0) return "$25 000-50 000";
            if (answer === 1) return "$50 000-100 000";
            if (answer === 2) return "$100 000-250 000";
            if (answer === 3) return "более $250 000";
            break;
        default:
            return null;
    }
};
