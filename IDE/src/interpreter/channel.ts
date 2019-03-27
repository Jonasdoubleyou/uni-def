export default class Channel {
  listeners = new Map<string, ((data: any, channel: Channel) => any)[]>();

  constructor(private on: Worker) {
    on.onmessage = (event: any) => {
      const { name, data } = event.data;

      for(const listener of this.listeners.get(name) || []) {
        listener(data, this);
      }


    };
  }

  listen<T>(name: string, handler: (data: T) => void) {
    if(!this.listeners.has(name))
      this.listeners.set(name, []);

    this.listeners.get(name)!.push(handler);
  }


  unlisten<T>(name: string, handler: (data: T) => void): boolean {
    const listeners = this.listeners.get(name) || [];
    const index = listeners.indexOf(handler);
    if(index === -1) return false;
    listeners.splice(index, 1);
    return true;
  }

  once<T>(name: string): Promise<T> {
    return new Promise(resolve => {
      const handleOnce = (data: T) => {
        resolve(data);
        this.unlisten(name, handleOnce);
      };

      this.listen(name, handleOnce);
    });
  }

  trigger<T>(name: string, data: T) {
    this.on.postMessage({
      name,
      data,
    });
  }

  implement<T, R>(name: string, handler: (data: T) => R) {
    this.listen<T>(name, (data) => {
      this.trigger(name + "-return", handler(data));
    });
  }

  call<T, R>(name: string, data: T): Promise<R> {
    const result = this.once<R>(name + "-return");

    this.trigger(name, data);

    return result;
  }

}
