class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    footballPlayers.forEach((x) => {
      let [name, age, playerValue] = x.split('/');
      age = Number(age);
      playerValue = Number(playerValue);
      const foundPlayer = this.invitedPlayers.find((x) => x.name == name);
      if (!foundPlayer) {
        this.invitedPlayers.push({
          name,
          age,
          playerValue,
        });
      } else if (foundPlayer.playerValue < playerValue) {
        foundPlayer.playerValue = playerValue;
      }
    });
    const invitedPlayers = this.invitedPlayers
      .map((player) => player.name)
      .join(', ');

    return `You successfully invite ${invitedPlayers}.`;
  }
  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);
    const foundPlayer = this.invitedPlayers.find((x) => x.name === name);
    if (!foundPlayer) {
      throw new TypeError(`${name} is not invited to the selection list!`);
    } else if (playerOffer < foundPlayer.playerValue) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(
          foundPlayer.playerValue - playerOffer
        )} million more are needed to sign the contract!`
      );
    } else {
      foundPlayer.playerValue = 'Bought';
      return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }
  }
  ageLimit(name, age) {
    age = Number(age);
    const foundPlayer = this.invitedPlayers.find((x) => x.name == name);
    if (!foundPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    let difference = Math.abs(foundPlayer.age - age);
    if (foundPlayer.age >= age) {
      return `${name} is above age limit!`;
    } else if (difference < 5) {
      return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
    } else if (difference > 5) {
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    }
  }
  transferWindowResult() {
    let result = 'Players list:\n';
    this.invitedPlayers
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((x) => (result += `Player ${x.name}-${x.playerValue}\n`));
    return result;
  }
}

let fTeam = new footballTeam('Barcelona', 'Spain');
console.log(
  fTeam.newAdditions([
    'Kylian Mbappé/23/160',
    'Lionel Messi/35/50',
    'Pau Torres/25/52',
  ])
);
console.log(fTeam.ageLimit('Lionel Messi', 33));
console.log(fTeam.ageLimit('Kylian Mbappé', 30));
console.log(fTeam.ageLimit('Pau Torres', 26));
console.log(fTeam.signContract('Kylian Mbappé/240'));
