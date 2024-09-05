export const getCards = () => {
    const data = [
        {type: "Fortune", name: "Lucky #7", wtdoes: "You've obtained 700 dollars"}, 
        {type: "Fortune", name: "Robber", wtdoes: "You've obtained a robber, you can send the robber to steal someones money, the longer he takes the more money it can steal but it can be caught (spin a roulette each turn to determine the robbers fate)"},
        {type: "Fortune", name: "New Pair of Wheels", wtdoes: "In your next turn, you can throw tow times the dice and move the sum of both dices."},
        {type: "Miss Fortune", name: "Where's the car?", wtdoes: "You've lost your car, throw the dice and go back"},
        {type: "Miss Fortune", name: "Family troubles?", wtdoes: "Your family is in trouble, you send half of your money to your family."},
        {type: "Miss Fortune", name: "Stormy Coins", wtdoes: "You and your ally split their money equally"},
        {type: "Miss Fortune", name: "Not so Fast", wtdoes: "You can't move in your next turn"},
        {type: "Miss Fortune", name: "Dept to Pay", wtdoes: "You've to pay the money you owe"} ,
    ];
    
    return Promise.resolve(data);
      
};
