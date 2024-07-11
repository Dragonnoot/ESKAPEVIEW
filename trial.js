let IDHOLD = 0;

function genId() {
    IDHOLD += 1;
    return IDHOLD;
}

const TrialPrototype = {
    id,
    iso, // Dairy isolate  name to find obj in list - {name, origin, notes}
    pathogen, // Pathogen short to find obj in list - {short, name, notes}
    result,
    od,
    date,
    notes,

}

const Trial = (
    id = "MISSING",
    iso = "MISSING",
    path = "MISSING",
    result = "MISSING",
    od = "MISSING",
    date = "MISSING",
    notes
) => {
    const self = Object.create(TrialPrototype);
    self.id = id;
    self.iso = iso;
    self.pathogen = path;
    self.result = result;
    self.od = od;
    self.date = date;
    self.notes = notes;
    return self;

}

const TrialListPrototype = {
    trials,

    addTrial (iso, path, result, od, date, notes) {
        this.trials.push(Trial(genId(), iso, path, result, od, date, notes));
    },

    trialById (id) {
        for (let trial of this.trials) {
            if (trial.id == id) {
                return trial;
            }
        }
    },

    trialsByIso (iso) {
        let payload = [];

        for (let trial of this.trials) {
            if (trial.iso == iso) {
                payload.push(trial);
            }
        }

        return payload;
    },

    trialsByPath (path) {
        let payload = [];

        for (let trial of this.trials) {
            if (trial.pathogen == path) {
                payload.push(path);
            }
        }

        return payload;
    },

    trialsByResult (result) {
        let payload = [];

        for (let trial of this.trials) {
            if (trial.result == result) {
                payload.push(result);
            }
        }

        return payload;
    }

}