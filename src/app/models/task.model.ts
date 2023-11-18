export class Task {

    constructor(private _task: string, private _completed: boolean, private _postponed: boolean) {}
 
    get task(): string {
        return this._task;
      }
     
      get completed(): boolean {
        return this._completed;
      }
     
      set completed(completed: boolean) {
        this._completed = completed;
      }

      get postponed(): boolean {
        return this._postponed;
      }
     
      set postponed(postponed: boolean) {
        this._postponed = postponed;
      }
     
      set task(task: string) {
        this._task = task;
      }

  }