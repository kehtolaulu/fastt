class Speedometer {
    start() {
        this.startTime = Date.now();
    }

    stop() {
        this.startTime = null;
    }

    hasStarted() {
        return Boolean(this.startTime);
    }

    speed(text) {
        let currentTime = Date.now();
        let timeElapsed = currentTime - this.startTime;
        return Math.floor(1000 * 60 * text.length / timeElapsed);
    }
}

export default Speedometer;
