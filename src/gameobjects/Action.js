// TODO: improve the design when more concrete game logic is decided

export class Outcome {
    constructor(message, stressScore, diagnosticScore, painScore, points) {
        this.message = message
        this.stressScore = stressScore
        this.diagnosticScore = diagnosticScore
        this.painScore = painScore
        this.points = points
    }

    apply(inventory) {
        inventory.stressScore += this.stressScore
        inventory.diagnosticScore += this.stressScore
        inventory.painScore += this.painScore
        inventory.points += this.points
    }
}

export class Action {
    static id = 1

    constructor(prompt, outcome) {
        this.prompt = prompt
        this.outcome = outcome
        this.actionId = Action.id
        Action.id += 1
        this.nextActions = []
    }

    addNextAction(nextActionNode) {
        this.nextActions.push(nextActionNode);
    }

    apply(inventory) {
        this.outcome.apply(inventory)
    }
}
