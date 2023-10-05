interface OptionVote {
    option: string;
    votes: number;
}

export class VoteApp {
    private options: OptionVote[] = [];

    addOption(option: OptionVote): void {
        this.options.push(option);
    }

    vote(chosen: string): void {
        const optionIndex = this.options.findIndex(
            (option) => option.option === chosen,
        );

        if (optionIndex !== -1) {
            this.options[optionIndex].votes++;
        } else {
            console.log(`Opção "${chosen}" não existe.`);
        }
    }

    winner(): OptionVote[] | null {
        let winner: OptionVote[] = [{ option: "", votes: 0 }];

        if (this.options.length == 0) {
            console.log("Não existem opções");
            return null;
        }

        for (const option of this.options) {
            if (option.votes > winner[0].votes) {
                winner = [option];
            } else if (option.votes == winner[0].votes) {
                winner.push(option);
            }
        }

        if (winner[0].option == "") {
            console.log("Sem vencedor");
            return null;
        }

        return winner;
    }
}

const voteLanguage = new VoteApp();

voteLanguage.addOption({ option: "Python", votes: 0 });
voteLanguage.addOption({ option: "JavaScript", votes: 0 });
voteLanguage.addOption({ option: "TypeScript", votes: 0 });

voteLanguage.vote("Python");
voteLanguage.vote("Python2");
voteLanguage.vote("Python");
voteLanguage.vote("JavaScript");
voteLanguage.vote("TypeScript");

const voteColor = new VoteApp();

voteColor.addOption({ option: "Vermelho", votes: 0 });
voteColor.addOption({ option: "Verde", votes: 0 });
voteColor.addOption({ option: "Azul", votes: 0 });

voteColor.vote("Vermelho");
voteColor.vote("Vermelho");
voteColor.vote("Verde");
voteColor.vote("Verde");

console.log("\nVencedor Language");
console.log(voteLanguage.winner());

console.log("\nVencedor Color");
console.log(voteColor.winner());

console.log("\nVencedor Null");
const voteNull = new VoteApp();
console.log(voteNull.winner());

console.log("\nVencedor Empty");
const voteEmpty = new VoteApp();
voteEmpty.addOption({ option: "Vermelho", votes: 0 });
console.log(voteEmpty.winner());
