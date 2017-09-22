export class Task {
    id: number;
    name: string;
    status: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
