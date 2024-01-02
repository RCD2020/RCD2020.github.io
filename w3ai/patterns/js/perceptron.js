// perceptron object
function Perceptron(no, learningRate=0.00001) {
    // set initial values
    this.learnc = learningRate;
    this.bias = 1;

    // compute random weights
    this.weights = [];
    for (let i = 0; i <= no; i++) {
        this.weights[i] = Math.random() * 2 - 1;
    }


    this.activate = function(inputs) {
        let sum = 0;
        for (let i = 0; i < inputs.lengths; i++) {
            sum += inputs[i] * this.weights[i];
        }
        if (sum > 0) {return 1;} else {return 0;}
    }

    this.train = function(inputs, desired) {
        inputs.push(this.bais);
        let guess = this.activate(inputs);
        let error = desired - guess;
        if (error != 0) {
            for (let i = 0; i < inputs.length; i++) {
                this.weights[i] += this.learnc * error * inputs[i];
            }
        }
    }
}